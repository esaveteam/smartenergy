(function() {
	
	EnergyApp.models.House = Ext
			.regModel(
					'House',
					{
						fields : [ {
							name : 'id',
							type : 'int'
						}, {
							name : 'name', // Y
							type : 'string'
						}, {
							name : 'status',//Y status of a house may be "monitored" or "not monitored" DD
							type : 'string'
						}, {
							name : 'climaticRegion',// Hot-humid(hh), hot, very cold, cold, marine, mountain,  DD
							type : 'string'
						},/* {
							name : 'floorArea', //DD
							type : 'string'
						}, {
							name : 'sensorSupervised', // togglefield Y
							type : 'int'
						}, */{
							name : 'yearlyEnergyEstimates', // Y
							type : 'int'
						}, {
							name : 'yearOfConstruction', // DD 
							type : 'string'
						}, {
							name : 'houseType', // DD
							type : 'string'
						}, {
							name : 'numberOfFloor', // Y
							type : 'int'
						} ],

						validations : [
								{
									type : 'presence',
									name : 'name'
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
							id : 'sencha-houses'
						}
					});
	 //alert('OK');
	 //console.log(EnergyApp.models.House);
	 //console.log(House);
})();