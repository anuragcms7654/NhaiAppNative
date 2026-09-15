SELECT salary FROM (
    Select salary, DENSE_RANK() Over (order by salary desc) as rnk from employees
) where rnk = 2;


select salary from (
   select salary, dense_rank() over (order by salary desc) as rnk from employees
)
where rnk = 2;


select salary from (
   select salary, rank() over(order by salary desc) as rnk from employees
)as ranked where rnk = 1 limit 1;
