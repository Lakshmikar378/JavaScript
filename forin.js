const person={fname:"lakshmikar",lname:"reddy",age:22};
let text=" ";
for(let x in person){
    text+=person[x]+" ";
}
console.log("The person name and age is "+text);