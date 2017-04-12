var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'bamazon_db'
});



function showItems(){
	connection.connect();

	connection.query('SELECT * FROM products', function (error, results, fields) {
		if (error) throw error;
		
		console.log('------------------------------------------------------');
		console.log(results[0].product_name +' '+'('+results[0].department_name+' ID:'+results[0].id+')'+'\n'+'$'+results[0].price +'\n'+'qty: '+results[0].stock_quantity +'\n');
		console.log('------------------------------------------------------');
		console.log(results[1].product_name +' '+'('+results[1].department_name+' ID:'+results[1].id+')'+'\n'+'$'+results[1].price +'\n'+'qty: '+results[1].stock_quantity +'\n');
		console.log('------------------------------------------------------');
		console.log(results[2].product_name +' '+'('+results[2].department_name+' ID:'+results[2].id+')'+'\n'+'$'+results[2].price +'\n'+'qty: '+results[2].stock_quantity +'\n');
		console.log('------------------------------------------------------');
		console.log(results[3].product_name +' '+'('+results[3].department_name+' ID:'+results[3].id+')'+'\n'+'$'+results[3].price +'\n'+'qty: '+results[3].stock_quantity +'\n');
		console.log('------------------------------------------------------');
		console.log(results[4].product_name +' '+'('+results[4].department_name+' ID:'+results[4].id+')'+'\n'+'$'+results[4].price +'\n'+'qty: '+results[4].stock_quantity +'\n');
		console.log('------------------------------------------------------');
		console.log(results[5].product_name +' '+'('+results[5].department_name+' ID:'+results[5].id+')'+'\n'+'$'+results[5].price +'\n'+'qty: '+results[5].stock_quantity +'\n');
		console.log('------------------------------------------------------');
		console.log(results[6].product_name +' '+'('+results[6].department_name+' ID:'+results[6].id+')'+'\n'+'$'+results[6].price +'\n'+'qty: '+results[6].stock_quantity +'\n');
		console.log('------------------------------------------------------');
		console.log(results[7].product_name +' '+'('+results[7].department_name+' ID:'+results[7].id+')'+'\n'+'$'+results[7].price +'\n'+'qty: '+results[7].stock_quantity +'\n');
		console.log('------------------------------------------------------');
		console.log(results[8].product_name +' '+'('+results[8].department_name+' ID:'+results[8].id+')'+'\n'+'$'+results[8].price +'\n'+'qty: '+results[8].stock_quantity +'\n');
		console.log('------------------------------------------------------');
		console.log(results[9].product_name +' '+'('+results[9].department_name+' ID:'+results[9].id+')'+'\n'+'$'+results[9].price +'\n'+'qty: '+results[9].stock_quantity +'\n');
		console.log('------------------------------------------------------');
	});

	connection.end();
};

function purchase(){
	inquirer.prompt([
	{
		type: 'input',
		name: 'id',
		message: '#ID of item you would like to buy.'

	}, 
	{
		type: 'input',
		name: 'quantity',
		message: 'qty: ',
		default: 0

	}

		]).then(function(answers){

			console.log(answers.id);
			console.log(answers.quantity);

	});


};

showItems();
purchase();