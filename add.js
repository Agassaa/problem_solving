//use strict;
/* class ListNode{
  constructor(val,next){
	  this.val = (val===undefined ? 0 : val);
	  this.next = (next===undefined ? null : next);
  }
}
 class LLBuilder {
  constructor(arr){
	  this.arr = arr;
  }
  buildLinkedlist(){
	  let res = null;
	  for(let i = this.arr.length-1;i>-1;i--){
		  res = new ListNode(this.arr[i],res);
	  }
	  return res;
  }
}
 */
/**
 * @param {LLBuilder} l1
 * @param {LLBuilder} l2
 * @return {LLBuilder}
 */
/*  var addTwoNumbers = function(l1, l2) {
	// let l1 = (new LLBuilder(list1)).buildLinkedlist();
	// let l2 = (new LLBuilder(list2)).buildLinkedlist();
//	console.log(l1,l2);
    let p,n,res;
    let Carry=0;
    let first = true;
    while(l1!=null || l2!=null || Carry!=0){
        let sum=Carry;
        if(l1!=null) {sum+=l1.val; l1=l1.next;}
        if(l2!=null) {sum+=l2.val;l2=l2.next;}
        if(first) {
            p = new ListNode(sum%10,null);
            res = p;
			first=false;
        }
        else {
            n = new ListNode(sum%10,null);
            p.next = n;
			p=n;
        }
        Carry = Math.floor(sum/10);
		console.log(Carry);
    }
    return res;
    
};
 
 */

class ListNode{
  constructor(val,next){
	  this.val = (val===undefined ? 0 : val);
	  this.next = (next===undefined ? null : next);
  }
}
function LLBuilder(arr){
	  let res = null;
	  for(let i = arr.length-1;i>-1;i--){
		  res = new ListNode(arr[i],res);
	  }
	  return res;
}
function arrayBuilder(obj){
	let arr = [];
	while(obj!=null){
		arr.push(obj.val);
		obj = obj.next;
	}
	return arr;
}
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

/* let x1 = ListNode {
  val: 8,
  next: ListNode { val: 2, next: ListNode { val: 9, next: null } }
};
 */
 /* console.log(addTwoNumbers([8,2,9],[3,4,5]));
console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]));
 */
