#!/usr/bin/env node

const {get} = require('http');


const sym = process.argv[2];



const getData = (sym) => {
get(`http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters={"Normalized":false,"NumberOfDays":365,"DataPeriod":"Day","Elements":[{"Symbol":"${sym}","Type":"price","Params":["c"]}]}`, (res) => {
	let raw = '';
	res.on('data', (buff) => {
		raw += buff.toString();
	})

	res.on('end', () => {
		let sum = 0;
		let values = JSON.parse(raw).Elements[0].DataSeries.close.values;
		for (i = 0; i < values.length; i++){
			sum += i;
		}
		let avg = sum/values.length;
		// console.log(JSON.parse(raw).Elements[0].DataSeries.close.values);
		console.log("$",avg);
	})

})
}

getData(sym);
