(function() {
	

	EnergyApp.stores.Suggest = new Ext.data.Store({
		model : 'Suggest',
		autoLoad : true
	});
	console.log(EnergyApp.stores.Suggest);
	EnergyApp.stores.SuggestJsonStore = new Ext.data.JsonStore({
	    root: 'items',
	    idProperty: 'name',
	    fields: [ {
			name : 'id',
			type : 'int'
		}, {
			name : 'name',
			type : 'string'
		}, {
			name : 'description', // description displays here.This will be shown on the UI of the "tabs" 
			type : 'string'
		}, {
			name : 'significance', // in percentage CALCULATE AS PER YOUR MODEL ITS SIGNIFICANCE ON BASIS OF CLIMATE , DEVICE INVOLDED USER'S RECOMMENDATIONS
			type : 'string'
		}, {
			name : 'dailySaving', // certain range in dollars
			type : 'string'
		}, {
			name : 'annualSaving', // in Dollars
			type : 'string'
		}, {
			name : 'applied', // options : INPROGRESS, NOTAPPLIED, DISCARDED , RECOMMENDED , APPLIED
			type : 'string'
		},{
			name : 'area', // options : light, wall, house, heating , appliance
			type : 'string'
		}]
	});
	//alert('Device Model & Device Store are Loaded');
})();
