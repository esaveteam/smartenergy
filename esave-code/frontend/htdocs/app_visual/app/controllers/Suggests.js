Ext.regController('Suggests', {
    store: EnergyApp.stores.Suggests,

    index: function() {
      /**
       * No Suggest list till date in the sheet.so commenting the Suggest list.
       */  
    	//App.views.viewport.reveal('SuggestsList');
    },

    newForm: function() {
        var model = new EnergyApp.models.Suggest()
        EnergyApp.views.SuggestsForm.load(model);
        EnergyApp.views.viewport.reveal('SuggestsForm');
    },

    editForm: function(options) {
        var model = this.store.getAt(options.index);
        EnergyApp.views.SuggestsForm.load(model);
        EnergyApp.views.viewport.reveal('SuggestsForm');
    },

    save: function(params) {
        params.record.set(params.data);
        var errors = params.record.validate();

        if (errors.isValid()) {
            this.store.create(params.data);
            this.index();
        } else {
            params.form.showErrors(errors);
        }
    },

    update: function(params) {
        var tmpSuggest = new EnergyApp.models.Suggest(params.data),
            errors = tmpSuggest.validate()

        if (errors.isValid()) {
            params.record.set(params.data);
            params.record.save();
            this.index();
        } else {
            params.form.showErrors(errors);
        }
    },

    remove: function(params) {
        this.store.remove(params.record);
        this.store.sync();
        this.index();
    }

});
