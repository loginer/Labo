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
if(Customers.find().count() === 0){
  _.each(customerSeeds, function(customer){
    Customers.insert(customer);
    console.log("Inserted ", customer.fName);
  })
}