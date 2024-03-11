let text=" ";
let x=0;
while(x<10){
    if(x===5){
        continue;
    }
    text+="\nThe number is "+x+" ";
    x++;
}
console.log(text+" ");