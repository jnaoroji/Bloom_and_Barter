// Import and install the package dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config()

// Connect to MySQL connection
const connection = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: process.env.DB_USER,
        // include your password
        password: process.env.DB_PASSWORD,
        database: 'gardening_db'
    },
    console.log(`Connected to the gardening_db database.`)
);

// Connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to the gardening database");
    // promptQuestions();
});
promptQuestions()
// Prompt questions to start the database
function promptQuestions() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'What would you like to do?',
                choices: [
                    'View All Categories',
                    'View All Sub-Categories',
                    'View All Products',
                    'Add Category',
                    'Add Sub-Category',
                    'Add Product',
                    'Quit',
                ],
            }
        ])
        .then((answers) => {
            // Use switch syntax function
            switch (answers.menu) {
                case 'View All Categories':
                    viewAllCategories();
                    break;
                case 'View All Sub-Categories':
                    viewAllSubCategories();
                    break;
                case 'View Products':
                    viewAllProducts();
                    break;
                case 'Add Category':
                    addCategory();
                    break;
                case 'Add Sub-Category':
                    addSubCategory();
                    break;
                case 'Add Product':
                    addProduct();
                    break;
                case 'Quit':
                    quit();
                    break;
                default: connection.end();
                    break;
            }
        });
}

// ---- VIEWING ALL ---- //
// View All Categories
function viewAllCategories() { // use async syntax
    connection.query('SELECT * FROM categories', function (err, res) {
        if (err) throw err;
        console.table(res);
        promptQuestions();
    })
};

// View All Sub-Categories
function viewAllSubCategories() { // use async syntax
    connection.query('SELECT subCategories.id, subCategories.types, categories.categories_name AS categories FROM subCategories JOIN categories ON subCategories.categories_id = categories.id ORDER BY subCategories.id', function (err, res) {
        if (err) throw err;
        console.table(res);
        promptQuestions();
    })
};

// View All Products
function viewAllProducts() { // use async syntax
    connection.query('SELECT products.id, products.products_name, subCategories.types, categories.categories_name AS categories FROM products LEFT JOIN subCategories ON products.products_id = subCategories.id', function (err, res) {
        if (err) throw err;
        console.table(res);
        promptQuestions();
    })
};

// ---- ADDING ---- //
// Add Category
function addCategory() { // use async syntax
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'categoryName',
                message: 'Please enter the name of the category.'
            }])
        .then((answers) => {
            connection.query('INSERT INTO categories (categories_name) VALUES (?)', [answers.categoryName],
                (err) => {
                    if (err) throw err;
                    console.log((`\n ${answers.categoryName} successfully added to the database! \n`));
                    promptQuestions();
                })
        });
}

// Add Sub-Category
function addSubCategory() { // use async syntax
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'typeName',
                message: 'Please enter the sub-category that you would like to add.',
            },
        ])
        .then((answers) => {
            connection.query(`INSERT INTO categories (types, categories_id) VALUES (?, ?)`,
                [answers.typeName],
                (err) => {
                    if (err) throw err;
                    console.log((`\n ${answers.typeName} successfully added to the database! \n`));
                    promptQuestions();
                });
        });
}

// Add Product
function addProduct() { // use async syntax
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'productName',
                message: 'Please enter a product name that you would like to add.',
            },
            {
                type: 'input',
                name: 'products_id',
                message: 'Please enter the product ID.',
            },
        ])
        .then((answers) => {
            connection.query('INSERT INTO products (products_name, products_id) VALUES (?, ?)', [answers.productName, answers.products_id],
                (err) => {
                    if (err) throw err;
                    console.log((`\n ${answers.productName} successfully added to the database! \n`));
                    promptQuestions();
                })
        });
}

// Quit Menu
function quit() {
    console.log(("Thank you for using Gardening Database!"));
    process.exit();
};