EnergyApp.views.chooseFloorForm = Ext.extend(Ext.form.FormPanel, {
    defaultInstructions: 'Please select the Floor Forms',

    initComponent: function(){
        var titlebar, cancelButton, buttonbar, saveButton, fields;

        cancelButton = {
            text: 'cancel',
            ui: 'back',
            handler: this.onCancelAction
        };

        titlebar = {
            id: 'chooseFloorFormTitlebar',
            xtype: 'toolbar',
            title: 'Create New House To Monitor',
            items: [ cancelButton ]
        };

        saveButton = {
            id: 'chooseFloorFormSaveButton',
            text: 'save',
            ui: 'confirm',
            handler: this.onSaveAction,
            scope: this
        };

        deleteButton = {
            id: 'chooseFloorFormDeleteButton',
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
            id: 'chooseFloorFormFieldset',
            title: 'Choose the Floor Plan of your house',
            instructions: this.defaultInstructions,
            defaults: {
                xtype: 'textfield',
                labelAlign: 'left',
                labelWidth: '40%',
                required: false,
                useClearIcon: true,
                autoCapitalize : false
            },
      
			items : [{												
				xtype : 'fieldset',
				layout:'hbox',													
				items : [{
			            xtype: 'button',
			            name : 'floorImage',
			            value: '1',
			            width : '180',
			            ui: 'confirm',
			            height : '45',
			            text: ' Room 451',
			            handler: function() {
			            	popup2.update(['<img border="2" src="images/DemoRoom.jpg" alt="Pulpit rock" width="304" height="304" />']);
			            	popup2.show();
			            }
		            
		            },{
			            xtype: 'radiofield',
			            name : 'floorImage',
			            id : 'floorImage',
			            value: '1',
			            width : '180',
			            height: '45',
			            label: 'Room 451',
			            labelAlign : 'left',
						labelWidth : '60%',
			            checked: true,
			            listeners: {
			                check: function() {   
			                   // alert(this.value);
			                    console.log($('#fpdiv'));
			                    $('#fpdiv').css('backgroundImage','url(images/DemoRoom.jpg)'); 
			                    } 
			            }
			         }]
	        	}, {												
					xtype : 'fieldset',
					layout:'hbox',													
					items : [{
				            xtype: 'button',
				            name : 'floorImage',
				            value: '2',
				            width : '180',
				            ui: 'confirm',
				            height : '45',
				            text: ' Studio Victoria',
				            handler: function() {
				            	popup2.update(['<img border="2" src="images/StudioVictoriaFP.jpg" alt="Pulpit rock" width="304" height="304" />']);
				            	popup2.show();
				            }
			            
			            },{
				            xtype: 'radiofield',
				            name : 'floorImage',
				            value: '2',
				            id : 'floorImage',
				            width : '180',
				            height: '45',
				            label: 'Victoria',
				            labelAlign : 'left',
							labelWidth : '60%',
							listeners: {
				                check: function() {   
				                   // alert(this.value);
				                    console.log($('#fpdiv'));
				                    $('#fpdiv').css('backgroundImage','url(images/StudioVictoriaFP.jpg)'); 
				                    } 
				            }
				         }]
		        	},{												
					xtype : 'fieldset',
					layout:'hbox',													
					items : [{
				            xtype: 'button',
				            name : 'floorImage',
				            value: '3',
				            width : '180',
				            ui: 'confirm',
				            height : '45',
				            text: ' Studio Seville',
				            handler: function() {
				            	popup2.update(['<img border="0" src="images/StudioSevilleFP.jpg" alt="Pulpit rock" width="304" height="304" />']);
				            	popup2.show();
				            }
			            
			            },{
				            xtype: 'radiofield',
				            name : 'floorImage',
				            id : 'floorImage',
				            value: '3',
				            width : '180',
				            height: '45',
				            label: 'Seville',
				            labelAlign : 'left',
							labelWidth : '60%',
							listeners: {
				                check: function() {   
				                   // alert(this.value);
				                    console.log($('#fpdiv'));
				                    $('#fpdiv').css('backgroundImage','url(images/StudioSevilleFP.jpg)'); 
				                    } 
				            }
				         }]
			        },{												
					xtype : 'fieldset',
					layout:'hbox',													
					items : [{
				            xtype: 'button',
				            name : 'floorImage',
				            value: '4',
				            width : '180',
				            ui: 'confirm',
				            height : '45',
				            text: ' Studio Cypress',
				            handler: function() {
				            	popup2.update(['<img border="0" src="images/StudioCypressFP.jpg" alt="Pulpit rock" width="304" height="304" />']);
				            	popup2.show();
				            }
			            
			            },{
				            xtype: 'radiofield',
				            name : 'floorImage',
				            id : 'floorImage',
				            value: '4',
				            width : '180',
				            height: '45',
				            label: 'Cypress',
				            labelAlign : 'left',
							labelWidth : '60%',
							listeners: {
				                check: function() {   
				                   // alert(this.value);
				                    console.log($('#fpdiv'));
				                    $('#fpdiv').css('backgroundImage','url(images/StudioCypressFP.jpg)'); 
				                    } 
				            }
				         }]
				    },{												
					xtype : 'fieldset',
					layout:'hbox',													
					items : [{
				            xtype: 'button',
				            name : 'floorImage',
				            value: '5',
				            width : '180',
				            ui: 'confirm',
				            height : '45',
				            text: ' Studio Sicily',
				            handler: function() {
				            	popup2.update(['<img border="0" src="images/StudioSicilyFP.jpg" alt="Pulpit rock" width="304" height="304" />']);
				            	popup2.show();
				            }
			            
			            },{
				            xtype: 'radiofield',
				            name : 'floorImage',
				            id : 'floorImage',
				            value: '5',
				            width : '180',
				            height: '45',
				            label: 'Sicily',
				            labelAlign : 'left',
							labelWidth : '60%',
							listeners: {
				                check: function() {   
				                   // alert(this.value);
				                    console.log($('#fpdiv'));
				                    $('#fpdiv').css('backgroundImage','url(images/StudioSicilyFP.jpg)'); 
				                    } 
				            }
				         }]
							        	
									}
								]};
           

        Ext.apply(this, {
            scroll: 'vertical',
            dockedItems: [ titlebar, buttonbar ],
            items: [ fields ],
            listeners: {
                beforeactivate: function() {
                    var deleteButton = this.down('#chooseFloorFormDeleteButton'),
                        saveButton = this.down('#chooseFloorFormSaveButton'),
                        titlebar = this.down('#chooseFloorFormTitlebar'),
                        model = this.getRecord();

                    /*if (model.phantom) {
                        titlebar.setTitle('Create House');
                        saveButton.setText('create');
                        deleteButton.hide();
                    } else {
                        titlebar.setTitle('Update House');
                        saveButton.setText('update');
                        deleteButton.show();
                    }*/
                }/*,
                deactivate: function() {
                    this.resetForm();
                }*/
                
            }
        });

        EnergyApp.views.chooseFloorForm.superclass.initComponent.call(this);
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
        var fieldset = this.down('#chooseFloorFormFieldset');
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
        var fieldset = this.down('#chooseFloorFormFieldset');
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
console.log("ChooseFloorplan");
Ext.reg('EnergyApp.views.chooseFloorForm', EnergyApp.views.chooseFloorForm);
