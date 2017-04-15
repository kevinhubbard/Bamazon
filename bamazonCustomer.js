var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'bamazon_db'
});
connection.connect();


function showItems(){
	
	
	connection.query('SELECT * FROM products', function (error, results, fields) {
		if (error) throw error;
		
		console.log('------------------------------------------------------');
		console.log(results[0].product_name +' '+'('+results[0].department_name+')'+'\n'+'$'+results[0].price +'\n' + '#ID: ' + results[0].id);
		console.log('------------------------------------------------------');
		console.log(results[1].product_name +' '+'('+results[1].department_name+')'+'\n'+'$'+results[1].price +'\n' + '#ID: ' + results[1].id);
		console.log('------------------------------------------------------');
		console.log(results[2].product_name +' '+'('+results[2].department_name+')'+'\n'+'$'+results[2].price +'\n' + '#ID: ' + results[2].id);
		console.log('------------------------------------------------------');
		console.log(results[3].product_name +' '+'('+results[3].department_name+')'+'\n'+'$'+results[3].price +'\n' + '#ID: ' + results[3].id);
		console.log('------------------------------------------------------');
		console.log(results[4].product_name +' '+'('+results[4].department_name+')'+'\n'+'$'+results[4].price +'\n' + '#ID: ' + results[4].id);
		console.log('------------------------------------------------------');
		console.log(results[5].product_name +' '+'('+results[5].department_name+')'+'\n'+'$'+results[5].price +'\n' + '#ID: ' + results[5].id);
		console.log('------------------------------------------------------');
		console.log(results[6].product_name +' '+'('+results[6].department_name+')'+'\n'+'$'+results[6].price +'\n' + '#ID: ' + results[6].id);
		console.log('------------------------------------------------------');
		console.log(results[7].product_name +' '+'('+results[7].department_name+')'+'\n'+'$'+results[7].price +'\n' + '#ID: ' + results[7].id);
		console.log('------------------------------------------------------');
		console.log(results[8].product_name +' '+'('+results[8].department_name+')'+'\n'+'$'+results[8].price +'\n' + '#ID: ' + results[8].id);
		console.log('------------------------------------------------------');
		console.log(results[9].product_name +' '+'('+results[9].department_name+')'+'\n'+'$'+results[9].price +'\n' + '#ID: ' + results[9].id);
		console.log('------------------------------------------------------');
	});

	
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

/*			var sql = 'SECECT * FROM products WHERE id = ' + connection.escape(answers.id);
			connection.query(sql, function(error, results, fields){
				if (error) throw error;
				console.log('your query line is: ' + sql);
				console.log(results);
			});*/

				connection.query('SELECT * FROM products WHERE id = ?', [answers.id] , function (error, results, fields) {

					if(answers.quantity <= results[0].stock_quantity){
						console.log('Purchase: ' + results[0].product_name + ' For $' + results[0].price + '?');
					} else{
						console.log('sorry we dont have enough in stock to fulfill your order');
					}
				

			});

			connection.end();

			


	});


};

showItems();
purchase();
