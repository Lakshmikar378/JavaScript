const x=["sum","gum","rum"];
for(i of x)
{
    console.log(i); 
}
const y=new Map();
y.set("apples",500);
y.set("banna",200);
y.set("grapes",300);
console.log(y.get("apples"));
console.log(y.delete("banna"));
console.log(y.size);
let t="";
y.forEach(function(value,key){
    t+=key+'='+value+"  ";})
    console.log(t);