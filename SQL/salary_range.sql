select emp_name, salary, job_title,
case 
when salary < 65000 then 'Low'
when salary between 65000 and 10000 then 'medium'
when salary > 100000 then 'High'
end as salary_band
from employees