EnergyApp = new Ext.Application({
    name: 'EnergyApp',
    tabletStartupScreen: 'tablet_startup.jpg',
    phoneStartupScreen: 'phone_startup.jpg',
    tabletIcon: 'icon-ipad.png',
    phoneIcon: 'icon-iphone.png',
    glossOnIcon: false,
    launch: function(){
        this.views.viewport = new this.views.Viewport({title: 'Smart Energy Data Visualization'});
        this.views.userList = this.views.viewport.down('#userList');
        this.views.userForm = this.views.viewport.down('#userForm');
        this.views.houseList = this.views.viewport.down('#houseList');
        this.views.houseForm = this.views.viewport.down('#houseForm');
        this.views.chooseFloorForm = this.views.viewport.down('#chooseFloorForm');
        /**
         * specific list of suggestions. synchornous with store and models of other types.
         */
        this.views.Suggest = this.views.viewport.down('#Suggest');
       // this.views.timedDeviceView = this.views.viewport.down('#timedDeviceView');
      }
});
var carousel2;
var timedDeviceView = new Ext.TabPanel({
    tabBar: {
        dock: 'top',
        layout: {
            pack: 'center'
        }
    },
    ui: 'light',
    cardSwitchAnimation: {
        type: 'slide'
    },
    items: [presentTimeShow]// items ends
	
});


var interval_5 = 0;
var start5min ;
function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  interval_5 = interval_5+1;
  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

//  document.getElementById("clock1").innerHTML= currentTimeString;
  if(interval_5 >=30){
	  // make Ajax call
	  interval_5 = 0;
	  //alert('ok');
  }
}
carousel2 = new Ext.Carousel({
        direction: 'vertical',
        ui: 'light',
        title:'Voila',
        layout: {
             type: 'vbox',
             align: 'stretchmax',
             pack: 'center',
             width: 100
         },
        activeItem: 3,
        defaults: {
            cls: 'card',
            type: 'vbox',
            align: 'stretchmax',
            pack: 'center',
            width: 100
        },
        items: [{
            title: 'Tab 1',
            html: '<h1>ui="light"</h1>',
            width: 100,
            items: [{
				xtype : 'fieldset',
				title : 'Studios Information',
				name: 'studioFP',
				id:'studioFP',									
				instructions : 'For Proper Monitoring of your Devices please select floor plan',
				defaults : {
					required : true,
					labelAlign : 'left'									
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
						                    //console.log($('#fpdiv'));
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
							                    //console.log($('#fpdiv'));
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
							                    //console.log($('#fpdiv'));
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
							                    //console.log($('#fpdiv'));
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
							                    //console.log($('#fpdiv'));
							                    $('#fpdiv').css('backgroundImage','url(images/StudioSicilyFP.jpg)'); 
							                    } 
							            }
							         }]
		        	}]
				}
			]
        },
        {
            title: 'Tab 2',
            html: '2'
        },
        {
            title: 'Tab 3',
            html: '3'
        }]
    });
// Touch 1.x doesn't have a beforetabswitch event to hook...
Ext.override(Ext.TabBar, {
    onTouchStart : function(e, t) {
        t = e.getTarget('.x-tab');
       // alert(t);
        if (t) {
            var newTab = Ext.getCmp(t.id);
           // alert('newtab'+newTab);
            if (!newTab.hasBeenShown) {
                newTab.hasBeenShown = true;
                var loadMask = new Ext.LoadMask(EnergyApp.views.viewport.getActiveItem().el, {
                    msg: 'Loading...'
                });
                loadMask.show();
                newTab.on('activate', function() {
                    loadMask.destroy();
                }, undefined, { delay: 10 });
            }
            Ext.defer(this.onTabTap, 10, this, [newTab]);
        }
    }
});

EnergyApp.commify = function(nStr) {
    return(nStr / 1000000).toFixed(2);
};

EnergyApp.loadPieAtYear = function(year) {
    EnergyApp.currentYear = year = year || EnergyApp.currentYear || 2008;
    var store = EnergyApp.stores.ChartStore,
        record = store.getAt(store.find('year', year));
    EnergyApp.stores.YearStore.loadData([
        {type: 'Cooking', data: record.get('coal')},
        {type: 'Cleaning', data: record.get('crude-oil')},
        {type: 'Playing', data: record.get('gas')},
        {type: 'Study', data: record.get('nuclear')},
        {type: 'Sleep', data: record.get('renewable')}
    ]);
   // alert('Pie loaded properly');
};

EnergyApp.popup = function(item, panel) {
    var storeItem = item.storeItem,
        commify = EnergyApp.commify;
    panel.update([
        '<ul><li><b>Time: </b>' + storeItem.get('year') + '</li>',
        '<li><b>Coal: </b> ' + commify(storeItem.get('coal')) + '</li>',
        '<li><b>Oil: </b> ' + commify(storeItem.get('crude-oil')) + '</li>',
        '<li><b>Natural Gas: </b> ' + commify(storeItem.get('gas')) + '</li>',
        '<li><b>Nuclear: </b> ' + commify(storeItem.get('nuclear')) + '</li>',
        '<li><b>Renewable: </b> ' + commify(storeItem.get('renewable')) + '</li>',
        '</ul>'
    ].join(''));
};

EnergyApp.popupYear = function(item, panel) {
    var storeItem = item.storeItem,
        commify = EnergyApp.commify;
    panel.update([
        '<ul><li><b>ActivityType: </b>' + storeItem.get('type') + '</li>',
        '<li><b>BTUs: </b> ' + commify(storeItem.get('data')) + '</li>',
        '</ul>'
    ].join(''));
};