EnergyApp.views.userForm = Ext.extend(Ext.form.FormPanel, {
    defaultInstructions: 'Please enter the information above.',

    initComponent: function(){
        var titlebar, cancelButton, buttonbar, saveButton, fields;

        cancelButton = {
            text: 'cancel',
            ui: 'back',
            handler: this.onCancelAction
        };

        titlebar = {
            id: 'userFormTitlebar',
            xtype: 'toolbar',
            title: 'Create New User',
            items: [ cancelButton ]
        };

        saveButton = {
            id: 'userFormSaveButton',
            text: 'save',
            ui: 'confirm',
            handler: this.onSaveAction,
            scope: this
        };

        deleteButton = {
            id: 'userFormDeleteButton',
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
            id: 'userFormFieldset',
            title: 'User details',
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
                        name: 'type',
                        options: [
                            {text: 'Master',  value: '1'},
                            {text: 'Non-Master', value: '2'}
                            
                        ]
                    }, {
                         xtype: 'numberfield',
                         name : 'age',
                         id : 'age',
                         label: 'Age',
                        // disabled: true,
                         useClearIcon: true
                     }, {
                         xtype: 'datepickerfield',
                         name : 'initiationDate',
                         id : 'date',
                         label: 'Initiation Date',
                         value: new Date(),
                         picker: {
                             yearFrom: 1990
                         }
                     }, {
                         xtype: 'fieldset',
                         title: 'Contact',
                         defaults : {
								required : true,
								labelAlign : 'left',
								labelWidth : '40%'
							},
                         items: [
                             
                             {
                                 xtype: 'emailfield',
                                 name: 'email',
                                 id : 'email',
                                 label: 'Email',
                                 placeHolder : 'you@domain.com',
                                 useClearIcon: true
                             },
                             {
                                 xtype: 'textfield',
                                 name: 'phoneNo ',
                                 id :'phoneNo',
                                 label: 'Phone Number',
                                 placeHolder : '(XXX)-(XXX)-(XXXX)',
                                 useClearIcon: true
                             },{
                                 xtype: 'textfield',
                                 name: 'address',
                                 id : 'address',
                                 label: 'Address',
                                 placeHolder : '<Street>, <City>, <State> <Country>',
                                 useClearIcon: true
                             }
                         ]
                    }
                ]// items ends
			}]};
           

        Ext.apply(this, {
            scroll: 'vertical',
            dockedItems: [ titlebar, buttonbar ],
            items: [ fields ],
            listeners: {
                beforeactivate: function() {
                    var deleteButton = this.down('#userFormDeleteButton'),
                        saveButton = this.down('#userFormSaveButton'),
                        titlebar = this.down('#userFormTitlebar'),
                        model = this.getRecord();

                    if (model.phantom) {
                        titlebar.setTitle('Create User');
                        saveButton.setText('create');
                        deleteButton.hide();
                    } else {
                        titlebar.setTitle('Update User');
                        saveButton.setText('update');
                        deleteButton.show();
                    }
                }/*,
                deactivate: function() {
                    this.resetForm();
                }*/
            }
        });

        EnergyApp.views.userForm.superclass.initComponent.call(this);
    },

    onCancelAction: function() {
        Ext.dispatch({
            controller: 'Users',
            action: 'index'
        });
    },

    onSaveAction: function() {
        var model = this.getRecord();
		console.log('recs'+this.getRecord());
		console.log(this.getRecord());
		console.log('values'+this.getValues());
		console.log(this.getValues());
        Ext.dispatch({
            controller: 'Users',
            action    : (model.phantom ? 'saveUser' : 'updateUser'),
            data      : this.getValues(),
            record    : this.getRecord(),
            form      : this
        });
    },

    onDeleteAction: function() {
        Ext.Msg.confirm("Delete this User?", "", function(answer) {
            if (answer === "yes") {
                Ext.dispatch({
                    controller: 'Users',
                    action    : 'removeUser',
                    record    : this.getRecord()
                });
            }
        }, this);
    },

    showErrors: function(errors) {
        var fieldset = this.down('#userFormFieldset');
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
        var fieldset = this.down('#userFormFieldset');
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

Ext.reg('EnergyApp.views.userForm', EnergyApp.views.userForm);
