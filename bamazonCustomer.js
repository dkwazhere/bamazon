// Require needed npms
var mysql = require("mysql");
var inquirer = require("inquirer");
// Creating connection w/ mysql
var connection = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "1221",
   database: "bamazon" 
});
//connecting to mysql
connection.connect(function(err) {
    if(err) throw err;
    begin();
});
// Creating connection
function begin() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        inquirer
        .prompt({
            name: "question",
            type: "list",
            message: "What product would you like to buy?",
            choices: function() {
                var array = [];
                for (i=0; i<results.length; i++) {
                    array.push(results[i].product_name + " price: " + "($" + results[i].price + ")");  
                }
                return array;
            }
        })    
    });
}
