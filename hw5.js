"use strict"

{
let rectangle = {
    a: 1,
    b: 1,

    area()
    {
        return this.a * this.b;
    },

    perimeter()
    {
        return this.a + this.b
    }
}

let board = Object.create(rectangle);
console.log("board.a=", board.a);
console.log("board.perimeter =",board.perimeter());

rectangle.a=5;
console.log("board.a=", board.a);

board.a=3;
console.log("board.a=", board.a);

}


class Rectangle {
    constructor(x,y,z)
    {
        this.a = x;
        this.b = y;
        this.c = z;
    }
    area()
    {
        return this.a * this.b * this.c;
    }
}

let black_board = new Rectangle(3,4,5);
console.log("black_board.a =", black_board.a);
console.log("black_board.area =", black_board.area());




let ahahahaha = {
    len: 9
}

let ahah = {
    size: 4
}

Object.setPrototypeOf(ahah,ahahahaha);
console.log(Object.getPrototypeOf(ahah) === ahahahaha);


class square extends Rectangle{
    constructor(x)
    {
        super(x,x,x);
    }
}

let s = new square(3);
console.log("s.area =", s.area());
console.log("s.b =", s.b);


let Object1={};
Object.defineProperty(Object1, 'name', {
    value: Object1,
    writable: false,
    enumerable: false,
    configurable: true,
});

let Object2={};
Object.defineProperty(Object2, "name",{
    enumerable: true,
    configurable: true,
    set: function(x) {
        this.who = x; 
        //this.name = x; //выдает ошибку почему-то 
        console.log("a =", x);
    }
});

Object2.name="number2";
console.log("Object2.who =", Object2.who);

function fruit(price) 
{
    this.price = price;
}
  
function apple(price) 
{
    fruit.call(this, price);
}
let ap = new apple(25);
console.log("apple.price = ", ap.price);

String.prototype.myfunc = function() 
{
    console.log("myfunc");
}
let stroka = "";
stroka.myfunc();