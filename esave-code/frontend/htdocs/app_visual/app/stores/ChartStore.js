EnergyApp.stores.ChartStore = new Ext.data.JsonStore({
    root: 'items',
    idProperty: 'year',
    fields: [{
        name: 'year',
        type: 'string'
    }, {
        name: 'device',
        type: 'int'
    }, {
        name: 'nuclear',
        type: 'int'
    }, {
        name: 'crude-oil',
        type: 'int'
    }, {
        name: 'gas',
        type: 'int'
    }, {
        name: 'renewable',
        type: 'int'
    }]
});

EnergyApp.stores.ZigbeeStore = new Ext.data.JsonStore({
	root: 'items',
    idProperty: 'time',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'time',
        type: 'String'
    }, {
        name: 'device',
        type: 'int'
    }/*, {
        name: 'nuclear',
        type: 'int'
    }, {
        name: 'crude-oil',
        type: 'int'
    }, {
        name: 'gas',
        type: 'int'
    }, {
        name: 'renewable',
        type: 'int'
    }*/]
});

EnergyApp.stores.YearStore = new Ext.data.JsonStore({
    fields: ['type', 'data']
});