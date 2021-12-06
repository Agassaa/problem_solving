const ListNode2 = require("../class/ListNode.js");
module.exports = function LLBuilder(arr){
	  let res = null;
	  for(let i = arr.length-1;i>-1;i--){
		  res = new ListNode2(arr[i],res);
	  }
	  return res;
}
