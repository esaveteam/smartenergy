(function() {
	

	EnergyApp.models.Suggest = Ext
			.regModel(
					'Suggest',
					{
						fields : [ {
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
							name : 'applied', // options : INPROGRESS, NOTAPPLIED, DISCARDED , RECOMMENDED
							type : 'string'
						},{
							name : 'area', // options : light, wall, house, heating , appliance
							type : 'string'
						}],

						validations : [
								{
									type : 'presence',
									name : 'name'
								},
								{
									type : 'presence',
									name : 'description'
								},
								{
									type : 'format',
									name : 'temperature',
									matcher : /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
									message : 'must be a valid temperature'
								} ],

						proxy : {
							/**
							 * With localStorage as the type of proxy , it was
							 * giving me errors, But with memory type it was not
							 * giving any errors but was not persistent across
							 * any views. With one form data added it was not
							 * shown in the list's view.
							 * 
							 * YES!!! got it , the session storage is the one by
							 * which I was able to add the record and show it in
							 * the list, Was also able to update it.
							 * 
							 * But upon clicking the app next time the records
							 * previously created are not shown , well its
							 * understandable as it was a session storage and
							 * must persist only ofr one session.
							 * 
							 */
							// type: 'localstorage',
							// type : 'memory',
							type : 'sessionstorage',
							id : 'sencha-Suggests'
						}
					});
	// alert('OK');
})();