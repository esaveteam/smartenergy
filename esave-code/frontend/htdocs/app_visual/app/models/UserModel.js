(function() {
	

	EnergyApp.models.User = Ext
			.regModel(
					'User',
					{
						fields : [ {
							name : 'id',
							type : 'int'
						}, {
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
						} ],

						validations : [
								{
									type : 'presence',
									name : 'name'
								},
								{
									type : 'format',
									name : 'email',
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
							id : 'sencha-users'
						}
					});
	// alert('OK');
})();