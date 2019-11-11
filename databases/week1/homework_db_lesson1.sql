-- 1.Find out how many tasks are in the task table
use hyf_db_lesson1;
select * from task;
-- select count(*) from task;

-- 2.Find out how many tasks in the task table do not have a valid due date
select * 
from task 
where due_date is NULL;

-- 3.Find all the tasks that are marked as done
select * 
from task 
join status on status.id = task.status_id 
where status.name = 'Done';

-- 4.Find all the tasks that are not marked as done
select task.title,status.name 
from task 
join status on status.id = task.status_id 
where status.name != 'Done';

-- 5. Get all the tasks, sorted with the most recently created first
select title, created 
from task 
order by created desc;

-- 6.Get the single most recently created task
select title, created 
from task 
order by created desc 
limit 0,1;

-- 7.Get the title and due date of all tasks where the title or description contains database
select title, due_date 
from task 
where title LIKE '%database%';

-- 8. Get the title and status (as text) of all tasks
select task.title, status.name 
from task 
join status on status.id = task.status_id;

-- 9. Get the name of each status, along with a count of how many tasks have that status
select status.name as status_name, count(task.id) as task_count 
from task
join status on status.id = task.status_id
GROUP By status.name;

-- 10.Get the names of all statuses, sorted by the status with most tasks first
select status.name as status_name, count(task.id) as task_count 
from task
join status on status.id = task.status_id
group by status.name
order by task_count desc;




