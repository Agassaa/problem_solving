//can u export object or IIFE function? or maybe json? but we need to generate json first

//we pass 2 testFiles, 1 as a function which will gererate new tests each time called, other one will be a specific array
module.exports.arrayGeneratorFunction = function (){
	let result = [];
	for(let i=0;i<10;i++){
		let lim = Math.ceil(Math.random()*7);
		let arr = [];
		for(let j=0;j<lim;j++){
			arr.push(Math.floor(Math.random()*100));
		}
		result.push(arr);
	}
	return result;
};
module.exports.arrayGenerator = function (){
	let result = [];
	for(let i=0;i<10;i++){
		let lim = Math.ceil(Math.random()*7);
		let arr = [];
		for(let j=0;j<lim;j++){
			arr.push(Math.floor(Math.random()*100));
		}
		result.push(arr);
	}
	return result;
}();

	