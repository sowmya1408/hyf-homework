use meals;
					-- Create queries
					-- Queries with Meal
					-- Get all meals
select * from meal;
					-- Add a new meal
insert into meal (
	title, 
	description,
	location, 
	theday, 
	max_reservations, 
	price
	) values (
	'chicken meal', 
	'chicken biryani with wings', 
	'Herlev',
	'2019-11-26 12:00:00',
	4,
	199
);

				-- Get a meal with any id, fx 1
select * from meal
where id = 4; 

				-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

update meal 
set title = 'punjabi veg meals', max_reservations = 3
where id = 4;

				-- Delete a meal with any id, fx 1
delete from meal
where id = 1;

					-- Queries with reservation
					-- Get all reservations

select * from reservation;
						-- Add a new reservation
insert into reservation (number_of_guest,meal_id) values (4, 2); 

						-- Get a reservation with any id, fx 1
select * from reservation
where id = 2;

				-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update reservation
set number_of_guest = 4
where id = 2;

						-- Delete a reservation with any id, fx 1
delete from reservation
where id = 1;

						-- Queries with review
						-- Get all reviews

select * from review;

						-- Add a new review
insert into review (
	title, 
	description,
	meal_id, 
	stars,
	created_date
	) values (
	'Great', 
	'Tadka was really nice and very goo ambions',
	 3 ,
	 4,
	 '2019-11-27 12:30:00'
 );

						-- Get a review with any id, fx 1
select * from review
where id = 3;

				  -- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update review
set stars = 4
where id = 2;

                 -- Delete a review with any id, fx 1
delete from review
where id = 1;

                    -- Additional queries
                    

        -- Get meals that has a price smaller than a specific price fx 90
 select * from meal
 where price < 90;

        -- Get meals that still has available reservations

select meal.id, max_reservations, number_of_guest 
from meal
join reservation on meal.id = reservation.meal_id
where reservation.number_of_guest < meal.max_reservations;

         -- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

select * from meal
where title like '%Rød grød med%';

		-- Get meals that has been created between two dates
select * from meal
where created_date > '2019-11-24 12:00:00' and created_date < '2019-11-29 12:00:00';

       -- Get only specific number of meals fx return only 5 meals
select * from meal
order by id desc
limit 5;

        -- Get the meals that have good reviews

select meal.id, meal.title,review.meal_id, review.stars
from meal 
join review on meal.id = review.meal_id
where review.stars > 3;

        -- Get reservations for a specific meal sorted by created_date
   
select number_of_guest, meal.title, meal.id, reservation.created_date 
from meal
join reservation on meal.id = reservation.meal_id
where reservation.meal_id = 3
order by reservation.created_date; 


        -- Sort all meals by average number of stars in the reviews
select avg(review.stars) as review_stars, meal.title
from meal
join review on meal.id = review.meal_id
group by meal.title
order by review_stars;
