EnergyApp.views.houseForm = Ext.extend(Ext.form.FormPanel, {
    defaultInstructions: 'Please enter the information above.',

    initComponent: function(){
        var titlebar, cancelButton, buttonbar, saveButton, fields;

        cancelButton = {
            text: 'cancel',
            ui: 'back',
            handler: this.onCancelAction
        };

        titlebar = {
            id: 'houseFormTitlebar',
            xtype: 'toolbar',
            title: 'Create New House To Monitor',
            items: [ cancelButton ]
        };

        saveButton = {
            id: 'houseFormSaveButton',
            text: 'save',
            ui: 'confirm',
            handler: this.onSaveAction,
            scope: this
        };

        deleteButton = {
            id: 'houseFormDeleteButton',
            text: 'delete',
            ui: 'decline',
            handler: this.onDeleteAction,
            scope: this
        };

        buttonbar = {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [deleteButton, {xtype: 'spacer'}, saveButton]
        };

        fields = {
            xtype: 'fieldset',
            id: 'houseFormFieldset',
            title: 'House details',
            instructions: this.defaultInstructions,
            defaults: {
                xtype: 'textfield',
                labelAlign: 'left',
                labelWidth: '40%',
                required: false,
                useClearIcon: true,
                autoCapitalize : false
            },
            items: [
                {
					xtype : 'fieldset',
					//title : 'Contact Us',
					instructions : 'Please fill in User Information.',
					defaults : { 
						required : true,
						labelAlign : 'left',
						labelWidth : '40%'
					},
					items : [ {
						xtype : 'textfield',
						name : 'name',
						id: 'name',
						label : 'Name',
						useClearIcon : true,
						autoCapitalize : false
					}, {
	                    xtype: 'EnergyApp.views.ErrorField',
	                    fieldname: 'name',
	                }, {
                        xtype: 'selectfield',
                        name: 'status',
                        options: [ 
                            {text: 'Monitored',  value: '1'},
                            {text: 'Non-Monitored', value: '2'}
                            
                        ]
                    }, {
                        xtype: 'selectfield',
                        name: 'climaticRegion',
                        //value : '1',
                        options: [ 
                            {text: 'Hot',  value: '1'},
                            {text: 'Hot-Humid', value: '2'},
                            {text: 'Cold',  value: '3'},
                            {text: 'Very-Cold', value: '4'},
                            {text: 'Marine',  value: '5'},
                            {text: 'Mountain', value: '6'}
                            
                        ]
                    }, {
                        xtype: 'togglefield',
                        name: 'sensorSupervised',
                        id: 'sensorSupervised',
                        value : 0,
                        label: 'Sensor Supervised',
                        labelAlign : 'left',
						labelWidth : '40%',
						listeners: {
					                change: function(slider, thumb, value) {
					                    if (value != 1) {
					                    	console.log("Not-Supervised");
					                }
					           }
						}
                    }, {
                         xtype: 'numberfield',
                         name : 'yearlyEnergyEstimates',
                         id : 'yearlyEnergyEstimates',
                         label: 'Yearly Energy Consumption',
                        // disabled: true,
                         useClearIcon: true
                     }, {
                         xtype: 'datepickerfield',
                         name : 'yearOfConstruction',
                         id : 'date',
                         label: 'Initiation Date',
                         value: new Date(),
                         picker: {
                             yearFrom: 1990
                         }
                     }, {
						xtype : 'selectfield',
						name : 'houseType',
						id : 'houseType',
						options : [
								{
									text : 'Single Room',
									value : '0'
								}, {
									text : 'Studio Apartment',
									value : '1'
								}, {
									text : '1 Bedroom Hall Kitchen Apartment',
									value : '2'
								},{
									text : '2 Bedroom Hall Kitchen Apartment',
									value : '3'
								},{
									text : '3 Bedroom Hall Kitchen Apartment',
									value : '4'
								},{
									text : 'More than 3 Bedroom Hall Kitchen Apartment',
									value : '5'
								} ,{
									text : '2 Bedroom Hall Kitchen House without Garage',
									value : '6'
								},{
									text : '2 Bedroom Hall Kitchen House without Garage',
									value : '7'
								},{
									text : '3 Bedroom Hall Kitchen House without Garage',
									value : '8'
								}, {
									text : 'Multi- Story House without Garage',
									value : '9'
								},{
									text : 'Multi- Story House with Garage',
									value : '10'
								}],
								listeners: {
									change: function(element,newValue, oldValue,eOpts){
										//alert('setChecked');
										if(newValue>8){
											Ext.getCmp('hasFloors').value = 1;
										}
									}						
								}						
					}, {
                         xtype: 'togglefield',
                         name: 'hasFloors',
                         id: 'hasFloors',
                         value : 0,
                         label: 'Multi-Floor',
                         labelAlign : 'left',
						 labelWidth : '40%',
						 listeners: {
						                change: function(slider, thumb, value) {
						                    if (value != 1) {
						                    	//alert(value);
						                    	//alert(Ext.getCmp('floorNumber'));
						                    	//alert(Ext.getCmp('floorNumber').disable());
						                       // Ext.getCmp('floorNumber').disable();
						                        //Ext.getCmp('floorsStudioForm').hide();
						                      //  console.log(Ext.getCmp('floorsStudioForm').tab.hide());
						                        /**
						                         * Make a call for configuration web service to configure the device to be set to that temperature.
						                         * Get a response back and show it in the dialog.
						                         */
						                       // jsWebService.checkValue(value);
						                   // }else{
						                    //Ext.getCmp('floorNumber').show();
						                    //Ext.getCmp('floorNumber').enable();
						                    //console.log(Ext.getCmp('floorsStudioForm'));
						                    //console.log(Ext.getCmp('floorsStudioForm').tab);}
						                  //  console.log(Ext.getCmp('floorsStudioForm').tab.show());
						                }
						     }
						 }
					}, {
						xtype : 'numberfield',
						name : 'numberOfFloor',
						id: 'numberOfFloor',
						label : 'Number of Floors',
						value : 1,
						listeners : {
						change: function(number, newv,old,opts){
							console.log(this.value);
							console.log(newv);
							console.log(old);
							//create();
						},
					}
					},/* {
                             xtype: 'selectfield',
                             name: 'yearOfConstruction',
                             id : 'yearOfConstruction',
                             options:  [
                                 {text: 'Before 1940',  value: '1', checked : true},
                                 {text: '1940 to 1949', value: '2'},
                                 {text: '1950 to 1959', value: '3'},
                                 {text: '1960 to 1969', value: '4'},
                                 {text: '1970 to 1979', value: '5'},
                                 {text: '1980 to 1989', value: '6'},
                                 {text: '1990 to 1999', value: '7'},
                                 {text: '2000 to 2005', value: '8'},
                                 {text: '2005 to 2010', value: '9'}
                                
                             ]
					}/*, {
	                     xtype: 'fieldset',
	                     title: 'Floor Area (Square Feet)',
	                     items: [
                         {
                             xtype: 'selectfield',
                             name: 'floorArea',
                             options: [
                                 {text: 'Fewer than 500',  value: '1'},
                                 {text: '500 to 999', value: '2'},
                                 {text: '1000 to 1499', value: '3'},
                                 {text: '1500 to 1999', value: '4'},
                                 {text: '2000 to 2499', value: '5'},
                                 {text: '2500 to 2999', value: '6'},
                                 {text: '3000 to 3499', value: '7'},
                                 {text: '3500 to 3999', value: '8'},
                                 {text: '4000 or more', value: '9'}
                             ]
                         }
                     ]
					}*/
                ]}
                        
              ]};
           

        Ext.apply(this, {
            scroll: 'vertical',
            dockedItems: [ titlebar, buttonbar ],
            items: [ fields ],
            listeners: {
                beforeactivate: function() {
                    var deleteButton = this.down('#houseFormDeleteButton'),
                        saveButton = this.down('#houseFormSaveButton'),
                        titlebar = this.down('#houseFormTitlebar'),
                        model = this.getRecord();

                    if (model.phantom) {
                        titlebar.setTitle('Create House');
                        saveButton.setText('create');
                        deleteButton.hide();
                    } else {
                        titlebar.setTitle('Update House');
                        saveButton.setText('update');
                        deleteButton.show();
                    }
                }/*,
                deactivate: function() {
                    this.resetForm();
                }*/
                
            }
        });

        EnergyApp.views.houseForm.superclass.initComponent.call(this);
    },

    onCancelAction: function() {
        Ext.dispatch({
            controller: 'Houses',
            action: 'index'
        });
    },

    onSaveAction: function() {
        var model = this.getRecord();
		console.log('recs'+this.getRecord());
		//console.log(this.getRecord());
		console.log(this);
		console.log('values'+this.getValues());
		console.log(this.getValues());
		console.log(model);
        Ext.dispatch({
            controller: 'Houses',
            action    : (model.phantom ? 'save' : 'update'),
            data      : this.getValues(),
            record    : this.getRecord(),
            form      : this
        });
    },

    onDeleteAction: function() {
        Ext.Msg.confirm("Stop monitoring this House?", "", function(answer) {
            if (answer === "yes") {
                Ext.dispatch({
                    controller: 'Houses',
                    action    : 'remove',
                    record    : this.getRecord()
                });
            }
        }, this);
    },

    showErrors: function(errors) {
        var fieldset = this.down('#houseFormFieldset');
        this.fields.each(function(field) {
            var fieldErrors = errors.getByField(field.name),
                errorField = this.resetField(field);

            if (fieldErrors.length > 0) {
                field.addCls('invalid-field');
                errorField.update(fieldErrors);
                errorField.show();
            }
        }, this);
        fieldset.setInstructions("Please amend the flagged fields");
    },

    resetForm: function() {
        var fieldset = this.down('#houseFormFieldset');
        this.fields.each(function(field) {
			//alert('reset field'+field);
            this.resetField(field);
        }, this);
        fieldset.setInstructions(this.defaultInstructions);
        this.reset();
    },

    resetField: function(field) {
        var errorField = this.down('#'+field.name+'ErrorField');
 //       errorField.hide();
        field.removeCls('invalid-field');
        return errorField;
    }
});

Ext.reg('EnergyApp.views.houseForm', EnergyApp.views.houseForm);
