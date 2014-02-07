(function(){
	var popup2 = new Ext.Panel({
	    floating: true,
	    modal: true,
	    id: 'pp',
	    centered: true,
	    padding: 10,
	    width: 325,
	    height: 410,
	    dockedItems: [
	        {
	            xtype: 'toolbar',
	            dock: 'top',
	            title: 'Floor Plan',
	        }
	    ],
	        items: [
	            {
	                xtype: 'panel',
	                centered: true,
	                padding: 20,
	                html: '<div class="floorImagebox"></div>'
	            }
	    ]
	});
	
	
	
	EnergyApp.views.Viewport = Ext
		.extend(
				Ext.TabPanel,
				{
					fullscreen : true,
					layout : 'card',
					//tabBarPosition : 'bottom',
					scroll: 'vertical',
					items : [
							{
								cls : 'launchscreen',
								title : 'About',
								iconCls : 'info',
								html : '<div><p><strong>This application visualizes UMKC Energy data with charts from the Data collected near University area.</strong><br> Start by selecting consumption or production.</p></div>'
							},
							{ 
								xtype: 'EnergyApp.views.userList', 
								id: 'userList',
								cls : 'card1',
								title : 'Users'
							},
							{ xtype: 'EnergyApp.views.userForm', id: 'userForm' },
							{
								xtype: 'EnergyApp.views.houseList', 
								id: 'houseList',
								cls : 'card1',
								title : 'Houses',
								scroll : 'vertical'
							},
							{ xtype: 'EnergyApp.views.houseForm', id: 'houseForm' },
							{ xtype: 'EnergyApp.views.chooseFloorForm', id: 'chooseFloorForm' },
							{ xtype: 'EnergyApp.views.Suggest', id: 'Suggest',title :'Recommendation' }
							
							/*{
								title : 'Configuration',
								xtype: 'formpanel',
								cls : 'card1',
								name : 'referigerationForm', 
								standardSubmit : false,
								modal : true,
								//hideOnMaskTap : false,
								items : [
										{
											xtype : 'fieldset',
											title : 'Device Configuration Information',
											instructions : 'For Proper Monitoring of your Devices please enter Device Configuration Information',
											defaults : {
												required : true,
												labelAlign : 'left',
												labelWidth : '40%'
											},
											items : [ 
											{
												xtype : 'textfield',
												name : 'name',
												id: 'refrigeratorName',
												label : 'Name',
												value : 'Refrigerator'		
											},{
							                     xtype: 'fieldset',
							                     title: 'Set Refrigerator ON/OFF',
							                     
							                     items: [
							                         {
							                             xtype: 'togglefield',
							                             name: 'status1',
							                             id: 'refrigeratorOn',
							                             value : 0,
							                             label: 'Device Status',
							                             labelAlign : 'left',
														 labelWidth : '40%'
														 
							                         }
							                     ]
							                },{
							                     xtype: 'fieldset',
							                     title: 'Control Refrigeration Utilization',
							                     id: 'refrigeratorTempValue',
							                     items: [{
							                            id: 'tempValue1',
							                            xtype: 'textfield',
							                            name: 'temp1',
							                            labelAlign : 'left',
														labelWidth : '40%',
							                            label:'Temperature(Degree Celcius)  ',
							                            value: '500'
							                        },
							                         {	flex: 1,
							                            xtype: 'sliderfield',
							                            name : 'tempControl1',
							                            id: 'refrigeratorTempControl',
							                            label: 'Temperature Control',
							                            labelAlign : 'left',
														labelWidth : '40%',
														maxValue : 1000,
											            minValue : 200,
											            value: 500,
											            listeners: {
											                change: function(slider, thumb, value) {
											                    if (value) {
											                        Ext.getCmp('tempValue1').setValue(value);
											                        /**
											                         * Make a call for configuration web service to configure the device to be set to that temperature.
											                         * Get a response back and show it in the dialog.
											                         
											                       // jsWebService.checkValue(value);
											                    }
											                }
											            }
							                        }
							                     ]
							                }
					                         ]// items ends
										},
										{
											xtype : 'toolbar',
											docked : 'bottom',
											items : [
													
													{
														xtype : 'spacer'
													},
													{
														text : 'Optimize',
														handler : function() {
															//alert('Loading');
															var form = this.up('form');
															form.setValues({
															    status1 :'1',
															    temp1 :'400',
															    tempControl1 : '400'
															});
														}
													},
													{
														text : 'Reset',
														handler : function() {
															//alert('Resetting');
															var form = this.up('form');
															form.reset();
															form.setValues({
																name: "Refrigerator"
															});
														}
													},
													{
														text : 'Save',
														ui : 'confirm',
														handler : function() {
																														
															var form = this.up('form');
															var obj = form.getValues();
															console.log(form.getValues(true));
															console.log(form.getValues().valueOf('floorArea'));
															console.log(form.getValues().floorArea);														
															
															
															form.submit({
//																waitMsg : {
//																	message : 'Submitting'
//																}
																
															});
														}
													} ]
										} ],// items ends.

								listeners : {
									submit : function(form, result) {
										console.log('success', Ext.toArray(arguments));
										var form = this.up('form');
										Ext.Msg.alert('Submitted Values to the Cloud Server', form.getValues());
									},
									exception : function(form, result) {
										console.log('failure', Ext.toArray(arguments));
									}
								},
								iconCls : 'settings'
							}*/
							,
							{
		                        centered: true,
		                        xtype: 'container',
		                        title: 'Room 451',
		                        scroll:'vertical',
		                        layout: {
		                           // type: 'hbox',
		                            align: 'stretchmax',
		                            pack: 'center'
		                        },
		                        
		                        items: [{
									xtype : 'toolbar',
									docked : 'top',
									title: 'View Devices',
									items : [
											
											{
												xtype : 'spacer'
											},
											{
												itemId: 'addButton',
									            iconCls: 'add',
									            iconMask: true,
									            ui: 'plain',
									            handler: function() {
													//alert('floor plan reveled');
													/*App.views.viewport.reveal('devicesList');
											        Ext.dispatch({
											            controller: 'Devices',
											            action: 'devlist'
											        });*/
													
											    },
									            scope: this
											}]
		                        	},
		                            {
		                            	layout: {
		 		                            type: 'hbox',
		 		                            align: 'stretchmax',
		 		                            pack: 'center'
		 		                        },
				                        items: [{
			                            	title: 'Floor Plan',
			                    			layout: 'fit',
			                            	html: '<div class="demo" id="fpdiv"><div class="ui-widget-content ui-draggable draggable" id="item0" ondblclick="dblclick(this)" onclick="dblclick(this)"></div></div>',
			                            	listeners: {
			                            	    beforerender: function(){
				                            		console.log(Ext.getCmp('floorImage'));
				                            	}
			                            	    , render: function(){
				                            		console.log(Ext.getCmp('floorImage'));
				                            	}
			                            	    , afterrender: function(){
				                            		console.log(Ext.getCmp('floorImage'));
				                            	}
			                            	}
			                            	
			                    			
			                            	}, {
			                            		id : 'addDev',
			                            		name: 'addDev',
				                            	layout: {
				 		                            type: 'vbox',
				 		                            align: 'stretchmax',
				 		                            pack: 'center',
				 		                            width: 100
				 		                        },
						                        items: [
					                            	{
							                            xtype: 'button',
							                            text: 'TV',
							                            height: 50,
							                            flex: 2,
							                            maxWidth: 100,
							                            style: 'margin-top: 5px; width: 90px;',
							                            maxWidth: 70,
							                            handler: function(){
							                            							                            	
							                            	addTVDraggable('TV');
							                            }
							                            
							                        }, {
							                            xtype: 'button',
							                            text: 'MW',
							                            height: 50,
							                            flex: 2,
							                            maxWidth: 100,
							                            style: 'margin-top: 5px; width: 90px;',
							                            maxWidth: 70,
							                            handler: function(){
							                            	addTVDraggable('Microwave');
							                            }
							                            
							                        },{
							                            xtype: 'button',
							                            text: 'PC',
							                            height: 50,
							                            flex: 2,
							                            maxWidth: 100,
							                            style: 'margin-top: 5px; width: 90px;',
							                            maxWidth: 70,
							                            handler: function(){
							                            	addTVDraggable('TV');
							                            }
							                            
							                        },{
							                            xtype: 'button',
							                            text: 'Washer',
							                            height: 50,
							                            flex: 2,
							                            maxWidth: 100,
							                            style: 'margin-top: 5px; width: 90px;',
							                            maxWidth: 70,
							                            handler: function(){
							                            	addTVDraggable('Washer');
							                            }
							                            
							                        },{
							                            xtype: 'button',
							                            text: 'Dryer',
							                            height: 50,
							                            flex: 2,
							                            maxWidth: 100,
							                            style: 'margin-top: 5px; width: 90px;',
							                            maxWidth: 70,
							                            handler: function(){
							                            	addTVDraggable('DishWasher');
							                            }
							                            
							                        },{
							                            xtype: 'button',
							                            text: 'Light',
							                            height: 50,
							                            flex: 2,
							                            maxWidth: 100,
							                            style: 'margin-top: 5px; width: 90px;',
							                            maxWidth: 70,
							                            handler: function(){
							                            	addTVDraggable('Light');
							                            }
							                            
							                        }, {
							                            xtype: 'button',
							                            text: 'ADD',
							                            height: 50,
							                            flex: 2,
							                            maxWidth: 100,
							                            style: 'margin-top: 5px; width: 90px;',
							                            maxWidth: 70,
							                            handler: function(){
							                            								                            	
							                            	addTVDraggable('New');
							                            }
							                            
							                        }]
			                            		}// vbox ends					                        
					                        ]
		 		                    },	  
				                    {
										xtype : 'toolbar',
										docked : 'bottom',
										items : [{
									            id: 'fpSaveButton',
									            text: 'Add',
									            ui: 'confirm',
									            handler: function(){
									            	console.log("hello");
													var toast = 'sfsd';
													showAndroidToast(toast);
													console.log("hello");
									            },
									            scope: this
								        }, {
									            id: 'fpServerSaveButton',
									            text: 'Existing',
									            ui: 'confirm',
									            handler: this.onAddServerItemAction,
									            scope: this
									    }, {
								            id: 'fpSaveItemButton',
								            text: 'Confirm New',// This will save the new Items to the Store of devices
								            ui: 'confirm',
								            handler: this.onSaveItemsAction,
								            scope: this
								        }, {
								            id: 'fpShowItemButton',
								            text: 'Show New Add', // This will save the new Items to the Store of devices
								            ui: 'confirm',
								            handler: this.onShowItemsAction,
								            scope: this
								        } ]// bottom items ends
			                        	}]
							}// Container ends.
							/*,timedDeviceView, ,
							{ xtype: 'EnergyApp.views.timedDeviceView', id: 'timedDeviceView',title :'TimeView' }*/
						],//items ends
						onAddServerItemAction : function() {
							console.log("hello");
							var toast = 'sfsd';
							showAndroidToast(toast);
							console.log("hello");
							//console.log(vs);
							/*App.views.viewport.reveal('devicesList');
					        Ext.dispatch({
					            controller: 'Devices',
					            action: 'devlist'
					        });*/
							// alert('done');
					    },
					initComponent : function() {
						console.log("viewport init");
						
						var navigateButton = new Ext.Button(
								{
									hidden : Ext.is.Phone
											|| Ext.Viewport.orientation == 'landscape',
									text : 'Navigation',
									handler : function() {
										EnergyApp.views.Navigation.showBy(this,
												'fade');
									}
								});

						var backButton = new Ext.Button(
								{
									text : 'Back',
									ui : 'back',
									handler : function() {
										var navigation = EnergyApp.views.Navigation, title;

										if (this.getActiveItem() === navigation) {
											navigation.onBackTap();

											// we are in the root - no back
											// button here
											if (navigation.items
													.indexOf(navigation
															.getActiveItem()) <= 0) {
												this.toolBar.items.get(0)
														.hide();
												title = this.title || '';
											}
										} else {
											this.setActiveItem(navigation, {
												type : 'slide',
												reverse : true
											});
										}
										var recordNode = navigation
												.getActiveItem().recordNode;
										title = title
												|| navigation
														.renderTitleText(recordNode);

										this.toolBar.setTitle(title);
									},
									hidden : true,
									scope : this
								});
						/**
						 * an Array of buttons
						 */
						var btns = [ navigateButton ];

						if (Ext.is.Phone) {
							/**
							 * unshift adds a new element at the beginning of
							 * the array btns
							 */
							btns.unshift(backButton);
						}

						/**
						 * the energy Bar at the top, containing the buttons
						 */
						this.toolBar = new Ext.Toolbar({
							ui : 'dark',
							dock : 'top',
							items : btns.concat(this.buttons || []),
							title : this.title
						});
						/**
						 * this.dockedItems = this.dockedItems || [];
						 * this.dockedItems.unshift(myPanel);
						 */
						this.dockedItems = this.dockedItems || [];
						this.dockedItems.unshift(this.toolBar);

						if (!Ext.is.Phone) {
							EnergyApp.views.Navigation.setWidth(300);
						}

						if (!Ext.is.Phone
								&& Ext.Viewport.orientation == 'landscape') {
							this.dockedItems
									.unshift(EnergyApp.views.Navigation);
						} else if (Ext.is.Phone) {
							this.items = this.items || [];
							this.items.unshift(EnergyApp.views.Navigation);
						}
						/**
						 * I: This will add the navigation Item to the Docked
						 * side bar only.
						 */
						 this.dockedItems.unshift(EnergyApp.views.Navigation);
						/**
						 * I: Following will add the Navigation Item to the
						 * Tabed Bars on the top of the application instead of
						 * the sidewise Docked bar.
						 */
						 //this.items.unshift(EnergyApp.views.Navigation);
						/**
						 * addDocked is part of Ext.Panel in Sencha Touch and
						 * Ext JS 4 .
						 * 
						 * This explanation applies to both items and
						 * dockedItems.
						 * 
						 * When you are manipulating this.items or
						 * this.dockedItems directly via unshift/push/etc you
						 * want to make sure that you do so before the Component
						 * has been initialized (before you invoke the parent
						 * class initComponent method).
						 * 
						 * After you have invoked the parent class
						 * implementation of initComponent you will then invoke
						 * add or addDocked.
						 * 
						 * To generalize this: Before the parent class
						 * initComponent is invoked, everything in this. are
						 * configurations. After the parent class initComponent
						 * is invoked, everything in this. are properties and
						 * methods
						 */
						EnergyApp.views.Viewport.superclass.initComponent.call(
								this, arguments);
					},
					layoutOrientation : function(orientation, w, h) {
						if (!Ext.is.Phone) {
							if (orientation == 'portrait') {
								/**
								 * Show the navigation
								 */
								EnergyApp.views.Navigation.hide(false);
								/**
								 * removed from docked
								 */
								this.removeDocked(EnergyApp.views.Navigation,
										false);
								if (EnergyApp.views.Navigation.rendered) {
									EnergyApp.views.Navigation.el
											.appendTo(document.body);
								}
								EnergyApp.views.Navigation.setFloating(true);
								EnergyApp.views.Navigation.setHeight(400);
								/**
								 * hide the navigation buttons when the
								 * orientation is portrait
								 */
								this.toolBar.items.get(0).show(false);
							} else {
								/**
								 * show the navigation buttons if the
								 * orientation is landscape
								 */
								EnergyApp.views.Navigation.setFloating(false);
								EnergyApp.views.Navigation.show(false);

								this.toolBar.items.get(0).hide(false);
								this
										.insertDocked(0,
												EnergyApp.views.Navigation);

							}
							this.toolBar.doComponentLayout();
						}

						EnergyApp.views.Viewport.superclass.layoutOrientation
								.call(this, orientation, w, h);
					},
					reveal: function(target) {
				        var direction = (target === 'userList') ? 'right' : 'left';
				        console.log(EnergyApp.views);
				        console.log(EnergyApp.views.userForm);
				        console.log(target);
				        console.log(EnergyApp.views[target]);
				        this.setActiveItem(
				            EnergyApp.views[target],
				            { type: 'slide', direction: direction }
				        );
				    }
				});
	console.log('ViewPort Loaded');
})();