// https://leetcode.com/problems/add-two-numbers/

const ListNode = require('./class/ListNode');
const LLBuilder = require("./functions/LLBuilder");
const arrayBuilder = require('./functions/arrayBuilder');

var addTwoNumbers = function(list1, list2) {
	l1 = arrayBuilder(list1);
	l2 = arrayBuilder(list2);
	let l3 = [];
    let Carry=0;
    while(l1.length!=0 || l2.length!=0 || Carry!=0){
        let sum=Carry;
        if(l1.length!=0) {sum+=l1.shift();}
        if(l2.length!=0) {sum+=l2.shift();}
    		l3.push(sum%10);
        Carry = Math.floor(sum/10);
    }
	return LLBuilder(l3);
};

x1 = LLBuilder([8,2,9]);
x2 = LLBuilder([3,4,5]);
console.log(addTwoNumbers(x1,x2));

 /* console.log(addTwoNumbers([8,2,9],[3,4,5]));
console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]));
 */

