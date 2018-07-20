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
    readProducts();
});
// Running this application will first display all of the items available for sale. 
// Include the ids, names, and prices of products for sale.
function readProducts() {
    console.log("View our inventory!\n");
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("Vehicle ID: " + res[i].item_id + " Vehicle: " + res[i].product_name + " Price: " + res[i].price)
        }
        buyVehicle();
    })
};
// Function that prompts the user what action they would like to take:
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.

function buyVehicle() {
    inquirer
        .prompt([
            {
                name: "product_id",
                type: "input",
                message: "Enter the vehicle id for the vehicle you would like to purchase: ",
                validate: function (value) {
                    if (isNaN(value) == false) {
                        return true;
                    } else {
                        return false;
                    }

                }
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to buy?",
                validate: function (value) {
                    if (isNaN(value) == false) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ]).then(function (answer) {
            //Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
            // If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
            // However, if your store does have enough of the product, you should fulfill the customer's order.
            // This means updating the SQL database to reflect the remaining quantity.
            // Once the update goes through, show the customer the total cost of their purchase.
            var query = "SELECT * FROM products WHERE item_id=" + answer.quantity;
            connection.query(query, function(err, res) {
                if (answer.quantity <= res) {
                    for (var i = 0; i < res.length; i++) {
                        console.log("Currently we have " + res[i].stock_quantity + " " + res[i].product_name + "s.");
                        console.log("Congratulations on purchasing your " + res[i].product_name + "!");
                    }
                } else {
                    console.log("Unfortunately this item is out of stock.");
                }
                readProducts();
            })
        
        })
};

