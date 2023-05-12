console.log("this is tutorial 53");

function greet(name,greetText="Greetings from JavaScript"){
    let name1="Name1";  //local scope me hai
    console.log(name+" is a good boy");
    console.log(greetText+" "+name);
}

function sum(a,b,c){
    let d=a+b+c;
    return d;
    //this line will never execute
    //console.log("functionis returned")
}


let name="Vivek";
let name1="Sagar";
let name2="Vishal";
let name3="Nandan";
let greetText1="Good Morning";
greet(name, greetText1);
greet(name1, greetText1);
greet(name2, greetText1);
// let returnVal=greet(name3);
// console.log(returnVal);
let returnVal=sum(1, 2, 3);
console.log(returnVal);
// console.log(name+" is a good boy");
// console.log(name1+" is a good boy");
// console.log(name2+" is a good boy");
// console.log(name3+" is a good boy");