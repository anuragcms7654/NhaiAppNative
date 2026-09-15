select emp_name, dept_id, salary , rnk from (
   select emp_name, dept_id, salary , row_number() over (partition by dept_id order by salary desc) as rnk from employees
) where rnk <= 2;