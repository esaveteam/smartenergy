(function() {
	

	EnergyApp.stores.User = new Ext.data.Store({
		model : 'User',
		autoLoad : true
	});
	console.log(EnergyApp.stores.User);
	EnergyApp.stores.UserJsonStore = new Ext.data.JsonStore({
	    root: 'items',
	    idProperty: 'name',
	    fields: [ {
			name : 'name',
			type : 'string'
		}, {
			name : 'age',
			type : 'string'
		}, {
			name : 'initiationDate',
			type : 'date'
		}, {
			name : 'email',
			type : 'string'
		}, {
			name : 'phoneNo',
			type : 'string'
		}, {
			name : 'address',
			type : 'string'
		},{
			name : 'type', // Master or Non-master
			type : 'string'
		}]
	});
	//alert('Device Model & Device Store are Loaded');
})();
