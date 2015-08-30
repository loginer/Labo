Router.configure({
	layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function (){
this.render ('Orders');	
});

Router.route('/orders', function ()
{
	this.render ('Orders');	
},
{ 
	name:  'orders.path'
});

Router.route('/customers', function ()
{
	this.render ('Customers');	
},
{
	name: 'customers.path'
});

Router.route('/settings', function ()
{
	this.render ('Settings');	
},
{
	name: 'settings.path'
}

);

