(function() {
	EnergyApp.models.HousingType = Ext.regModel('HousingType', {
		fields : [ {
			name : 'rank',
			type : 'string'
		}, {
			name : 'title',
			type : 'string'
		} ]

	});

	EnergyApp.models.Device = Ext
			.regModel(
					'Device',
					{
						fields : [ {
							name : 'id',
							type : 'int',
							mapping: 'device_dataid'
						}, {
							name : 'name',
							type : 'string'
						}, {
							name : 'port',
							type : 'string'
						},{
							name : 'status',
							type : 'string'
						}, {
							name : 'operation',
							type : 'string'
						} , {
							name : 'region',
							type : 'string',
							mapping : 'location'
						} , {
							name : 'devtype',
							type : 'string',
							mapping : 'devtype'
						}, {
							name : 'dimensions',
							type : 'string'
						} , {
							name : 'model',
							type : 'string'
						}, {
							name : 'EnergyConsumption',
							type : 'string'
						}, {
							name : 'EnergyEstimates',
							type : 'string'
						} , {
							name : 'YearOfPurchase',
							type : 'string'
						}, {
							name : 'Life',
							type : 'string'
						}, {
							name : 'ElectronicSensorSupervised',
							type : 'string'
						},{
							name : 'temp1',
							type : 'Number'
						},{
							name : 'Energy1',
							type : 'Number'
						},{
							name : 'xcord',
							type : 'Number'
						},{
							name : 'ycord',
							type : 'Number'
						},{
							name : 'floorplanId',
							type : 'Number'
						} ],

						validations : [
								{
									type : 'presence',
									name : 'name'
								}],

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
							id : 'sencha-devices'
						}
					});
	// alert('OK');
})();