Ext.regController('Users', {
    store: EnergyApp.stores.User,

    index: function() {
      /**
       * No device list till date in the sheet.so commenting the device list.
       */  
    	EnergyApp.views.viewport.reveal('userList');
    },

    newUserForm: function() {
        var model = new EnergyApp.models.User()
        EnergyApp.views.userForm.load(model);
        EnergyApp.views.viewport.reveal('userForm');
        
    },

    editUserForm: function(options) {
        var model = this.store.getAt(options.index);
        EnergyApp.views.userForm.load(model);
        EnergyApp.views.viewport.reveal('userForm');
    },

    saveUser: function(params) {
    	console.log(params);
    	console.log(params.data);
    	console.log(params.record);
        params.record.set(params.data);
       /* var errors = params.record.validate();

        if (errors.isValid()) {*/
            this.store.create(params.data);
            Ext.Msg.alert('Submitted Values to the Cloud Server', params.data);
            this.index();
            
      /*  } else {
            params.form.showErrors(errors);
        }*/
    },

    updateUser: function(params) {
        var tmpDevice = new EnergyApp.models.User(params.data);
        console.log(params);
    	console.log(params.data);
    	console.log(params.record);
        params.record.set(params.data);
        /*errors = tmpDevice.validate();
        console.log(errors);
        console.log(errors.isvalid());
        
        if (errors.isValid()) {*/
            params.record.set(params.data);
            Ext.Msg.alert('Submitted Values to the Cloud Server', params.data);
            params.record.save();
            this.index();
        /*} else {
            params.form.showErrors(errors);
        }*/
    },

    removeUser: function(params) {
        this.store.remove(params.record);
        this.store.sync();
        this.index();
    }

});
