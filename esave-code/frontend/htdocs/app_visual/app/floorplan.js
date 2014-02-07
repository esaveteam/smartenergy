
	var count =1;
	$(function() {
		$( ".draggable" ).draggable();
	});
	function getDraggableLocation() {
		$( ".draggable" ).each(function(index){
			var position = $(this).position();
			////alert("coordinates of draggable "+index+" x:"+position.left+",y:"+position.top);
		});
		
	}
	function addTVDraggable(image) {
		var newDraggable = $('<div class="ui-widget-content x-draggable ui-draggable draggable" style="background-color:#b0c4de;"  id="item'+count+'" ondblclick="dblclick(this)" onclick="dblclick(this)"></div>');
		$(".demo").append(newDraggable);
		newDraggable.draggable();
		new Ext.util.Draggable('item'+count, { 
				  });
		$('#item'+count).css('backgroundImage','url(images/'+image+'.jpg)');  
		count = count+1;
		//alert('done'+count);
		
	}
	var carousel2;
	carousel2 = new Ext.Carousel({
            direction: 'vertical',
            ui: 'light',
            activeItem: 1,
            defaults: {
                cls: 'card'
            },
            items: [{
                title: 'Tab 1',
                html: '<h1>ui="light"</h1>'
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
	function create(){
		carousel2 = new Ext.Carousel({
            direction: 'vertical',
            ui: 'light',
            activeItem: 1,
            defaults: {
                cls: 'card'
            },
            items: [{
                title: 'Tab 1',
                html: '<h1>ui="light"</h1>'
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
	}
	
	/**
	popup2 creation
	*/
	var curItem = '';
	var popup2 = new Ext.Panel({
	    floating: true,
	    modal: true,
	    id: 'pp',
	    centered: true,
	    padding: 5,
	    width: 250,
	    height: 250,
	    dockedItems: [
	        {
	            xtype: 'toolbar',
	            dock: 'top',
	            title: 'Device Info',
	        },{
	            xtype: 'toolbar',
	            dock: 'bottom',
	            items:[{
						id: 'refreshButton',
						text: 'Refresh',
						ui: 'confirm',
						// handler: this.onAddItemAction,
						scope: this
						},{
						id: 'deleteButton',
						text: 'Delete',
						ui: 'confirm',
						handler: function(){
							 //alert('ok'+curItem);
							 var child = document.getElementById(curItem);
							 child.parentNode.removeChild(child);
						     popup2.hide();
						},
						scope: this
						}]
	        }
	    ],
	        items: [
	            {
	                xtype: 'panel',
	                centered: true,
	                padding: 20,
	                html: '<div class="infobox"></div>'
	            }
	    ]
	});
	
	function dblclick(ele){
		//popup2.show();
		console.log(ele);
		console.log(ele.id);
		console.log($('#'+ele.id));
		var xc, yc;
		$('#'+ele.id).each(function(index){
			var position = $(this).position();
			xc = position.left;
			yc = position.top;
			}
		);
		//alert($('#'+ele.id).find('div').find('ul').find('li').find('#1').html());
		popup2.update([
		              '<ul><li><b>Item: </b>'+ ele.id+ '</li>',
		              '<li><b>Name: </b> ' +$('#'+ele.id).find('div').find('ul').find('li').find('#1')  + '</li>',
		              '<li><b>ID: </b> ' + $('#'+ele.id).find('div').find('ul').find('li').find('#2') + '</li>',
		              '<li><b>Temperature: </b> ' + $('#'+ele.id).find('div').find('ul').find('li').find('#3') + '</li>',
		              '<li><b>Position left : </b> ' + xc + '</li>',
		              '<li><b>Positon Top : </b> ' + yc + '</li>',
		              '</ul>'
		          ].join(''));
		
		var $inner = $('#'+ele.id).find('div').find('ul').find('li');
		/*console.log($inner);
		var obj = new Array();
		obj[0] = inner[0];
		obj[1] = inner[1];
		obj[2] = inner[2];
		obj[3] = inner[3];
		console.log(obj[0]);
		//alert(obj[0]);*/
		//popup2.update('Device : '+ $('#'+ele.id).find('div').find('ul').html());
		popup2.show();
		curItem = ele.id;
	}
	function addElements(ele){
		$( ".draggable" ).each(function(index){
			var position = $(this).position();
			////alert("coordinates of draggable "+index+" x:"+position.left+",y:"+position.top);
			var xc = position.left;
			var yc = position.top;
			console.log($(this));
			console.log($(this).backgroundColor);
			console.log($(this).css("background-color"));
			console.log($(this).css("background-color")=='#b0c4de');
			
			/** 
			code for checking the color of added and unadded elements
			*/
			var colorval = $(this).css("background-color");
			var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');
	console.log(color=='#b0c4de');
			/* following doesnt work with touch 1.0 , like ext.define was not working with touch 2.0
			var user = Ext.create('Device', {
				name : 'abc'				
			});
			console.log(user);
			console.log(user.data);*/
			if(xc!=0 && yc != 0 && color=='#b0c4de'){
				var myData = 
					{ 	
						id: "",
						name: "New",
						port: "",
						status: "",
						operation: "",
						region: "",
						dimensions: "",
						EnergyConsumption: "",
						EnergyEstimates: "",
						YearOfPurchase: "",
						Life: "",
						ElectronicSensorSupervised: "",
						temp1: "500",
						Energy1: "400",
						xcord: xc,
						ycord: yc,
						floorplanId:"1"
					  
					};
				console.log(myData);
				Ext.dispatch({
					controller: 'Devices',				
					action    : 'saveFromPlan',
					data      :  myData				   
				});
				$(this).css('background-color', '#FF6600');
			}
			
		});
	}
	var firstTimeAdd = true;
	function addStoreElements(){
		if(firstTimeAdd){
			load();
			firstTimeAdd = false;
		}
		console.log(App.stores.devices);
		var its = App.stores.devices.data.items;
		for(i =0;i<App.stores.devices.data.items.length;i++){
			var dataObj = its[i].data;
			console.log(dataObj);
			console.log(dataObj.xcord);
			console.log(dataObj.floorplanId);
			if(!(dataObj.floorplanId>=1)){
				var xc =dataObj.xcord;
				var yc =dataObj.ycord;
				console.log(dataObj.ycord);		
				//var newDraggable = $('<div class="ui-widget-content x-draggable ui-draggable draggable" style="position: absolute; top: '+yc+'px; left: '+yc+'px;  background-color: green" id="item'+count+'" ondblclick="dblclick(this)" onclick="dblclick(this)"></div>');
				var newDraggable = $('<div class="ui-widget-content x-draggable ui-draggable draggable" style="position: absolute; top: '+yc+'px; left: '+xc+'px;  background-color: green" id="item'+count+'" ondblclick="dblclick(this)" onclick="dblclick(this)"><ul > <li><b>Item: </b>'+ 'Existing'+ '</li><li><b>Name: </b> ' +dataObj.name  + '</li><li><b>ID: </b> ' + dataObj.id + '</li><li><b>Temperature: </b> ' + dataObj.temp1 + '</li><li><b>Position left : </b> ' + dataObj.xcord + '</li><li><b>Positon Top : </b> ' + dataObj.ycord + '</li></ul></div>');
				$(".demo").append(newDraggable);
				newDraggable.draggable();
				new Ext.util.Draggable('item'+count, { 
				  });
				dataObj.floorplanId = 1;
				count = count+1;	
			}
		}		
	}
	
	function load(){
		console.log(App.stores.devices);
		var its = App.stores.devices.data.items;
		for(i =0;i<App.stores.devices.data.items.length;i++){
			var dataObj = its[i].data;
			console.log(dataObj);
			console.log(dataObj.xcord);
			console.log(dataObj.floorplanId);
			if(!(dataObj.floorplanId==1)){
				var xc =dataObj.xcord;
				var yc =dataObj.ycord;
				console.log(dataObj.ycord);		
				var newDraggable = $('<div class="ui-widget-content x-draggable ui-draggable draggable" style="position: absolute; top: '+yc+'px; left: '+yc+'px;  background-color: green" id="item'+count+'" ondblclick="dblclick(this)" onclick="dblclick(this)"></div>');
				$(".demo").append(newDraggable);
				newDraggable.draggable();
				new Ext.util.Draggable('item'+count, { 
				  });
				dataObj.floorplanId = 1;
				count = count+1;	
			}
		}
		
	}
	
	
	function getFrmDipali() {
		popup2.show();
		/*Ext.Ajax.request({
                	url: 'http://kc-sce-451-01:8081/EnergyWSService/rest/json/getDevices',
				    timeout: 300,
                    success: function(response, opts) {
                      	var data = Ext.decode('{"items":[{"year":1960,"coal":395399.56475,"gas":190705.995,"nuclear":0,"crude-oil":236596.64171,"renewable":112809.00809},{"year":1961,"coal":382454.75924,"gas":191532.96,"nuclear":0,"crude-oil":232986.32736,"renewable":118021.28179},{"year":1962,"coal":427177.48248,"gas":201249.54,"nuclear":0,"crude-oil":240080.5629,"renewable":125563.51073},{"year":1963,"coal":442464.60208,"gas":211348.384,"nuclear":0,"crude-oil":254277.08876,"renewable":112682.24678},{"year":1964,"coal":459000.38492,"gas":230315.626,"nuclear":0,"crude-oil":259425.6982,"renewable":137991.94671},{"year":1965,"coal":533141.71293,"gas":236949.372,"nuclear":0,"crude-oil":264449.23341,"renewable":121887.68231},{"year":1966,"coal":583457.25058,"gas":240755.112,"nuclear":0,"crude-oil":275764.04301,"renewable":121237.5923},{"year":1967,"coal":580163.21251,"gas":262055.31785,"nuclear":0,"crude-oil":280210.70496,"renewable":144383.67614},{"year":1968,"coal":618335.19404,"gas":296689.54871,"nuclear":0,"crude-oil":309695.65708,"renewable":129672.92731},{"year":1969,"coal":641465.68103,"gas":310821.65396,"nuclear":0,"crude-oil":340446.84322,"renewable":131856.30007},{"year":1970,"coal":675603.45796,"gas":307750.42865,"nuclear":0,"crude-oil":355271.82735,"renewable":132470.67899},{"year":1971,"coal":626054.43189,"gas":294838.04959,"nuclear":0,"crude-oil":367407.10397,"renewable":158182.15743},{"year":1972,"coal":669734.27741,"gas":287099.9791,"nuclear":0,"crude-oil":407919.15922,"renewable":164946.36347},{"year":1973,"coal":688650.48002,"gas":279958.45357,"nuclear":3425.41732,"crude-oil":453620.12726,"renewable":181706.0878},{"year":1974,"coal":653405.3813,"gas":282454.23501,"nuclear":70194.74337,"crude-oil":479437.68785,"renewable":166733.7212},{"year":1975,"coal":640063.3482,"gas":271747.03769,"nuclear":29978.20096,"crude-oil":490556.92642,"renewable":184700.5859},{"year":1976,"coal":632096.05751,"gas":232758.20108,"nuclear":46557.16171,"crude-oil":536318.55479,"renewable":160993.5888},{"year":1977,"coal":629412.22386,"gas":248715.35834,"nuclear":210228.14271,"crude-oil":577896.7178,"renewable":174751.4713},{"year":1978,"coal":577579.62457,"gas":244968.57112,"nuclear":249787.85498,"crude-oil":582989.27555,"renewable":148340.85956},{"year":1979,"coal":670208.11302,"gas":291484.71443,"nuclear":240321.01556,"crude-oil":498479.36219,"renewable":190737.09334},{"year":1980,"coal":661023.38559,"gas":278393.93149,"nuclear":256309.57375,"crude-oil":457915.80948,"renewable":238766.32115},{"year":1981,"coal":629956.53736,"gas":281046.10694,"nuclear":260780.22739,"crude-oil":469345.7544,"renewable":213354.97157},{"year":1982,"coal":511059.29537,"gas":253486.91864,"nuclear":306733.89275,"crude-oil":458644.18445,"renewable":265547.88386},{"year":1983,"coal":532595.73617,"gas":230002.635,"nuclear":274203.26975,"crude-oil":430629.46084,"renewable":282179.36495},{"year":1984,"coal":584607.29616,"gas":239653.44849,"nuclear":262517.72609,"crude-oil":432938.20334,"renewable":288127.14733},{"year":1985,"coal":662890.45101,"gas":227794.74257,"nuclear":152028.23538,"crude-oil":427160.31384,"renewable":248632.50739},{"year":1986,"coal":660525.28099,"gas":210228.72528,"nuclear":122308.13523,"crude-oil":446133.36336,"renewable":215784.39808},{"year":1987,"coal":660678.1119,"gas":214613.43552,"nuclear":117449.57981,"crude-oil":481308.51638,"renewable":233513.00286},{"year":1988,"coal":652716.87286,"gas":243209.37938,"nuclear":137622.87628,"crude-oil":484513.63026,"renewable":216598.95204},{"year":1989,"coal":682145.01784,"gas":253593.16571,"nuclear":121962.00556,"crude-oil":508596.00235,"renewable":304354.02158},{"year":1990,"coal":682495.59599,"gas":252456.78011,"nuclear":127533.01532,"crude-oil":507417.73505,"renewable":253290.39922},{"year":1991,"coal":723921.24506,"gas":261816.24338,"nuclear":166429.69431,"crude-oil":506649.6107,"renewable":257205.84685},{"year":1992,"coal":775653.00659,"gas":288123.16631,"nuclear":203110.55236,"crude-oil":513547.38691,"renewable":257603.30483},{"year":1993,"coal":812948.21092,"gas":302671.50121,"nuclear":187216.2058,"crude-oil":522866.09393,"renewable":269518.36369},{"year":1994,"coal":773803.65855,"gas":299322.0146,"nuclear":214054.44107,"crude-oil":550525.75035,"renewable":334006.32473},{"year":1995,"coal":828276.90677,"gas":332399.50782,"nuclear":218044.84689,"crude-oil":560492.07735,"renewable":322121.5843},{"year":1996,"coal":890742.24513,"gas":337782.43257,"nuclear":312018.24011,"crude-oil":547158.11834,"renewable":323725.23771},{"year":1997,"coal":867264.36585,"gas":337453.4705,"nuclear":310335.59898,"crude-oil":533832.59064,"renewable":300024.82071},{"year":1998,"coal":856478.77137,"gas":341975.56902,"nuclear":300698.42388,"crude-oil":527423.91142,"renewable":317354.82314},{"year":1999,"coal":866511.91385,"gas":349080.49546,"nuclear":322825.5173,"crude-oil":544575.14195,"renewable":290392.10999},{"year":2000,"coal":904181.16526,"gas":368472.40368,"nuclear":327142.74353,"crude-oil":567779.55723,"renewable":263462.36695},{"year":2001,"coal":842336.77649,"gas":344022.93782,"nuclear":317018.80891,"crude-oil":556149.05477,"renewable":252824.47334},{"year":2002,"coal":845999.04075,"gas":390080.85551,"nuclear":332650.02129,"crude-oil":583518.10028,"renewable":253577.19155},{"year":2003,"coal":873734.52828,"gas":361161.012,"nuclear":330105.52721,"crude-oil":580339.25608,"renewable":286176.88988},{"year":2004,"coal":853917.40344,"gas":392229.54308,"nuclear":329866.3719,"crude-oil":638461.02334,"renewable":293288.07035},{"year":2005,"coal":890098.23431,"gas":363435.78844,"nuclear":330760.91123,"crude-oil":631441.45079,"renewable":279771.69308},{"year":2006,"coal":886677.97395,"gas":402054.09186,"nuclear":333024.19786,"crude-oil":677820.42847,"renewable":266420.97236},{"year":2007,"coal":888435.68584,"gas":431329.67132,"nuclear":359898.9566,"crude-oil":668493.97089,"renewable":228746.1789},{"year":2008,"coal":842826.40963,"gas":420531.63411,"nuclear":407590.07637,"crude-oil":636013.99944,"renewable":237334.15232},{"year":2009,"coal":630968.57513,"gas":473949.01376,"nuclear":415431.49384,"crude-oil":593024.80261,"renewable":272858.17053}]}');
                   		var ndata = Ext.decode('{"items":[{"name":"test113","location":"451","model":"panasonic"},{"name":"test112","creation_date":"03/23/2012","device_dataid":"22481","device_hexa_code":"1122","isenabled":"Y","createdby":"WSCLIENT","model":"test12"},{"name":"test3","location":"test","model":"test","creation_date":"03/16/2012","device_dataid":"38","device_hexa_code":null},{"name":"test2","location":"test","model":"test","devtype":"test","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/16/2012","device_dataid":"39","device_hexa_code":null},{"name":"device-104","location":"room 3","model":"xyz-124","devtype":"coller","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/16/2012","device_dataid":"35","device_hexa_code":null},{"name":"device-103","location":"room 3","model":"xyz-124","devtype":"coller","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/16/2012","device_dataid":"33","device_hexa_code":null},{"name":"device-102","location":"room 3","model":"xyz-124","devtype":"coller","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/16/2012","device_dataid":"32","device_hexa_code":null},{"name":"device-101","location":"room 3","model":"xyz-123","devtype":"coller","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/16/2012","device_dataid":"31","device_hexa_code":null},{"name":"laptop2","location":"451","model":"1","devtype":"computer","isenabled":"y","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"30","device_hexa_code":null},{"name":"fsdfdsf","location":"Hall","model":"TV","devtype":"Electronic","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"27","device_hexa_code":null},{"name":"test1","location":"test","model":"test1","devtype":"test","isenabled":"y","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"37","device_hexa_code":null},{"name":"laptop1","location":"451","model":"1","devtype":"computer","isenabled":"y","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"28","device_hexa_code":null},{"name":"TV1","location":"Hall","model":"TV","devtype":"Electronic","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"25","device_hexa_code":null},{"name":"TV","location":"Hall","model":"TV","model":"test","devtype":"test","isenabled":"t","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"13","device_hexa_code":null},{"name":"","location":"","model":"","devtype":"","isenabled":" ","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"14","device_hexa_code":null},{"name":"device 1","location":"test","model":"test","devtype":"test","isenabled":"t","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"10","device_hexa_code":null},{"name":"Refrigerator - 1","location":"home","model":null,"devtype":"Cooling","isenabled":"t","createdby":"Client","creation_date":"01/06/2012","device_dataid":"20606","device_hexa_code":null}]}');
                    
                    },
                    failure: function(response, opts) {
                    	////alert('Request to Server Failed');
                    	var data = Ext.decode('{"items":[{"year":1960,"coal":395399.56475,"gas":190705.995,"nuclear":0,"crude-oil":236596.64171,"renewable":112809.00809},{"year":1961,"coal":382454.75924,"gas":191532.96,"nuclear":0,"crude-oil":232986.32736,"renewable":118021.28179},{"year":1962,"coal":427177.48248,"gas":201249.54,"nuclear":0,"crude-oil":240080.5629,"renewable":125563.51073},{"year":1963,"coal":442464.60208,"gas":211348.384,"nuclear":0,"crude-oil":254277.08876,"renewable":112682.24678},{"year":1964,"coal":459000.38492,"gas":230315.626,"nuclear":0,"crude-oil":259425.6982,"renewable":137991.94671},{"year":1965,"coal":533141.71293,"gas":236949.372,"nuclear":0,"crude-oil":264449.23341,"renewable":121887.68231},{"year":1966,"coal":583457.25058,"gas":240755.112,"nuclear":0,"crude-oil":275764.04301,"renewable":121237.5923},{"year":1967,"coal":580163.21251,"gas":262055.31785,"nuclear":0,"crude-oil":280210.70496,"renewable":144383.67614},{"year":1968,"coal":618335.19404,"gas":296689.54871,"nuclear":0,"crude-oil":309695.65708,"renewable":129672.92731},{"year":1969,"coal":641465.68103,"gas":310821.65396,"nuclear":0,"crude-oil":340446.84322,"renewable":131856.30007},{"year":1970,"coal":675603.45796,"gas":307750.42865,"nuclear":0,"crude-oil":355271.82735,"renewable":132470.67899},{"year":1971,"coal":626054.43189,"gas":294838.04959,"nuclear":0,"crude-oil":367407.10397,"renewable":158182.15743},{"year":1972,"coal":669734.27741,"gas":287099.9791,"nuclear":0,"crude-oil":407919.15922,"renewable":164946.36347},{"year":1973,"coal":688650.48002,"gas":279958.45357,"nuclear":3425.41732,"crude-oil":453620.12726,"renewable":181706.0878},{"year":1974,"coal":653405.3813,"gas":282454.23501,"nuclear":70194.74337,"crude-oil":479437.68785,"renewable":166733.7212},{"year":1975,"coal":640063.3482,"gas":271747.03769,"nuclear":29978.20096,"crude-oil":490556.92642,"renewable":184700.5859},{"year":1976,"coal":632096.05751,"gas":232758.20108,"nuclear":46557.16171,"crude-oil":536318.55479,"renewable":160993.5888},{"year":1977,"coal":629412.22386,"gas":248715.35834,"nuclear":210228.14271,"crude-oil":577896.7178,"renewable":174751.4713},{"year":1978,"coal":577579.62457,"gas":244968.57112,"nuclear":249787.85498,"crude-oil":582989.27555,"renewable":148340.85956},{"year":1979,"coal":670208.11302,"gas":291484.71443,"nuclear":240321.01556,"crude-oil":498479.36219,"renewable":190737.09334},{"year":1980,"coal":661023.38559,"gas":278393.93149,"nuclear":256309.57375,"crude-oil":457915.80948,"renewable":238766.32115},{"year":1981,"coal":629956.53736,"gas":281046.10694,"nuclear":260780.22739,"crude-oil":469345.7544,"renewable":213354.97157},{"year":1982,"coal":511059.29537,"gas":253486.91864,"nuclear":306733.89275,"crude-oil":458644.18445,"renewable":265547.88386},{"year":1983,"coal":532595.73617,"gas":230002.635,"nuclear":274203.26975,"crude-oil":430629.46084,"renewable":282179.36495},{"year":1984,"coal":584607.29616,"gas":239653.44849,"nuclear":262517.72609,"crude-oil":432938.20334,"renewable":288127.14733},{"year":1985,"coal":662890.45101,"gas":227794.74257,"nuclear":152028.23538,"crude-oil":427160.31384,"renewable":248632.50739},{"year":1986,"coal":660525.28099,"gas":210228.72528,"nuclear":122308.13523,"crude-oil":446133.36336,"renewable":215784.39808},{"year":1987,"coal":660678.1119,"gas":214613.43552,"nuclear":117449.57981,"crude-oil":481308.51638,"renewable":233513.00286},{"year":1988,"coal":652716.87286,"gas":243209.37938,"nuclear":137622.87628,"crude-oil":484513.63026,"renewable":216598.95204},{"year":1989,"coal":682145.01784,"gas":253593.16571,"nuclear":121962.00556,"crude-oil":508596.00235,"renewable":304354.02158},{"year":1990,"coal":682495.59599,"gas":252456.78011,"nuclear":127533.01532,"crude-oil":507417.73505,"renewable":253290.39922},{"year":1991,"coal":723921.24506,"gas":261816.24338,"nuclear":166429.69431,"crude-oil":506649.6107,"renewable":257205.84685},{"year":1992,"coal":775653.00659,"gas":288123.16631,"nuclear":203110.55236,"crude-oil":513547.38691,"renewable":257603.30483},{"year":1993,"coal":812948.21092,"gas":302671.50121,"nuclear":187216.2058,"crude-oil":522866.09393,"renewable":269518.36369},{"year":1994,"coal":773803.65855,"gas":299322.0146,"nuclear":214054.44107,"crude-oil":550525.75035,"renewable":334006.32473},{"year":1995,"coal":828276.90677,"gas":332399.50782,"nuclear":218044.84689,"crude-oil":560492.07735,"renewable":322121.5843},{"year":1996,"coal":890742.24513,"gas":337782.43257,"nuclear":312018.24011,"crude-oil":547158.11834,"renewable":323725.23771},{"year":1997,"coal":867264.36585,"gas":337453.4705,"nuclear":310335.59898,"crude-oil":533832.59064,"renewable":300024.82071},{"year":1998,"coal":856478.77137,"gas":341975.56902,"nuclear":300698.42388,"crude-oil":527423.91142,"renewable":317354.82314},{"year":1999,"coal":866511.91385,"gas":349080.49546,"nuclear":322825.5173,"crude-oil":544575.14195,"renewable":290392.10999},{"year":2000,"coal":904181.16526,"gas":368472.40368,"nuclear":327142.74353,"crude-oil":567779.55723,"renewable":263462.36695},{"year":2001,"coal":842336.77649,"gas":344022.93782,"nuclear":317018.80891,"crude-oil":556149.05477,"renewable":252824.47334},{"year":2002,"coal":845999.04075,"gas":390080.85551,"nuclear":332650.02129,"crude-oil":583518.10028,"renewable":253577.19155},{"year":2003,"coal":873734.52828,"gas":361161.012,"nuclear":330105.52721,"crude-oil":580339.25608,"renewable":286176.88988},{"year":2004,"coal":853917.40344,"gas":392229.54308,"nuclear":329866.3719,"crude-oil":638461.02334,"renewable":293288.07035},{"year":2005,"coal":890098.23431,"gas":363435.78844,"nuclear":330760.91123,"crude-oil":631441.45079,"renewable":279771.69308},{"year":2006,"coal":886677.97395,"gas":402054.09186,"nuclear":333024.19786,"crude-oil":677820.42847,"renewable":266420.97236},{"year":2007,"coal":888435.68584,"gas":431329.67132,"nuclear":359898.9566,"crude-oil":668493.97089,"renewable":228746.1789},{"year":2008,"coal":842826.40963,"gas":420531.63411,"nuclear":407590.07637,"crude-oil":636013.99944,"renewable":237334.15232},{"year":2009,"coal":630968.57513,"gas":473949.01376,"nuclear":415431.49384,"crude-oil":593024.80261,"renewable":272858.17053}]}');
						var ndata = Ext.decode('{"items":[{"name":"test113","location":"451","model":"panasonic"},{"name":"test112","creation_date":"03/23/2012","device_dataid":"22481","device_hexa_code":"1122","isenabled":"Y","createdby":"WSCLIENT","model":"test12"},{"name":"test3","location":"test","model":"test","creation_date":"03/16/2012","device_dataid":"38","device_hexa_code":null},{"name":"test2","location":"test","model":"test","devtype":"test","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/16/2012","device_dataid":"39","device_hexa_code":null},{"name":"device-104","location":"room 3","model":"xyz-124","devtype":"coller","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/16/2012","device_dataid":"35","device_hexa_code":null},{"name":"device-103","location":"room 3","model":"xyz-124","devtype":"coller","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/16/2012","device_dataid":"33","device_hexa_code":null},{"name":"device-102","location":"room 3","model":"xyz-124","devtype":"coller","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/16/2012","device_dataid":"32","device_hexa_code":null},{"name":"device-101","location":"room 3","model":"xyz-123","devtype":"coller","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/16/2012","device_dataid":"31","device_hexa_code":null},{"name":"laptop2","location":"451","model":"1","devtype":"computer","isenabled":"y","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"30","device_hexa_code":null},{"name":"fsdfdsf","location":"Hall","model":"TV","devtype":"Electronic","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"27","device_hexa_code":null},{"name":"test1","location":"test","model":"test1","devtype":"test","isenabled":"y","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"37","device_hexa_code":null},{"name":"laptop1","location":"451","model":"1","devtype":"computer","isenabled":"y","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"28","device_hexa_code":null},{"name":"TV1","location":"Hall","model":"TV","devtype":"Electronic","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"25","device_hexa_code":null},{"name":"TV","location":"Hall","model":"TV","model":"test","devtype":"test","isenabled":"t","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"13","device_hexa_code":null},{"name":"","location":"","model":"","devtype":"","isenabled":" ","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"14","device_hexa_code":null},{"name":"device 1","location":"test","model":"test","devtype":"test","isenabled":"t","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"10","device_hexa_code":null},{"name":"Refrigerator - 1","location":"home","model":null,"devtype":"Cooling","isenabled":"t","createdby":"Client","creation_date":"01/06/2012","device_dataid":"20606","device_hexa_code":null}]}');
						////alert(ndata.items);					
						App.stores.devicesJson.loadData(ndata.items);
						var its = App.stores.devicesJson.data.items;
						for(i =0;i<App.stores.devicesJson.data.items.length;i++){
							var dataObj = its[i].data;
							console.log(dataObj);
							console.log(dataObj.xcord);
							dataObj.xcord = 125;
							dataObj.ycord = 125 * count;
							console.log(dataObj.floorplanId);
							if(!(dataObj.floorplanId>=1)){
								var xc =dataObj.xcord;
								var yc =dataObj.ycord;
								console.log(dataObj.ycord);		
								var newDraggable = $('<div class="ui-widget-content x-draggable ui-draggable draggable" style="position: absolute; top: '+yc+'px; left: '+yc+'px;  background-color: green" id="item'+count+'" ondblclick="dblclick(this)"></div>');
								$(".demo").append(newDraggable);
								newDraggable.draggable();
								new Ext.util.Draggable('item'+count, { 
								  });
								dataObj.floorplanId = 1;
								count = count+1;	
							}
						}
                     
                    },
                    listeners: {
                    	beforerequest: function(connection, opts,eopts){
                    		////alert('Request to Server ');
                    	},
                    	requestcomplete: function(connection, response, objects, eopts){
                    		////alert('Request to Server Completed');
                    	},
                    	
                    	beforeexception: function(connection,response, opts,eopts){
                    		////alert('Request to Server Exception!!');
                    	}
                    }
                }); */
		var ndata = Ext.decode('{"items":[{"name":"test113","location":"451","model":"panasonic"},{"name":"test112","creation_date":"03/23/2012","device_dataid":"22481","device_hexa_code":"1122","isenabled":"Y","createdby":"WSCLIENT","model":"test12"},{"name":"test3","location":"test","model":"test","creation_date":"03/16/2012","device_dataid":"38","device_hexa_code":null},{"name":"test2","location":"test","model":"test","devtype":"test","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/16/2012","device_dataid":"39","device_hexa_code":null},{"name":"device-104","location":"room 3","model":"xyz-124","devtype":"coller","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/16/2012","device_dataid":"35","device_hexa_code":null},{"name":"device-103","location":"room 3","model":"xyz-124","devtype":"coller","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/16/2012","device_dataid":"33","device_hexa_code":null},{"name":"device-102","location":"room 3","model":"xyz-124","devtype":"coller","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/16/2012","device_dataid":"32","device_hexa_code":null},{"name":"device-101","location":"room 3","model":"xyz-123","devtype":"coller","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/16/2012","device_dataid":"31","device_hexa_code":null},{"name":"laptop2","location":"451","model":"1","devtype":"computer","isenabled":"y","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"30","device_hexa_code":null},{"name":"fsdfdsf","location":"Hall","model":"TV","devtype":"Electronic","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"27","device_hexa_code":null},{"name":"test1","location":"test","model":"test1","devtype":"test","isenabled":"y","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"37","device_hexa_code":null},{"name":"laptop1","location":"451","model":"1","devtype":"computer","isenabled":"y","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"28","device_hexa_code":null},{"name":"TV1","location":"Hall","model":"TV","devtype":"Electronic","isenabled":"Y","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"25","device_hexa_code":null},{"name":"TV","location":"Hall","model":"TV","model":"test","devtype":"test","isenabled":"t","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"13","device_hexa_code":null},{"name":"","location":"","model":"","devtype":"","isenabled":" ","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"14","device_hexa_code":null},{"name":"device 1","location":"test","model":"test","devtype":"test","isenabled":"t","createdby":"WSCLIENT","creation_date":"03/09/2012","device_dataid":"10","device_hexa_code":null},{"name":"Refrigerator - 1","location":"home","model":null,"devtype":"Cooling","isenabled":"t","createdby":"Client","creation_date":"01/06/2012","device_dataid":"20606","device_hexa_code":null}]}');
		////alert(ndata.items);					
		App.stores.devicesJson.loadData(ndata.items);
		var its = App.stores.devicesJson.data.items;
		for(i =0;i<App.stores.devicesJson.data.items.length;i++){
			var dataObj = its[i].data;
			console.log(dataObj);
			console.log(dataObj.xcord);
			dataObj.xcord = 125;
			dataObj.ycord = 125 + (i*10);
			console.log(dataObj.floorplanId);
			if(!(dataObj.floorplanId>=1)){
				var xc =dataObj.xcord;
				var yc =dataObj.ycord;
				console.log(dataObj.ycord);		
				var newDraggable = $('<div class="ui-widget-content x-draggable ui-draggable draggable" style="position: absolute; top: '+yc+'px; left: '+xc+'px;  background-color: green" id="item'+count+'" ondblclick="dblclick(this)" onclick="dblclick(this)"> <div id="itemin'+count+'"><ul > <li id="1"><b>Item: </b>'+ 'Existing'+ '</li><li id="2"><b>Name: </b> ' +dataObj.name  + '</li><li id ="3"><b>ID: </b> ' + dataObj.id + '</li><li id ="4"><b>Temperature: </b> ' + dataObj.temp1 + '</li><li id ="5"><b>Position left : </b> ' + dataObj.xcord + '</li><li id ="6"><b>Positon Top : </b> ' + dataObj.ycord + '</li></ul></div></div>');
				$(".demo").append(newDraggable);
				newDraggable.draggable();
				new Ext.util.Draggable('item'+count, { 
				  });
				dataObj.floorplanId = 1;				
				$('#'+'itemin'+count).hide();
				count = count+1;
			}
		}
		popup2.hide();
	}
	