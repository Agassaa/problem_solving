let assert = require("assert");
// const ListNode = require("../class/ListNode.js");
let arrayBuilder2 = require("../functions/arrayBuilder.js");
let LLBuilder = require("../functions/LLBuilder.js");
let testFile = require("../data/arrayGenerator.js");
describe("testing arrayBuilder and LinkedList builder functions", function(){
	function makeTest(input){
		it("testing "+input.toString(), function(){
			let output = arrayBuilder2(LLBuilder(input));
			assert.deepEqual(input,output);
		});
	}
	for(i of testFile.arrayGeneratorFunction()) {
		makeTest(i);
	}
});
describe("more tests", function(){
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

	