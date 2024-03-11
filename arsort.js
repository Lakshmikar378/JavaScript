const fruits=["orange","apple","promogranate","beetroot"];
console.log(fruits.sort());
console.log(fruits.reverse());
const points=[40,100,5,25,10];
console.log(points.sort(function(a,b){return a-b}));
console.log(points.sort(function(a,b){return b-a}));
console.log(points.sort(function(a,b){return 0.5-Math.random()}));
const cars=[{type:"volvo", year:2016},{type:"xuv", year:2000},{type:"verna", year:2014}];
console.log(cars.sort(function(a,b){return a.year-b.year}));