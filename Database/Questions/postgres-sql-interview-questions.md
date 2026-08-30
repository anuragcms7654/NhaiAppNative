# PostgreSQL Interview Questions — Full Stack Developer Prep

Organized by topic, roughly in increasing difficulty. Each question notes **what it's really testing**, plus Postgres-specific syntax where relevant.

---

## 1. Fundamentals & Filtering

**1. Write a query to fetch the 2nd/3rd/Nth highest salary from an `employees` table.**
Tests: `LIMIT/OFFSET`, `DISTINCT`, window functions.
```sql
-- Simple approach
SELECT DISTINCT salary FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1; -- 2nd highest

-- Robust approach (handles ties correctly)
SELECT salary FROM (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
) t WHERE rnk = 2;
```

**2. Find duplicate rows in a table (e.g., duplicate emails in `users`).**
```sql
SELECT email, COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

**3. Delete duplicate rows but keep one copy.**
Tests: `ctid`, window functions, subqueries.
```sql
DELETE FROM users
WHERE ctid NOT IN (
  SELECT MIN(ctid) FROM users GROUP BY email
);
```

**4. Difference between `WHERE` and `HAVING`.**
`WHERE` filters rows before grouping; `HAVING` filters groups after aggregation.

**5. Difference between `RANK()`, `DENSE_RANK()`, and `ROW_NUMBER()`.**
- `ROW_NUMBER()`: unique sequential number, no gaps, no ties.
- `RANK()`: same rank for ties, gaps after ties.
- `DENSE_RANK()`: same rank for ties, no gaps.

---

## 2. Joins

**6. Explain the difference between `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL OUTER JOIN`.**

**7. Find employees who don't have a manager (self-join scenario).**
```sql
SELECT e.name FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id
WHERE m.id IS NULL;
```

**8. Find customers who have never placed an order.**
Tests: `LEFT JOIN ... IS NULL` vs `NOT IN` vs `NOT EXISTS` (and why `NOT IN` is dangerous with NULLs).
```sql
SELECT c.* FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.id IS NULL;
```

**9. Write a query using a self-join to find employees earning more than their manager.**
```sql
SELECT e.name FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;
```

**10. What's the difference between `UNION` and `UNION ALL`?**
`UNION` removes duplicates (implicit sort/dedup, slower); `UNION ALL` keeps all rows (faster).

---

## 3. Aggregation & Grouping

**11. Get the department with the highest average salary.**
```sql
SELECT department_id, AVG(salary) avg_sal
FROM employees
GROUP BY department_id
ORDER BY avg_sal DESC
LIMIT 1;
```

**12. Find the running total (cumulative sum) of sales by date.**
Tests: window functions.
```sql
SELECT sale_date, amount,
  SUM(amount) OVER (ORDER BY sale_date) AS running_total
FROM sales;
```

**13. Find month-over-month growth in revenue.**
Tests: `LAG()`/`LEAD()`.
```sql
SELECT month, revenue,
  revenue - LAG(revenue) OVER (ORDER BY month) AS mom_change
FROM monthly_revenue;
```

**14. Pivot rows into columns (e.g., sales per quarter as columns).**
Tests: conditional aggregation or `crosstab` (tablefunc extension).
```sql
SELECT product,
  SUM(CASE WHEN quarter = 'Q1' THEN sales END) AS q1,
  SUM(CASE WHEN quarter = 'Q2' THEN sales END) AS q2
