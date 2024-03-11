let myNumber=2;
let text=" ";
while(myNumber!=Infinity)
{
    myNumber=myNumber*myNumber;
    text+=myNumber+"\n";
}
console.log(text);
let myRun=32;
let te=myRun.toString(myRun);
console.log(te);
let n=123;
let y=new Number(123);
console.log(typeof(n),typeof(y));
console.log(y);
let x=9.567;
console.log(x.toExponential(3));
let ex=123;
console.log(ex.toString());
console.log((123).toString());
console.log((100+23).toString());
console.log(x.toFixed(2));
console.log(x.toPrecision(2));
console.log(x.valueOf());