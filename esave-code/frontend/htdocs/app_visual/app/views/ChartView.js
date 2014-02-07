window.generateData = function(n, floor) {
            var data = [],
                p = (Math.random() * 11) + 1,
                i,//Devices = ['Lights', 'AC','Heater','WaterHeater','TV','MusicSys','X-Box','PC','Laptop','Printer','Scanner','Copier','VideoGame','Mobile','ipad','Refrigerator', 'Oven', 'Microwave','Toaster','CoffeeMkr','ElectricRange','MixerBlender'];
                Times = ['00:00:00', '00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00','00:00:00'],
            	months = [1,2,3,4,5,6,7,8,9,10,11,12], // 12 months of a year
            	weeks = [1,2,3,4] ,// 4 weeks of a month
            	daily = [1,2,3,4,5,6,7], // daily data
            	hourly = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
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
        window.timeline = new Ext.data.JsonStore({
            fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data9', 'data9'],
            data: generateData(21, 20)
        });

var areaChart = new Ext.chart.Chart({
    title: 'Area',
    iconCls: 'area',
    cls: 'chartpanel',
    theme: 'Energy',
    interactions: ['reset', {
        type: 'panzoom',
        axes: {
            right: {}
        }
    },
    {
        type: 'iteminfo',
        gesture: 'tap',
        listeners: {
            show: function(interaction, item, panel) {
                EnergyApp.popup(item, panel);
            }
        }
    }],
    animate: false,
    store: EnergyApp.stores.ChartStore,
    axes: [{
        type: 'Numeric',
        position: 'right',
        minimum: 0,
        label: {
           // renderer: EnergyApp.commify
        },
        adjustMinimumByMajorUnit: 0,
        fields: ['coal', 'nuclear', 'crude-oil', 'gas', 'renewable'],
        title: 'Million BTUs'
    },
    {
        type: 'Category',
        position: 'bottom',
        fields: ['year'],
        title: 'Year',
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
        highlight: false,
        title: ['Home', 'Office', 'Cafetaria', 'Labs', 'Dorms'],
        axis: 'right',
        xField: 'year',
        yField: ['coal', 'nuclear', 'crude-oil', 'gas', 'renewable']
    }],
    listeners: {
        afterrender: function(me) {
            me.on('beforerefresh', function() {
                if (me.ownerCt.getActiveItem().id !== me.id) {
                    return false;
                }
            }, me);
        }
    }
});

var lineChart = new Ext.chart.Chart({
    title: 'TimeLine',
    iconCls: 'line',
    cls: 'chartpanel',
    interactions: ['reset', {
        type: 'panzoom',
        axes: {
            right: {}
        }
    },{
        type: 'iteminfo',
        gesture: 'tap',
        listeners: {
            show: function(interaction, item, panel) {
                EnergyApp.popup(item, panel);
            }
        }
    }],
    animate: false,
    store: EnergyApp.stores.ChartStore,
    axes: [{
        type: 'Numeric',
        position: 'right',
        minimum: 0,
        label: {
           // renderer: EnergyApp.commify
        },
        adjustMinimumByMajorUnit: 0,
        fields: ['device', 'nuclear', 'crude-oil', 'gas', 'renewable'],
        title: 'Million BTUs',
        grid: {
            odd: {
                stroke: '#777'
            },
            even: {
                stroke: '#555'
            }
        }
    },
    {
        type: 'Category',
        position: 'bottom',
        fields: ['year'],
        title: 'Year',
        label: {
            rotate: {
                degrees: 45
            }
        }
    }],
    legend: {
        position: Ext.is.Phone ? 'left' : 'top'
    },
    theme: 'Energy',
    series: [{
        type: 'line',
        highlight: false,
        showMarkers: false,
        fill: true,
        smooth: true,
        axis: 'right',
        xField: 'year',
        yField: 'device',
        title: ['Device']
    }/*, {
        type: 'line',
        highlight: false,
        showMarkers: false,
        fill: true,
        smooth: true,
        axis: 'right',
        xField: 'year',
        yField: 'crude-oil',
        title: ['Monthly']
    }, {
        type: 'line',
        highlight: false,
        showMarkers: false,
        fill: true,
        smooth: true,
        axis: 'right',
        xField: 'year',
        yField: 'gas',
        title: ['Weekly']
    }, {
        type: 'line',
        highlight: false,
        showMarkers: false,
        fill: true,
        smooth: true,
        axis: 'right',
        xField: 'year',
        yField: 'nuclear',
        title: ['Daily']
    }, {
        type: 'line',
        highlight: false,
        showMarkers: false,
        fill: true,
        smooth: true,
        axis: 'right',
        xField: 'year',
        yField: 'renewable',
        title: ['Hourly']
    }*/],
    listeners: {
        afterrender: function(me) {
            me.on('beforerefresh', function() {
                if (me.ownerCt.getActiveItem().id !== me.id) {
                    return false;
                }
            }, me);
        }
    }
});

/**
 * Leave off
 */
/*var data1;


var devs = new Array();
devs = data1.devs;
console.log(data1);
console.log(devs);*/
var lineChart1 = new Ext.chart.Chart({
    title: 'Zigbee Energy',
    iconCls: 'line',
    cls: 'chartpanel',
    interactions: ['reset', {
        type: 'panzoom',
        axes: {
            right: {}
        }
    },{
        type: 'iteminfo',
        gesture: 'tap',
        listeners: {
            show: function(interaction, item, panel) {
                EnergyApp.popup(item, panel);
            }
        }
    }],
    animate: false,
    store: EnergyApp.stores.ZigbeeStore,
    axes: [{
        type: 'Numeric',
        position: 'right',
        minimum: 0,
        label: {
           // renderer: EnergyApp.commify
        },
        adjustMinimumByMajorUnit: 0,
        fields: ['device'/*, 'nuclear', 'crude-oil', 'gas', 'renewable'*/],
        title: 'Watts',
        grid: {
            odd: {
                stroke: '#777'
            },
            even: {
                stroke: '#555'
            }
        }
    },
    {
        type: 'Category',
        position: 'bottom',
        fields: ['time'],
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
    theme: 'Energy',
    series: [{
        type: 'line',
        highlight: false,
        showMarkers: false,
        fill: true,
        smooth: true,
        axis: 'right',
        xField: 'time',
        yField: 'device',
        title: ['ZigBee Device']
    }/*, {
        type: 'line',
        highlight: false,
        showMarkers: false,
        fill: true,
        smooth: true,
        axis: 'right',
        xField: 'year',
        yField: 'crude-oil',
        title: ['Monthly']
    }, {
        type: 'line',
        highlight: false,
        showMarkers: false,
        fill: true,
        smooth: true,
        axis: 'right',
        xField: 'year',
        yField: 'gas',
        title: ['Weekly']
    }, {
        type: 'line',
        highlight: false,
        showMarkers: false,
        fill: true,
        smooth: true,
        axis: 'right',
        xField: 'year',
        yField: 'nuclear',
        title: ['Daily']
    }, {
        type: 'line',
        highlight: false,
        showMarkers: false,
        fill: true,
        smooth: true,
        axis: 'right',
        xField: 'year',
        yField: 'renewable',
        title: ['Hourly']
    }*/],
    listeners: {
        afterrender: function(me) {
            me.on('beforerefresh', function() {
                if (me.ownerCt.getActiveItem().id !== me.id) {
                    return false;
                }
            }, me);
        }
    }
});

/**
 * leave off
 */

var yearChart = new Ext.Panel({
    title: 'Activity',
    iconCls: 'line',
    cls: 'chartpanel',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    listeners: {
        activate: function() {
            var slider = Ext.getCmp('mySlider');
            slider.initValue();
            slider.setValue(2009);
        },
        single: true
    },
    dockedItems: [{
        dock: 'bottom',
        xtype: 'toolbar',
        height: 70,
        items: [{
            xtype: 'component',
            cls: 'yearlabel',
            html: '1960'
        }, {
            flex: 1,
            ui: 'light',
            id: 'mySlider',
            xtype: 'sliderfield',
            name: 'year',
            maxValue : 2009,
            minValue : 1960,
            value: 2009,
            listeners: {
                change: function(slider, thumb, value) {
                    if (value) {
                        Ext.getCmp('yearToolbar').setTitle('Data For ' + value);
                        EnergyApp.loadPieAtYear(value);
                    }
                }
            }
        }, {
            xtype: 'component',
            cls: 'yearlabel',
            html: '2009'
        }]
    },  {
        id: 'yearToolbar',
        dock: 'bottom',
        xtype: 'toolbar',
        title: 'Data For 1960'
    }],
    items: [{
        flex: 1,
        xtype: 'chart',
        theme: 'Energy',
        cls: 'radar',
        store: EnergyApp.stores.YearStore,
        shadow: false,
        animate: true,
        interactions: [{
            type: 'iteminfo',
            listeners: {
                show: function(interaction, item, panel) {
                    EnergyApp.popupYear(item, panel);
                }
            }
        }, 'rotate', 'reset'],
        axes: [{
            steps: 5,
            type: 'Radial',
            position: 'radial',
            label: {
                // display: 'none'
            }
        }],
        series: [{
            type: 'radar',
            xField: 'type',
            yField: 'data',
            style: {
                opacity: 0.4
            }
        }],
        listeners: {
            afterrender: function(me) {
                me.on('beforerefresh', function() {
                    if (me.ownerCt.ownerCt.ownerCt.getActiveItem().id !== me.ownerCt.ownerCt.id) {
                        return false;
                    }
                }, me);
            }
        }
    }, {
        flex: 1,
        xtype: 'chart',
        store: EnergyApp.stores.YearStore,
        shadow: false,
        animate: true,
        insetPadding: 30,
        interactions: [{
            type: 'rotate'
        }, {
            type: 'iteminfo',
            listeners: {
                show: function(interaction, item, panel) {
                    EnergyApp.popupYear(item, panel);
                }
            }
        }],
        series: [{
            type: 'pie',
            field: 'data',
	        interactions: ['rotate', 'reset'],
            highlight: false,
            label: {
                field: 'type',
                display: 'rotate',
                contrast: true,
                font: '12px Arial'
            },
            listeners: {
                'labelOverflow': function(label, item) {
                    item.useCallout = true;
                }
            },
            callouts: {
                renderer: function(callout, storeItem) {
                    callout.label.setAttributes({
                        text: storeItem.get('type')
                    }, true);
                },
                filter: function() {
                    return false;
                },
                lines: {
                    'stroke-width': 2,
                    offsetFromViz: 20
                },
                label: {
                    font: '12px Arial',
                    fill: '#fff'
                }
            }
        }],
        listeners: {
            afterrender: function(me) {
                me.on('beforerefresh', function() {
                    if (me.ownerCt.ownerCt.ownerCt.getActiveItem().id !== me.ownerCt.ownerCt.id) {
                        return false;
                    }
                }, me);
            }
        }
    }]
});


if (Ext.is.Phone) {
    EnergyApp.views.ChartView = new Ext.TabPanel({
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
        items: [lineChart1,areaChart, lineChart, yearChart,presentTimeShow]
    });
}
else {
    EnergyApp.views.ChartView = new Ext.TabPanel({
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
        items: [lineChart1,areaChart, lineChart, yearChart,presentTimeShow]// items ends
					
			});
}// else ends
