Ext.regController('Houses', {
    store: EnergyApp.stores.House,

    index: function() {
      /**
       * No device list till date in the sheet.so commenting the device list.
       */  
    	EnergyApp.views.viewport.reveal('houseList');
    },
    
    fpIndex: function() {
        /**
         * No device list till date in the sheet.so commenting the device list.
         */  
      	EnergyApp.views.viewport.reveal('chooseFloorForm');
    },

    newForm: function() {
        var model = new EnergyApp.models.House();
        console.log(model);
        EnergyApp.views.houseForm.load(model);
        EnergyApp.views.viewport.reveal('houseForm');
    },

    editForm: function(options) {
        var model = this.store.getAt(options.index);
        EnergyApp.views.houseForm.load(model);
        EnergyApp.views.viewport.reveal('houseForm');
    },

    save: function(params) {
    	console.log(params);
        params.record.set(params.data);
       
        this.store.create(params.data);
        ele = this;
        //if(params.data.houseType ="1"){
        	Ext.Msg.confirm('Confirm', 'Would you like to add FloorPlan?', function(btn){
        	    if (btn == 'yes'){
        	    	console.log(btn);
        	    	ele.fpIndex();
        	    }else{
        	    	console.log(btn);
        	    	ele.index();
        	    }
        	  });
        	
        //}
        
        
    },

    update: function(params) {
        var tmpDevice = new EnergyApp.models.House(params.data);
           
        params.record.set(params.data);
        params.record.save();
        Ext.Msg.confirm('Confirm', 'Would you like to update FloorPlan?', function(btn){
    	    if (btn == 'yes'){
    	    	console.log(btn);
    	    	ele.fpIndex();
    	    }else{
    	    	console.log(btn);
    	    	ele.index();
    	    }
    	  });
        
    },

    remove: function(params) {
        this.store.remove(params.record);
        this.store.sync();
        this.index();
    }

});
