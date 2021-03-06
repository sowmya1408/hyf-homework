-- Data model

create database meals;
use meals;

create table meal (
	  id int(10) unsigned NOT NULL AUTO_INCREMENT,
	  title varchar(255) NOT NULL,
	  description text NULL default NULL,
	  location varchar(255) NULL, 
	  `when` datetime NOT NULL, -- it was showing error if I use "When" can use `when` or any other word
	  max_reservations int(10) unsigned NOT NULL,
	  price decimal(13, 4) NOT NULL,
	  created_date DATETIME NOT NULL DEFAULT NOW(),
	  PRIMARY KEY (id)
	  );
  
  create table reservation (
		id int(10) unsigned NOT NULL AUTO_INCREMENT,
		number_of_guest int(10) unsigned NOT NULL,
		meal_id int(10) unsigned NOT NULL,
	    created_date DATETIME NOT NULL DEFAULT NOW(),
	    PRIMARY KEY (id),
		CONSTRAINT meal_id FOREIGN KEY (fk_reservation_meal) REFERENCES meal (id) ON DELETE CASCADE

        );
    
    create table review (
		id int(10) unsigned NOT NULL AUTO_INCREMENT,
		title varchar(255) NOT NULL,
		description text NULL default NULL,
		meal_id int(10) unsigned NOT NULL,
        stars int(10) unsigned NOT NULL,
	    created_date DATETIME NOT NULL DEFAULT NOW(),
		PRIMARY KEY (id),
	    CONSTRAINT meal_id FOREIGN KEY (fk_review_meal) REFERENCES meal (id) ON DELETE CASCADE

);
        

    