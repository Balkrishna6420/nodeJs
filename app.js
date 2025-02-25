require("./xyz.js");
//const {x,calculateSum}=require("./sum.js")
const{calculateSum,calculateMultiply}=require("./calculate");
const data=require("./data.json");
console.log(data);
var  name="BalKrishna";
var a=20;
var b=45;

calculateSum(a,b);
calculateMultiply(a,b);


console.log(globalThis=== global);
