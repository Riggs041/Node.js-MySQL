var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // run the start function after the connection is made to prompt the user
    start();
});

// Running this application will first display all of the items available for sale. 
// Include the ids, names, and prices of products for sale.

// Function that prompts the user what action they would like to take:
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy. 

