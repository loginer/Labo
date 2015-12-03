var customerSeeds = [
{
	"fName": "Radik",
	"lName":  "Rubin",
	"mainPhone": "0544086768",
	"secPhone": "098654206"
},
{
	"fName": "Nick",
	"lName":  "Robbin",
	"mainPhone": "0542635768",
	"secPhone": "084514206"
},
{
	"fName": "Anna",
	"lName":  "Rubin",
	"mainPhone": "0549650768",
	"secPhone": "046651236"
},
{
	"fName": "Mor",
	"lName":  "Ronen",
	"mainPhone": "0548960768",
	"secPhone": "021864206"
},
{
	"fName": "Nick",
	"lName":  "Glazov",
	"mainPhone": "0538655688",
	"secPhone": "049264206"
},

];

function addSeedCustomers(cs)
{
	customersRows = Customers.find().count();
	if(customersRows === 0)
	{
  _.each(cs, function(customer)
  		{
    Customers.insert(customer);
    console.log("Inserted ", customer.fName);
  		})
		
	}
	else 
		{	
		console.log("There are ", customersRows);
		}
};

addSeedCustomers(customerSeeds);

