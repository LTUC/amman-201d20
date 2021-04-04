'use strict';


// Objects
/* 
properties:
key:value
name:batool

age:25

methods:
eat:function
sleep:function


phones:

model:A72 
height: 50 cm
RAM:16gb 

methods
call :function
take picture:function



*/

let human=['batool',25,'student',168,['sleep','sports','watching movies']];



let batool= {
    name:'batool',
    age:25,
    job:'student',
    height:168,
    likes:['sleep','sports','watching movies'],
    jobDescription:{
        title:'senior developer',
        experience:5,
        salary:250000,
    },

    talk:function(){
        console.log('hello my name is '+this.name);
    },

    info:function () {
        console.log(`hi my age is ${this.age} and my height is ${this.height}`);
    },

    whatIsThis:function () {
        console.log(this);
    }
}

// console.log(this.name);
// console.log(batool);
batool.talk();
batool.info();
batool.whatIsThis();


// dot notation
// console.log('name:',batool.name);

// console.log('age:',batool.age);

// bracket notation

// console.log('name:',batool["name"]);

// console.log('age:',batool["age"]);


// for(let i=0;i<batool.likes.length;i++){
//     console.log(batool.likes[i]);
// }


// adding a property:

// batool.dislikes=['waking up early','math','read assignments'];

// console.log('after adding: ',batool);




// deleting a property:
// delete batool.dislikes;
// batool.dislikes=''
// console.log(batool);


// let arr1=[1,2,3];

// console.log(typeof arr1);
// console.log(Math);
// let arr2=arr1;

// console.log('array 1',arr1);
// arr2.push(55)
// console.log('array 2', arr2);
// console.log('array1 again', arr1);




// adding a method:
// batool.logName=function () {
//     console.log(`hello my name form outside the object is ${this.name}`);
// }

// batool.logName();

// console.log('at the end',batool);



// accessing an object inside object

// console.log(batool.jobDescription.title);





// DOM

// console.log(document);
// document.write('<h3>'+'hello there'+'</h3>');

// get the parent element by ID
let parent=document.getElementById('parent');

// let parent2=document.getElementById('parent2');



console.log(parent);

// create a child element


let child=document.createElement('p');

console.log(child);

// append child to the parent:

parent.appendChild(child);

// give text content:
child.textContent='hello from Javascript';

// add a class name using javascript
child.className='test';