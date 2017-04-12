CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
	`id` INTEGER AUTO_INCREMENT NOT NULL,
    `product_name` VARCHAR(150) NULL,
    `department_name` VARCHAR (150) NULL,
    `price` DECIMAL(10,2) NULL,
    `stock_quantity` INTEGER(10) NULL,
    PRIMARY KEY (id)
    
);

INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Corsair K70 mechanical keyboard', 'Electronics', 139.99, 20),('Raspberry Pi V2', 'Electronics', 38.00, 50),('Toothbrush', 'Health', .75, 500), ('Baseball Hat', 'Clothing', 29.99, 30);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Hitchhikers Guide to the Galaxy', 'Books', 15.99, 100), ('Seiko Watch', 'Jewelry', 310.49, 15), ('Mechanics Tool Set', 'Power and Hand Tools', 84.99, 45),('Obsession for men', 'Cologne', 50, 50);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Programmers Coffee Mug', 'Kitchen', 14.99, 5), ('Jeep Brake Pads', 'Auto', 31.95, 15);
SELECT * FROM products;