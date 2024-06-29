CREATE TABLE fruits (
	id SERIAL PRIMARY KEY,
	name VARCHAR(30),
	price INTEGER,
	color VARCHAR(10),
	is_berry BOOLEAN
);

INSERT INTO fruits (name, price, color, is_berry)
VALUES('Strawberry', 2, 'red', True);

INSERT INTO fruits (name, price, color, is_berry)
VALUES('Blueberry', 3, 'blue', True);

INSERT INTO fruits (name, price, color, is_berry)
VALUES('Blackberry', 2, 'black', True);

INSERT INTO fruits (name, price, color, is_berry)
VALUES('Cherry', 1, 'red', False);

INSERT INTO fruits (name, price, color, is_berry)
VALUES('Raspberry', 5, 'red', True);

INSERT INTO fruits (name, price, color, is_berry)
VALUES('Boysenberry', 4, 'black', True);

INSERT INTO fruits (name, price, color, is_berry)
VALUES('Guava', 4, 'green', False);

INSERT INTO fruits (name, price, color, is_berry)
VALUES('Dewberry', 6, 'black', True);

INSERT INTO fruits (name, price, color, is_berry)
VALUES('Cranberry', 3, 'red', True);