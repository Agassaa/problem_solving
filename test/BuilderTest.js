let assert = require("assert");
// const ListNode = require("../class/ListNode.js");
let arrayBuilder2 = require("../functions/arrayBuilder.js");
let LLBuilder = require("../functions/LLBuilder.js");
let testFile = require("../data/arrayGenerator.js");
// describe("testing arrayBuilder2 and LLBuilder", function(){
	// function makeTest(input){
	// 	it("testing "+input.toString(), function(){
	// 		let output = arrayBuilder2(LLBuilder(input));
			// for(let i=0;i<arr.length;i++){
			// assert.equal(input,output);
	// 		let equality = isEqual(input,output);
	// 		assert.equal(true,equality);
	// 	});
	// }
	// for(i of testFile.testFunction()) {
	// 	makeTest(i);
	// }
	// function isEqual(input,output){
	// 	if(input==output) return true;
	// 	return false;
	// }

describe("testing arrayBuilder and LinkedList builder functions", function(){
	function moreTest(input){
		it("testing "+input.toString(), function(){
			let output = arrayBuilder2(LLBuilder(input));
			assert.deepEqual(input,output); //OK
		});
	}
	for(i of testFile.arrayGenerator) 
		moreTest(i);
	let edgeCase = [[]];
	moreTest(edgeCase);
});

	