var moment  = require('moment')
  , argv	= require('optimist').argv
  , fs		= require('fs')
  ;

var text = '';

var amount = (argv.amount) ? argv.amount : 100;
var ts = (argv.ts) ? argv.ts : moment().format('YYYY-MM-DD 00:00:00');
var step = (argv.step) ? argv.step : 1000;

var date = moment(ts);

for(var i=0; i<amount; i++){
	text += 'INSERT INTO device_port_data ';
	text += 'SET device_port_id = 101, ';
	text += 'timestamp = "'+date.format('YYYY-MM-DD HH:mm:ss')+'", ';
	text += 'value='+Math.round(Math.random() * 1000)+';\n';
	date.add('seconds', Math.round(Math.random() * step));
}

fs.writeFile('inserts.sql', text, function(err){
	if(err){
		console.log(err);
	} else {
		console.log('done');
	}
});