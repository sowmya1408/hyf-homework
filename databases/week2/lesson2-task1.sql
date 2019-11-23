use hyf_db_lesson1;

-- Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
INSERT INTO task(
title,
description,
created,
updated,
due_date,
status_Id,
user_Id
) 
VALUES (
'lesson2 homework', 
'complete and submit it', 
NOW(), 
NOW(),
'2019-11-23 21:00:00',
3, 
10);
SELECT * FROM task ORDER BY id DESC LIMIT 10;

-- Change the title of a task with these attributes: taskID, newTitle
UPDATE task 
SET title = 'change task name'
WHERE id = 38;

-- Change the task due date with these attributes: taskID, newDueDate
UPDATE task
SET due_date = '2019-12-01 12:00:00'
WHERE id = 33;

-- Change the task status with these attributes: taskID, newStatus
UPDATE task
SET status_id = 1
WHERE id = 29;

-- Mark a task as complete with this attribute: taskID
UPDATE task
SET status_id = 3
WHERE id = 39;

-- Delete task with this attribute: taskID
DELETE FROM task
WHERE id = 30;