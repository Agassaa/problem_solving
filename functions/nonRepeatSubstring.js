// https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/
// write naive tester function, save in git new branch
// how to resolve Git conflicts using VSCode.
// git ignore automatic?
// create new folder and copy node modules there to run this function. Upload leetcode functions' to git.
// fixed BuilderTest.js bug, renamed data/testFile.js to arrayGenerator.js. How to declare it on git?   
module.exports = function(s) {
    let set = [],queue = "",result="",max=0;
    for(c of s) {
        if(set[c]==true) queue = queue.slice(queue.indexOf(c)+1,queue.length);
        else set[c]=true;
        queue+=c;
        if(max<queue.length){
            max=queue.length;
            result = queue;
        }

//        console.debug(queue);
    }
    return result;
};
