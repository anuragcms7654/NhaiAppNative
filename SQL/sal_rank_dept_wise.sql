select emp_name, dept_id,
rank() over (partition by dept_id order by salary desc) as rnk,
dense_rank() over (partition by dept_id order by salary desc) as dense_rnk
from employees;