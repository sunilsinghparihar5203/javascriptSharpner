"use strict"
let getA = a =>a;
console.log(getA(1))
let square = (a) => {return a*a}
console.log(square(2))


let mult = (a,b)=> {return a*b}

console.log(mult(4,5))


var x = function(){
  this.val = 1
  setTimeout(() =>{
    this.val++;
    console.log(this.val)
  },1)
};

var xx = new x()


var y = (...n)=>{
  console.log(n[0])
}

x(1,2,3);

