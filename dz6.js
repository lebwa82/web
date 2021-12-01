//"use strict"


console.log("start");

for(let i = 1; i < 18; i++) 
{
    let a = document.createElement('p');
    a.textContent = "Созданый в js p number " +i;
    document.body.appendChild(a);
}

document.body.removeChild(document.body.lastChild);

for(let i = 1; i < document.body.childNodes.length; i++) 
{
    console.log(document.body.childNodes[i])
}
console.log(document.body.lastChild.attributes);


function myf1(a=1, b=2, c=3)
{
    console.log(arguments.length);
    console.log(arguments[0], arguments[1]);
}
myf1("a");


console.log("Первый потомок",document.body.firstElementChild);
console.log("Предыдущий элемент",document.body.previousSibling);


var sp1 = document.createElement("span");
var sp2 = document.getElementById("childElement");
var parent_element = sp2.parentNode;
parent_element.insertBefore(sp1, sp2);



console.log(document.body.querySelectorAll("p"));


let elem = document.querySelector('#elem');
elem.classList.add('сам');
console.log(elem)

function scrolfunc()
{
    console.log("scrolling...");
}

window.addEventListener('scroll',scrolfunc);


window.removeEventListener('scroll',scrolfunc);//законментить чтобы увидеть scroll



function stopPropagation(event) 
{
    console.log("You clicked");
    event.stopPropagation();
}

let cliock_elem=document.createElement('p');
cliock_elem.textContent="Кликни меня"
cliock_elem.addEventListener("click", stopPropagation, true);
document.body.appendChild(cliock_elem);


let cliock_elem2=document.createElement('p');
cliock_elem2.textContent="Кликни меня22"
cliock_elem2.addEventListener("click", function(event) {
    console.log("You clicked22");
    event.preventDefault();
}, false);
document.body.appendChild(cliock_elem2);



