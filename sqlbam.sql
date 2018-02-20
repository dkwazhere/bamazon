drop table if exists products;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
	item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30),
    department_name VARCHAR(30),
    price float,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products
VALUES('1', 'Vape Battery', 'Electronics', '50,99', '200');

INSERT INTO products
VALUES('2', 'Mattress', 'Furniture', '399.99', '10');

INSERT INTO products
VALUES('3', 'Hot Cheetos', 'Foods', '1.99', '200');

INSERT INTO products
VALUES('4', 'The Great Gatsby', 'Books', '18.99', '40');

INSERT INTO products
VALUES('5', 'Macbook Pro', 'Electronics', '1599.99', '90');

INSERT INTO products
VALUES('6', 'Dumbell (40lbs)', 'Sport', '40.00', '20');

INSERT INTO products
VALUES('7', 'Pumpkin Seeds', 'Gardening', '2.99', '100');

INSERT INTO products
VALUES('8', 'Calcium Pills', 'Nutrition', '29.99', '40');

INSERT INTO products
VALUES('9', 'Desk', 'Furniture', '67.89', '20');

INSERT INTO products
VALUES(' 10', 'Chihuahua', 'Pet', '200.00', '4');

SELECT * FROM products
