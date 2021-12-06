const assert = require('assert');
const testFunction = require('../functions/nonRepeatSubstring.js');

// data
const testArr = [
    ["abcabcbb","abc"],
    ["bbb","b"],
    ["aababccdef","cdef"]
];

describe("test substring",function(){
    // test
    function makeTest(input,expected){
        let output = testFunction(input);
        it(`input: ${input}, expected: ${expected}, output:${output}`,function(){
            assert.equal(output.length,expected.length);
        });
    }

    for(let d of testArr){
        makeTest(d[0],d[1]);
    }
});
