EnergyApp.views.Suggest = Ext.extend(Ext.Panel, {
    initComponent: function(){
        var addButton, titlebar, list;
      // var masterObj = jsWebService.getMasterProfile();
       // var masterObj = {"address":"OAK STreet KC
		// MO","email":"ssvk3@mail.umkc.edu","age":"22","name":"Swati","ph":"222222222","initdate":"Apr
		// 25, 2012 8:36:48 PM"};
        var data = Ext.decode('{"items":[{"name":"222222222","description":"NONMASTER","significance":"ssvk3@mail.umkc.edu","dailySaving":"22","annualSaving":"Swati","applied":"RECOMMENDED","area":"light"}]}');
    	//EnergyApp.stores.SuggestJsonStore.loadData(data.items);
    	////console.log(EnergyApp.stores.SuggestJsonStore.data);
        addButton = {
            itemId: 'addButton',
            iconCls: 'add',
            iconMask: true,
            ui: 'plain',
            handler: this.onAddAction,
            scope: this
        };
		/*
		 * backToPlanButton = { itemId: 'backButton', text: 'back', ui: 'back',
		 * handler: this.onBackAction, scope: this };
		 */

        titlebar = {
            dock: 'top',
            xtype: 'toolbar',
            title: 'Recommendations',
           // items: [ backToPlanButton,{ xtype: 'spacer' }, addButton ]
            items: [ { xtype: 'spacer' } ]
        };

        list = {
            xtype: 'list',
            itemTpl: '{name}',
            layout: 'fit',
            store: EnergyApp.stores.Suggest,
            emptyText: '<div class="emptytext">There are no devices in the system at the moment.</div>',
            listeners: {
                scope: this,
                itemtap: this.onItemtapAction
            }
        };
        
        showRec1 = {
        		xtype: 'selectfield',
                label: 'Generic',
                name: 'showRec1',
                height: 50,
                width: 300,
                options: [
                    {text: '--select a view--',  value: '0'},
                    {text: 'TopRecommendations',// ALL TOP RECOMMENDATIONS : BEST SUITABLE ON BASIS OF COST SAVED
                     value : 'Recommended', 
                     id:'TopRecommendationsItem', 
	                    	listeners: {
				                change: function(obj, newval, oldval) {
				                    if (value != 1) {
				                    	//console.log("Not-Supervised");
				                }
				           }
					}},
                    {text: 'Implemented',  value: 'Implemented', id: 'Implemented'}, // ALL THOSE SUGGESTIONS THAT HAVE THE VALUE OF 'applied' in the obtained list is "APPLIED"
                    {text: 'Energy-Saving-Habits',  value: 'EnergySavingHabitsItem', id: 'EnergySavingHabitsItem'} // All energy saving habits ... need more suggesitons on this one.
                ]
        };
        
        showRec2 = {
        		xtype: 'selectfield',
                label: 'Save Energy Cost',
                name: 'showRec2',
                height: 50,
                width: 300,
                options: [
                    {text: '--select a view--',  value: 'Cost0'},
                    {text: 'upto $25',
                        value : 'Cost1', 
                        id:'UPTO_25', 
   	                    	listeners: {
   				                change: function(obj, newval, oldval) {
   				                    if (value != 1) {
   				                    	//console.log("Not-Supervised");
   				                }
   				           }
   					}},
   					{text: 'upto $50',
                        value : 'Cost2', 
                        id:'UPTO_50', 
   	                    	listeners: {
   				                change: function(obj, newval, oldval) {
   				                    if (value != 1) {
   				                    	//console.log("Not-Supervised");
   				                }
   				           }
   					}},
   					{text: 'upto $100',
                        value : 'Cost3', 
                        id:'UPTO_100', 
   	                    	listeners: {
   				                change: function(obj, newval, oldval) {
   				                    if (value != 1) {
   				                    	//console.log("Not-Supervised");
   				                }
   				           }
   					}},
   					{text: 'upto $500',
                        value : 'Cost4', 
                        id:'UPTO_500', 
   	                    	listeners: {
   				                change: function(obj, newval, oldval) {
   				                    if (value != 1) {
   				                    	//console.log("Not-Supervised");
   				                }
   				           }
   					}}
                ]
        };
        
        /*showRec3 = {
        		xtype: 'selectfield',
                label: 'Save Energy',
                height: 50,
                width: 250,
                options: [
                    {text: '--select a view--',  value: '0'},
                    {text: 'Top Recommendations',
                        value : 'Recommended', 
                        id:'TopRecommendationsItem', 
   	                    	listeners: {
   				                change: function(obj, newval, oldval) {
   				                    if (value != 1) {
   				                    	//console.log("Not-Supervised");
   				                }
   				           }
   					}},
                    {text: 'Implemented',  value: 'Implemented', id: 'Implemented'},
                    {text: 'Energy-Saving-Habits',  value: 'EnergySavingHabitsItem', id: 'EnergySavingHabitsItem'}
                ]
        };*/
        
        selectionPanel = {        		
                centered: true,
                xtype: 'formpanel',
                title: 'View',
                name : 'selectionPanel',
                scroll:'vertical',
                height: 50,
               // width: 100,
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },                
                items: [showRec1, showRec2/*, showRec3*/]
        }
        
        
        listJson = {
                xtype: 'list',
                itemTpl: '{description}',
                //layout: 'fit',
                store: EnergyApp.stores.SuggestJsonStore,
                emptyText: '<div class="emptytext">There are no devices in the system at the moment.</div>',
                listeners: {
                    scope: this,
                    itemtap: this.onItemtapAction
                }
            };
        //console.log("abcd");
        
        var tabPanell = {
        		xtype : 'tabpanel',
        		tabBarPosition: 'bottom',
        		//height : 500,
//        		/width : 750,
        		id: 'recTab',
        		
        		tabBar: {
        			id : 'tabs',
                    layout: {
                        pack : 'center',
                        align: 'center'
                    },
                    docked: 'bottom',
                    scrollable: {
                        direction: 'horizontal',
                        indicators: false
                    }
                },

        	    items: [
					{
					    title: 'Heating Cooling',
					    iconCls: 'info',
					    html:'					    	Use active solar heating to warm your home					    	Adjust the temperature by 5 to 15 degrees Fahrenheit before you leave or go to sleep					    	When replacing your central air conditioner, pick an Energy Star model with a SEER of 14					    	When replacing your central air conditioner, pick a high-efficiency model with a SEER of 15	    	When replacing your central air conditioner, pick a high-efficiency model with a SEER of 16			    	When replacing your central air conditioner, pick a premium-efficiency model with a SEER of 17  	     	When replacing your gas boiler, pick an Energy Star model with an AFUE of 85 percent		    	When replacing your gas boiler, pick a high-efficiency model with an AFUE of 87 percent				    	When replacing your gas boiler, pick a premium-efficiency model with an AFUE of 91 percent	    	When replacing your gas boiler, pick a premium-efficiency model with an AFUE of 94 percent ',
					    
					    items : [listJson,addButton],
					    listeners:{
					    	activate: function(){
					    		//console.log(this);
					    		//console.log(document.getElementById('scr'));
					    		//console.log(document.getElementById('scr').innerHTML);
					    		document.getElementById('scr').innerHTML = '					    	Use active solar heating to warm your home					    	Adjust the temperature by 5 to 15 degrees Fahrenheit before you leave or go to sleep					    	When replacing your central air conditioner, pick an Energy Star model with a SEER of 14					    	When replacing your central air conditioner, pick a high-efficiency model with a SEER of 15	    	When replacing your central air conditioner, pick a high-efficiency model with a SEER of 16			    	When replacing your central air conditioner, pick a premium-efficiency model with a SEER of 17  	     	When replacing your gas boiler, pick an Energy Star model with an AFUE of 85 percent		    	When replacing your gas boiler, pick a high-efficiency model with an AFUE of 87 percent				    	When replacing your gas boiler, pick a premium-efficiency model with an AFUE of 91 percent	    	When replacing your gas boiler, pick a premium-efficiency model with an AFUE of 94 percent ';
					    	}
					    }
					},
        	        {
        	            title: 'House Exterior',
        	            iconCls: 'home',
        	            items : [listJson],
        	            listeners:{
					    	activate: function(){
					    		//console.log(this);
					    		//console.log(document.getElementById('scr'));
					    		//console.log(document.getElementById('scr').innerHTML);
					    		document.getElementById('scr').innerHTML = '	When re-roofing, add rigid insulation sheathing to your roof 				    			When replacing siding, add external sheathing insulation under it	    			 Compost food and yard waste to reduce trash 			Use renewable energy by getting home wind turbines  			When re-roofing, choose Energy Star roof materials with high solar reflectance (cool roof)';
					    	}
					    }
        	        },
        	        {
        	            title: 'Lights',
        	            iconCls: 'favorites',
        	            html:'White LEDs have the shortest life. Red preserves night vision the best, and might also be the best at preventing sleep disruption. However, green, blue, or white light might be the best to help people see furniture and other items.            	Place night lights in bedrooms out of your line of sight to avoid sleep disturbances.            	Consider rechargeable battery-powered units for critical places in case of power outages.            	Use flat panel electroluminescent lights to cover electrical outlets from small fingers.',
        	            items : [listJson],
        	            listeners:{
					    	activate: function(){
					    		//console.log(this);
					    		//console.log(document.getElementById('scr'));
					    		//console.log(document.getElementById('scr').innerHTML);
					    		document.getElementById('scr').innerHTML = 'White LEDs have the shortest life. Red preserves night vision the best, and might also be the best at preventing sleep disruption. However, green, blue, or white light might be the best to help people see furniture and other items.            	Place night lights in bedrooms out of your line of sight to avoid sleep disturbances.            	Consider rechargeable battery-powered units for critical places in case of power outages.            	Use flat panel electroluminescent lights to cover electrical outlets from small fingers.';
					    	}
					    }
        	        },
        	        {
        	            title: 'Devices',
        	            iconCls: 'settings',
        	            items : [listJson],
        	            listeners:{
					    	activate: function(){
					    		//console.log(this);
					    		//console.log(document.getElementById('scr'));
					    		//console.log(document.getElementById('scr').innerHTML);
					    		document.getElementById('scr').innerHTML = '					    			Charge electronics with solar power or other technologies 			Clean your dryers lint trap after each use to improve efficiency   			String your things on a clothesline instead of using a dryer	    			Use power management with your coffeemaker	    			Set your computer to hibernate or use sleep mode when idle';
					    	}
					    }
        	        },
        	        {
        	            title: 'Walls, Windows and Doors',
        	            iconCls: 'more',
        	            items : [listJson],
        	            listeners:{
					    	activate: function(){
					    		//console.log(this);
					    		//console.log(document.getElementById('scr'));
					    		//console.log(document.getElementById('scr').innerHTML);
					    		document.getElementById('scr').innerHTML = '					    			Add attic insulation to with a high R-value to improve home heating	    			Check caulking and weatherstripping    			Check attic and dryer vents and exhaust ducts for animals	    			Check double-pane windows for broken seals 			Consider dynamic windows to replace your existing ones ';
					    	}
					    }
        	        },{
        	            title: 'More',
        	            iconCls: 'more',
        	            items : [{
		        	        	xtype: 'list',
		        	            itemTpl: '{name}',
			                    store: EnergyApp.stores.House,
			                    emptyText: '<div class="emptytext">There are no Houses in the system at the moment.</div>'
			                    
		        	        }],
		        	        listeners:{
						    	activate: function(){
						    		//console.log(this);
						    		//console.log(document.getElementById('scr'));
						    		//console.log(document.getElementById('scr').innerHTML);
						    		document.getElementById('scr').innerHTML = '<table><tr><th>Select</th><th>Description</th><th>Status</th><th>Daily Saving</th>  <th>Annual Saving</th></tr><tr><td><input type="checkbox" name="vehicle" value="Bike" /></td><td>Lower the water temperature of your water heater</td><td><select><option>INPROGRESS</option><option>NOTAPPLIED</option> <option>DISCARDED</option>  <option>RECOMMENDED</option></select></td>  <td>10.4</td>  <td>120.5</td></tr></table>';
						    	}
						    }
        	        }
        	        
        	    ]
        };
       
       // x.className = "x-docked-bottom";
        var first = 1;
        //console.log(listJson);
        Ext.apply(this, {
           // html: '',
            xtype : 'container',
            tabBarPosition: 'bottom',
            scroll: 'vertical',
            
            layout: {
                type: 'vbox',
                align: 'stretchmax',
                pack: 'center'
            },
            dockedItems: [titlebar],
            items: [selectionPanel,{ xtype: 'spacer',id:'scr', html:'White LEDs have the shortest life. Red preserves night vision the best, and might also be the best at preventing sleep disruption. However, green, blue, or white light might be the best to help people see furniture and other items.            	Place night lights in bedrooms out of your line of sight to avoid sleep disturbances.            	Consider rechargeable battery-powered units for critical places in case of power outages.            	Use flat panel electroluminescent lights to cover electrical outlets from small fingers.' },tabPanell],
            listeners : {
            	show :function() {
            		//console.log(first);
            		if(first!=1){
	            		var x = document.getElementById('tabs');
	                    //console.log(x.className);
	                    document.getElementById('tabs').classList.add('x-docked-bottom');
	                    document.getElementById('tabs').classList.remove('x-docked-top');  
	                    //console.log(x.className);
            		}
            		first =2;
            	} 
            }
        });
        //console.log(listJson);
        EnergyApp.views.Suggest.superclass.initComponent.call(this);
    },

    onAddAction: function() {
    	
        Ext.dispatch({
            controller: 'Suggests',
            action: 'newSuggestForm'
        });
    },
	 /*
		 * onBackAction: function() { // App.views.viewport.reveal('floorplan'); },
		 */

    onItemtapAction: function(list, index, item, e) {
        Ext.dispatch({
            controller: 'Suggests',
            action: 'editSuggestForm',
            index: index
        });
    }
    
});
//console.log('done');
Ext.reg('EnergyApp.views.Suggest', EnergyApp.views.Suggest);
