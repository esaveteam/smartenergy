window.generateData = function(n, floor) {
            var data = [],
                p = (Math.random() * 11) + 1,
                i,//Devices = ['Lights', 'AC','Heater','WaterHeater','TV','MusicSys','X-Box','PC','Laptop','Printer','Scanner','Copier','VideoGame','Mobile','ipad','Refrigerator', 'Oven', 'Microwave','Toaster','CoffeeMkr','ElectricRange','MixerBlender'];
                Times = ['00:00:00', '00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00'];

            floor = (!floor && floor !== 0) ? 20 : floor;

            for (i = 0; i < (n || 12); i++) {
	            if(i==0){
	                data.push({
	                    //name: Date.monthNames[i % 12],
						name: Times[i],
	                    data1: Math.floor(Math.max((Math.random() * 100), floor)),
	                    data2: Math.floor(Math.max((Math.random() * 100), floor)),
	                    data3: Math.floor(Math.max((Math.random() * 100), floor)),
	                    data4: Math.floor(Math.max((Math.random() * 100), floor)),
	                    data5: Math.floor(Math.max((Math.random() * 100), floor)),
	                    data6: Math.floor(Math.max((Math.random() * 100), floor)),
	                    data7: Math.floor(Math.max((Math.random() * 100), floor)),
	                    data8: Math.floor(Math.max((Math.random() * 100), floor)),
	                    data9: Math.floor(Math.max((Math.random() * 100), floor))
	                });
	            }else{
	            	 data.push({
		                    //name: Date.monthNames[i % 12],
							name: Times[i],
		                    data1: 0,
		                    data2: 0,
		                    data3: 0,
		                    data4: 0,
		                    data5: 0,
		                    data6: 0,
		                    data7: 0,
		                    data8: 0,
		                    data9: 0
		                });
	            }
            }
            return data;
        };
        window.store1 = new Ext.data.JsonStore({
            fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data9', 'data9'],
            data: generateData(21, 20)
        });

        var colors = ['url(#v-1)', 'url(#v-2)', 'url(#v-3)', 'url(#v-4)', 'url(#v-5)'];
        //var colors = ['url(#v-1)', 'url(#v-1)', 'url(#v-1)', 'url(#v-1)', 'url(#v-1)'];
        /**
         * Timer inclusion
         */
        function currTime ()
        {
          var currentTime = new Date ( );
          var currentHours = currentTime.getHours ( );
          var currentMinutes = currentTime.getMinutes ( );
          var currentSeconds = currentTime.getSeconds ( );    
          currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
          currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
          interval_5 = interval_5+1;
        
          var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
          currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;         
          currentHours = ( currentHours == 0 ) ? 12 : currentHours;         
          var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
          //console.log(currentTimeString);
          return currentTimeString;
       
        };
        var timer = 0;
        var onceDone = 'f';
        var total = window.store1.data.items.length;
        var onRefreshTap = function() {
            if(timer>=total){
        		timer =  0;
        		onceDone = 't';
        	}
        	timer = timer +1;
        	//console.log(window.store1);
        	
            var coll = window.store1.data;
			var ary = coll.items;
			
			nxt = window.store1.data.items[0].data;
			/*if(onceDone=='f'){
				for(j = 0; j<timer; j++ ){
									
					prev = window.store1.data.items[j+1].data;				
					window.store1.data.items[j+1].data = nxt;
					nxt = prev;
					
				}
			}
        	if(onceDone=='t'){*/
				for(j = 0; j<total-1; j++ ){
					
					prev = window.store1.data.items[j+1].data;				
					window.store1.data.items[j+1].data = nxt;
					nxt = prev;
					
				}
			//}
			var floor = 20;
			
			window.store1.data.items[0].data.name = currTime();
			var nData = {name: window.store1.data.items[0].data.name,
                    data1: Math.floor(Math.max((Math.random() * 100), floor)),
                    data2: Math.floor(Math.max((Math.random() * 100), floor)),
                    data3: Math.floor(Math.max((Math.random() * 100), floor)),
                    data4: Math.floor(Math.max((Math.random() * 100), floor)),
                    data5: Math.floor(Math.max((Math.random() * 100), floor)),
                    data6: Math.floor(Math.max((Math.random() * 100), floor)),
                    data7: Math.floor(Math.max((Math.random() * 100), floor)),
                    data8: Math.floor(Math.max((Math.random() * 100), floor)),
                    data9: Math.floor(Math.max((Math.random() * 100), floor))}
			
			window.store1.data.items[0].data = nData;		
			window.store1.loadData(window.store1.data.items);
        };
        
       
		function onRefreshTap() {
		}
		
		
		
        var onHelpTap = function() {
			new Ext.Panel({
 		          floating: true,
		           modal: true,
		           centered: true,
		           width: 300,
		           height: 250,
		           styleHtmlContent: true,
		           scroll: 'vertical',
		           dockedItems: [{
		               dock: 'top',
		               xtype: 'toolbar',
		               title: 'Energy Data'
		           }],
		           stopMaskTapEvent: false,
		           fullscreen: false,
				   html: "Real Time Data",
		       }).show('pop');
		}
     

