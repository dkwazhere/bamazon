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
        console.log('***********Bamazon shop!***********');

        for(i=0;i<results.length;i++){
          console.log(results[i].item_id + ' Product Name: ' + results[i].product_name + ' Price: ' + '$' + results[i].price + '(Quantity left: ' + results[i].stock_quantity + ')')
        }
        console.log('=================================================');


// showing the user which items they can buy
        inquirer
          .prompt([
            {
              name: "choice",
              type: "input",
              choices: function() {
                var options = [];
                for(i=0;i<results.length;i++){
                    options.push('Item ID: ' + results[i].item_id + ' Product Name: ' + results[i].product_name + ' Price: ' + '$' + results[i].price);
                  }
                  return options;
            },
            message: "Please list the name of the item you'd like to purchase"
        },
        {
        name: "quantity",
        type: "input",
        message: "How much would you like to buy?"
        },
    ])

    // capturing user input
    .then(function(answer) {
        console.log("Thank you for purchasing: " +answer.quantity + " " + answer.choice);

      var item = answer.choice;
      var quantity = answer.quantity;

      connection.query('SELECT * FROM Products WHERE product_name = ?', item, function(error, response) {
        if (error) { console.log(error) };
        
        if (quantity <= response[0].stock_quantity){
          connection.query('UPDATE products SET ? WHERE ?', [{
            stock_quantity: response[0].stock_quantity - quantity
          },{
            product_name: item
          }],
          function(err, res){
            if (err){
              console.log(err);
            }
          });
        };
      });
    });
  })
};
