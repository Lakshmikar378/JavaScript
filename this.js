let person;
function person(first,last,age,eye){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eye=eye;
}
const myfather=new person("john","doe","22","brown");
console.log("my fathe is "+myfather.age+".");