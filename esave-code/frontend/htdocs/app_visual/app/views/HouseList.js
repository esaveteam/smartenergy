EnergyApp.views.houseList = Ext.extend(Ext.Panel, {
    initComponent: function(){
        var addButton, titlebar, list;
        
        addButton = {
            itemId: 'addButton',
            iconCls: 'add',
            iconMask: true,
            ui: 'plain',
            handler: this.onAddAction,
            scope: this
        };
		backToFloorPlanButton = {
            itemId: 'backButton',
			text: 'Choose Floor Plan',
            ui: 'plain',
            handler: this.onFPAction,
            scope: this
        };

        titlebar = {
            dock: 'top',
            xtype: 'toolbar',
            title: 'Houses',
           // items: [ backToPlanButton,{ xtype: 'spacer' }, addButton ]
            items: [backToFloorPlanButton, { xtype: 'spacer' }, addButton ]
        };

        list = {
            xtype: 'list',
            itemTpl: '{name}',
            store: EnergyApp.stores.House,
            emptyText: '<div class="emptytext">There are no Houses in the system at the moment.</div>',
            listeners: {
                scope: this,
                itemtap: this.onItemtapAction
            }
        };
        
        listJson = {
                xtype: 'list',
                itemTpl: '{name}',
                store: EnergyApp.stores.House,
                emptyText: '<div class="emptytext">There are no Houses in the system at the moment.</div>',
                listeners: {
                    scope: this,
                    itemtap: this.onItemtapAction
                }
            };
        
        Ext.apply(this, {
            html: '',
            layout: 'fit',
            dockedItems: [titlebar],
            items: [list]
        });

        EnergyApp.views.houseList.superclass.initComponent.call(this);
    },

    onAddAction: function() {
        Ext.dispatch({
            controller: 'Houses',
            action: 'newForm'
        });
    },
	 onFPAction: function() {
       EnergyApp.views.viewport.reveal('chooseFloorForm');
    },

    onItemtapAction: function(list, index, item, e) {
        Ext.dispatch({
            controller: 'Houses',
            action: 'editForm',
            index: index
        });
    }
});

Ext.reg('EnergyApp.views.houseList', EnergyApp.views.houseList);
