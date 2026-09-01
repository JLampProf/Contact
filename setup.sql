Create DATABASE contact;

USE contact;

CREATE TABLE contacts (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	contact_number VARCHAR(20),
	email VARCHAR(100) NOT NULL
);