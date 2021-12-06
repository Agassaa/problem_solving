module.exports = function arrayBuilder(obj){
	let arr = [];
	while(obj!=null){
		arr.push(obj.val);
		obj = obj.next;
	}
	return arr;
}
