DROP DATABASE IF EXISTS gardening_db;
CREATE DATABASE gardening_db;

USE gardening_db;

USE gardening_db;

CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT,
    categories_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE subCategories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    types VARCHAR(30) NOT NULL,
    categories_id INTEGER,
    FOREIGN KEY (categories_id) REFERENCES categories(id) ON DELETE
    SET NULL
);

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    products_name VARCHAR(30) NOT NULL,
    products_id INTEGER,
    FOREIGN KEY (products_id) REFERENCES products(id) ON DELETE
    SET NULL
);