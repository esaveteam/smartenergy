EnergyApp.views.userList = Ext.extend(Ext.Panel, {
    initComponent: function(){
        var addButton, titlebar, list;
      //var masterObj = jsWebService.getMasterProfile();
       // var masterObj = {"address":"OAK STreet KC MO","email":"ssvk3@mail.umkc.edu","age":"22","name":"Swati","ph":"222222222","initdate":"Apr 25, 2012 8:36:48 PM"};
       /* var data = Ext.decode('{"items":[{"phoneNo":"222222222","address":"NONMASTER","email":"ssvk3@mail.umkc.edu","age":"22","name":"Swati","initiationDate":"Apr 26, 2012 2:48:12 AM","type":null}]}');
    	EnergyApp.stores.UserJsonStore.loadData(data.items);*/
        addButton = {
            itemId: 'addButton',
            iconCls: 'add',
            iconMask: true,
            ui: 'plain',
            handler: this.onAddAction,
            scope: this
        };
		/*backToPlanButton = {
            itemId: 'backButton',
			text: 'back',
            ui: 'back',
            handler: this.onBackAction,
            scope: this
        };*/

        titlebar = {
            dock: 'top',
            xtype: 'toolbar',
            title: 'Users',
           // items: [ backToPlanButton,{ xtype: 'spacer' }, addButton ]
            items: [ { xtype: 'spacer' }, addButton ]
        };

        list = {
            xtype: 'list',
            itemTpl: '{name}',
            layout: 'fit',
            store: EnergyApp.stores.User,
            emptyText: '<div class="emptytext">There are no devices in the system at the moment.</div>',
            listeners: {
                scope: this,
                itemtap: this.onItemtapAction
            }
        };
        
        listJson = {
                xtype: 'list',
                itemTpl: '{name}',
                layout: 'fit',
                store: EnergyApp.stores.UserJsonStore,
                emptyText: '<div class="emptytext">There are no devices in the system at the moment.</div>',
                listeners: {
                    scope: this,
                    itemtap: this.onItemtapAction
                }
            };
        
        Ext.apply(this, {
            html: '',
            layout: 'fit',
            dockedItems: [titlebar],
            items: [listJson,list]
        });

        EnergyApp.views.userList.superclass.initComponent.call(this);
    },

    onAddAction: function() {
    	
        Ext.dispatch({
            controller: 'Users',
            action: 'newUserForm'
        });
    },
	 /*onBackAction: function() {
       // App.views.viewport.reveal('floorplan');
    },*/

    onItemtapAction: function(list, index, item, e) {
        Ext.dispatch({
            controller: 'Users',
            action: 'editUserForm',
            index: index
        });
    }
});

Ext.reg('EnergyApp.views.userList', EnergyApp.views.userList);
