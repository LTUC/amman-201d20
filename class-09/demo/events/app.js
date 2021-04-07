'use strict';

let parent =document.getElementById('container');


let button=document.getElementById('btn');

button.addEventListener('click',makeParagraph);

function makeParagraph() {
    let paragraph=document.createElement('p');
    parent.appendChild(paragraph);
    paragraph.textContent="Hello form jaascript";
}


let secondButton=document.getElementById('btn2');

secondButton.addEventListener('mouseover',function () {
    
    let paragraph=document.createElement('p');

    parent.appendChild(paragraph);
    
    paragraph.textContent="from the second add event listener";
})


// first get the element by ID
let paragraphElement= document.getElementById('paragraph1');


// add event listener
paragraphElement.addEventListener('mouseout',changingText);

// create the function that runs when we click on paragraph

function changingText() {
    paragraphElement.textContent='changed text from javascript';

}