var presentTimeShow = new Ext.chart.Panel({
		iconCls: 'area',
		width:'700',
	    cls: 'chartpanel',
	    theme: 'Energy',
	    interactions: ['reset', {
	        type: 'panzoom',
	        axes: {
	            right: {}
	        }
	    }],
           
            title: 'Present Time',
            fullscreen:true,
            dockedItems: [{
      
				id : 'clock2',
				html: '<div id = "clock1" ">       	    	  </div>'
			},
			{
				ui: 'confirm',
				text:'Help',
                handler: onHelpTap
            }, {
            	
			}],
            items: {
                cls: 'column1',
                animate: {
                    easing: 'bounceOut',
                    duration: 750
                },
                store: store1,
                shadow: false,
                gradients: [{
                    'id': 'v-1',
                    'angle': 0,
                    stops: {
                        0: {
                            color: 'rgb(212, 40, 40)'
                        },
                        100: {
                            color: 'rgb(117, 14, 14)'
                        }
                    }
                },
                {
                    'id': 'v-2',
                    'angle': 0,
                    stops: {
                        0: {
                            color: 'rgb(180, 216, 42)'
                        },
                        100: {
                            color: 'rgb(94, 114, 13)'
                        }
                    }
                },
                {
                    'id': 'v-3',
                    'angle': 0,
                    stops: {
                        0: {
                            color: 'rgb(43, 221, 115)'
                        },
                        100: {
                            color: 'rgb(14, 117, 56)'
                        }
                    }
                },
                {
                    'id': 'v-4',
                    'angle': 0,
                    stops: {
                        0: {
                            color: 'rgb(45, 117, 226)'
                        },
                        100: {
                            color: 'rgb(14, 56, 117)'
                        }
                    }
                },
                {
                    'id': 'v-5',
                    'angle': 0,
                    stops: {
                        0: {
                            color: 'rgb(187, 45, 222)'
                        },
                        100: {
                            color: 'rgb(85, 10, 103)'
                        }
                    }
                }],
                axes: [{
                    type: 'Numeric',
                    position: 'left',
                    fields: ['data1','data2','data3','data4','data5','data6','data7'],
                    minimum: 0,
                   // maximum: 100,
                    label: {
                        renderer: function(v) {
                            return v.toFixed(0);                           
                        }
                    },
                    title: 'Energy Consumption (BTUs)'
                },
                {
                    type: 'Category',
                    position: 'bottom',
                    fields: ['name'],
                    title: 'Time',
                    label: {
                        rotate: {
                            degrees: 45
                        }
                    }
                }],
                legend: {
                    position: Ext.is.Phone ? 'left' : 'top'
                },
                series: [{
                    type: 'area',
                    axis: 'left',
                    highlight: true,
                    renderer: function(sprite, storeItem, barAttr, i, store) {
                        barAttr.fill = colors[i % colors.length];
                        
                        return barAttr;
                    },
                    label: {
                      field: 'data1'
                    },
                    xField: 'name',
                    yField: ['data1','data2','data3','data4','data5','data6','data7'], 
                    title: ['TV', 'MW', 'PC', 'Washer', 'Dryer','Light','AC']
                }],
                interactions: [{
                    type: 'panzoom',
                    axes: ['bottom']
                }]
            }
        });
setInterval("updateClock()",1000);
setInterval("onRefreshTap()",3000);