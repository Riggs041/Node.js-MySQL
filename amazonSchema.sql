DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(255) NOT NULL,
	department_name VARCHAR(255) NOT NULL,
	price INT(4),
	stock_quantity INT(10),
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ford Mustang", "Sports Car", 25000, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chevy Corvette", "Sports Car", 50000, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dodge Challenger", "Sports Car", 30000, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Porsche 911", "Sports Car", 90000, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("GMC Sierra", "Pickup Truck", 30000, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toyota Tacoma", "Pickup Truck", 25000, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nissan Titan", "Pickup Truck", 30000, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("GMC Yukon", "SUV", 50000, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BMW X5", "SUV", 60000, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lexus RX", "SUV", 45000, 3);

SELECT * FROM products