FROM sales_data
GROUP BY product;
```

---

## 4. Subqueries & CTEs

**15. What's a CTE (`WITH` clause) and when would you use `RECURSIVE`?**
Use for readability, breaking complex queries into steps, and recursive hierarchies (org charts, category trees).
```sql
WITH RECURSIVE org_chart AS (
  SELECT id, name, manager_id, 1 AS level
  FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, e.manager_id, oc.level + 1
  FROM employees e
  JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart;
```

**16. Correlated subquery vs regular subquery — explain with an example.**
Correlated subquery references the outer query and runs once per outer row (e.g., find employees earning above their department average).
```sql
SELECT e.name FROM employees e
WHERE e.salary > (
  SELECT AVG(salary) FROM employees e2 WHERE e2.department_id = e.department_id
);
```

**17. `EXISTS` vs `IN` — which is better and why?**
`EXISTS` short-circuits and handles NULLs safely; generally preferred for correlated existence checks on large tables.

---

## 5. Postgres-Specific Features

**18. What is `ON CONFLICT` (upsert) and how do you use it?**
```sql
INSERT INTO users (id, email) VALUES (1, 'a@x.com')
ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email;
```

**19. How do you query and index JSONB columns in Postgres?**
```sql
SELECT * FROM events WHERE payload->>'type' = 'click';
CREATE INDEX idx_payload ON events USING GIN (payload);
```

**20. What's the difference between `JSON` and `JSONB` in Postgres?**
`JSON` stores exact text (preserves formatting/duplicate keys); `JSONB` stores a decomposed binary format — faster to query, supports indexing, but slightly slower on insert.

**21. What are Postgres array types and how do you query them?**
```sql
SELECT * FROM posts WHERE 'sql' = ANY(tags);
SELECT * FROM posts WHERE tags @> ARRAY['sql', 'postgres'];
```

**22. `SERIAL` vs `IDENTITY` vs `UUID` as primary keys — pros/cons.**
`SERIAL` is legacy sequence-based (auto-increment); `GENERATED ALWAYS AS IDENTITY` is the SQL-standard modern replacement; `UUID` avoids collision across distributed systems but is larger and less index-friendly.

**23. What is `EXPLAIN ANALYZE` and how do you use it to debug a slow query?**
Shows the actual query plan with real timing/row counts — used to spot sequential scans that should be index scans, bad join orders, etc.

**24. What's the difference between a `VIEW` and a `MATERIALIZED VIEW`?**
A view is a stored query (always live); a materialized view caches results physically and must be refreshed (`REFRESH MATERIALIZED VIEW`).

---

## 6. Indexes & Performance

**25. When would a B-tree index NOT be used even if it exists on a column?**
E.g., `WHERE UPPER(name) = 'JOHN'` won't use an index on `name` unless it's a functional index; also low-cardinality columns, small tables, or `LIKE '%something'` (leading wildcard).

**26. What's the difference between a clustered and non-clustered index? Does Postgres have clustered indexes?**
Postgres doesn't maintain a permanently clustered table (no true clustered index like SQL Server); `CLUSTER` command physically reorders the table once based on an index but doesn't maintain that order automatically afterward.

**27. What is a composite index, and does column order matter?**
Yes — a composite index on `(a, b)` can serve queries filtering on `a` alone or `a AND b`, but not `b` alone efficiently.

---

## 7. Transactions & Constraints

**28. Explain ACID properties.**
Atomicity, Consistency, Isolation, Durability.

**29. What are Postgres's transaction isolation levels, and what's the default?**
`READ UNCOMMITTED` (treated as Read Committed), `READ COMMITTED` (default), `REPEATABLE READ`, `SERIALIZABLE`.

**30. Difference between `DELETE`, `TRUNCATE`, and `DROP`.**
`DELETE` is row-by-row, logged, can be rolled back, triggers fire, `WHERE` allowed. `TRUNCATE` is fast, minimal logging, resets identity, no `WHERE`. `DROP` removes the table structure entirely.

---

## Quick Practice Tips
- Practice writing these **without autocomplete** — many interviews use a shared doc or whiteboard.
- Be ready to explain **why** you chose a `JOIN` over a subquery, or a window function over `GROUP BY`.
- Know at least one **Postgres-only** feature well (JSONB, `ON CONFLICT`, arrays, or `RETURNING` clause) — it signals real hands-on experience vs generic SQL knowledge.
- Have a go-to answer for "how would you find and fix a slow query" using `EXPLAIN ANALYZE`.
