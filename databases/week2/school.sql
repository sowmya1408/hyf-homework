Create database School_lesson2;

-- Class: with the columns: id, name, begins (date), ends (date)

SET NAMES utf8mb4;
CREATE TABLE class (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  begins_date DATETIME NOT NULL DEFAULT NOW(),
  ends_date DATETIME DEFAULT NULL,
  PRIMARY KEY (id)
);
-- Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE TABLE student (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  phone varchar(255) NULL,
  class_id INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_class FOREIGN KEY (class_id) REFERENCES class (id) ON DELETE CASCADE
);
-- Create an index on the name column of the student table.

ALTER TABLE student add index (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

ALTER TABLE class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL;