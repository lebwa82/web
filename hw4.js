//'use strict';
let func=function square(a)
{   
    globalThis["m"] = "Hi hI";
    return a*a;
}
console.log(func(5));
console.log(globalThis["m"]);

{
    var a=1;
    let b=2;
    let m='new local m';
    console.log(m);
}
console.log(globalThis["m"]);
delete globalThis["m"];
console.log("a =",a);
//console.log("b =",b); as it was intended - it gives an error

console.log(true==1);
console.log(true===1);


let o={"a":1, "b":2,"c":3,"d":4,"e":6}
console.log(Object.keys(o));
for (let i of Object.keys(o))
{
    console.log(o[i]);
}

let mass=[1,2,3];
console.log(typeof(o),typeof(a), typeof(mass), typeof(Object.keys(o)));

let summ = (mass) =>
{
    let count=0;
    for(let i of mass)
    {
        count=count+i
    }
    return count;
};

console.log(summ(mass));


let one,two,three;
[one,two,three]=mass;
console.log("one = %d, two = %d, three = %d",one,two,three);


let cos=Math.cos(1/2);
console.log("cos of 1/2 is %d", cos);