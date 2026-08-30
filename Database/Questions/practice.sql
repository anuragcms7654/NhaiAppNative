-- nth highest salary
SELECT salary
FROM (
SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rnk FROM employees
) t WHERE rnk = 3


-- nth highest salary of each department
SELECT *
FROM (SELECT e.*,
           DENSE_RANK() OVER (
               PARTITION BY dept_id
               ORDER BY salary DESC
           ) AS rnk
    FROM employees e ) t where rnk = 1