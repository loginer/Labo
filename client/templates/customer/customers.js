Template.customers.helpers({
	'customer': function(){
		return Customers.find();
	}
});
Template.addCustomerForm.events({
	'submit form': function(event){
		event.preventDefault();
		console.log("you clicked add");
		var fNameVar = event.target.fName.value;
		var lNameVar = event.target.lName.value;
		var mainPhoneVar = event.target.mainPhone.value;
		console.log(mainPhoneVar);
		Customers.insert({
			fName: fNameVar,
			lName: lNameVar,
			mainPhone: mainPhoneVar
			
		});
		
	}
});

