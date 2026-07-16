# 30 SQL Interview Questions (Basic → Advanced)
### Based on `schema_and_data.sql` — 4 tables: departments, employees, projects, employee_projects

Run `schema_and_data.sql` first in pgAdmin's Query Tool, then attempt these in order.

---

## 🟢 BASIC (1–10)

1. Fetch all columns and all rows from the `employees` table.
2. Fetch `emp_name` and `salary` of employees whose salary is greater than 70000.
3. Fetch all distinct `job_title` values from `employees`.
4. Fetch employees hired after `2020-01-01`, ordered by `hire_date` in descending order.
5. Fetch employees whose name starts with the letter 'S'.
6. Fetch employees whose salary is between 60000 and 100000 (inclusive).
7. Fetch employees who belong to `dept_id` 1 or 3, using the `IN` operator.
8. Fetch employees who are not assigned to any department (`dept_id IS NULL`).
9. Find the total number of employees in the company.
10. Find the total, average, minimum, and maximum salary across all employees.

## 🟡 INTERMEDIATE (11–20)

11. Find the number of employees in each department (`GROUP BY`).
12. Find departments that have more than 3 employees (`GROUP BY` + `HAVING`).
13. Fetch each employee's name along with their department name (`INNER JOIN`).
14. Fetch all employees along with their department name, including employees who have no department assigned (`LEFT JOIN`).
15. Fetch all departments along with employee names, including departments that have zero employees (e.g. Legal) — use `RIGHT JOIN` or a `LEFT JOIN` with tables reversed.
16. Fetch each employee's name along with their manager's name (`SELF JOIN` on `employees`).
17. Fetch employees who earn a higher salary than their own manager.
18. Fetch the names of all employees working on the 'ERP Upgrade' project (join across `employees`, `employee_projects`, `projects`).
19. Fetch department names that currently have no projects assigned (subquery with `NOT IN` or `NOT EXISTS`).
20. Fetch employees whose salary is greater than the average salary of the entire company (subquery in `WHERE`).

## 🔴 ADVANCED (21–30)

21. Fetch the second highest salary in the company (without using `LIMIT/OFFSET` — try a subquery approach too).
22. Fetch the 3rd highest salary using `DENSE_RANK()`.
23. Categorize every employee into a salary band — 'Low' (<65000), 'Medium' (65000–100000), 'High' (>100000) — using `CASE WHEN`.
24. Fetch names of all "top-level" employees who have no manager (`manager_id IS NULL`).
25. Use `UNION` to combine employee names from department 1 and department 2 into a single result set.
26. Use `EXISTS` to find all departments that have at least one project assigned to them.
27. Rank employees by salary within each department using `RANK()` or `DENSE_RANK()` (window function with `PARTITION BY`).
28. Fetch the top 2 highest-paid employees in each department using `ROW_NUMBER()`.
29. Write a CTE that calculates total hours worked by each employee across all projects, then list only employees who worked more than 300 hours in total.
30. Calculate a running (cumulative) total of salaries ordered by `hire_date`, using `SUM() OVER (ORDER BY hire_date)`.

---

### Tips for the actual interview
- For Q21–22 (Nth highest salary), be ready to explain the difference between `RANK()`, `DENSE_RANK()`, and `ROW_NUMBER()` — this is asked almost every time.
- For Q13–17 (joins), be ready to explain INNER vs LEFT vs RIGHT vs SELF join with a real-world example, not just syntax.
- For Q19/26 (subquery vs EXISTS), interviewers often follow up with "which is more performant and why?"
- Practice writing the query **and** saying it out loud — many 4+ YOE interviews are verbal/whiteboard, not just typing.
