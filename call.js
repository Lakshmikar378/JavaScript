const person1={
    firstName:"john",
    lastName:"Doe"
}
const person={fullName:function(){
    return this.firstName+" "+ this.lastName;
}
}
console.log(person.fullName.apply(person1));