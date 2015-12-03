Customers = new Mongo.Collection('customers');

	CustomersIndex = new EasySearch.Index({
		collection: Customers,
		fields: ['fName', 'lName', 'mainPhone'],
		engine: new EasySearch.Minimongo()
	});


