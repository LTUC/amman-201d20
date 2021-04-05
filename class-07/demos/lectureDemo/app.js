'use strict';

// object literals:


// let ob={key:'value',key2:'value2'};

/*
let batool={
    // proprties
    name:'Batool',
    age:25,
    job:'Student',
    salary:25000,

    // methods
    walk:function(){
        console.log('im walking here...');
    }

}
console.log(batool.name);
batool.walk();

let bahaa={
    // proprties
    name:'Bahaa',
    age:25,
    job:'Student',
    salary:25000,

    // methods
    walk:function(){
        console.log('im walking here...');
    }

}



console.log(bahaa.name);
bahaa.walk();

*/

// constructor function:

// camel case
// userName

// Pascal:
// Math
// Object
// String




let studentsArr=[];

function Student(name, age, weight) {
    this.userName = name;
    this.age = age;
    this.weight = weight;
    console.log(this);
    this.walk = function () {
        console.log('im walkin here..' + this.userName);
    }
    studentsArr.push(this);
}



let batool = new Student('batool', 25, 55);
let bahaa = new Student('bahaa', 27, 70);
console.log('students Array',studentsArr);

// call methds from instances
// batool.walk('from batool');
console.log(batool);
// console.log(Student);

// creating methods should be outside

Student.prototype.talk = function () {
    console.log('hello there');
}

Student.prototype.drive = function () {
    console.log('driving');
}


Student.prototype.eat = function () {
    console.log('eating');
    console.log('from proto',this.userName);
}

// console.log(Math);

// function Teacher(name) {
//     this.name=name
// }

// let samer=new Teacher('samer');

// Teacher.prototype.eat=function () {
//     console.log('eating as instructor');
// }
// samer.eat()


batool.eat();
batool.drive();
batool.talk();

// console.log(Math);
// bahaa.eat();


// *****TABLES*****
/* 
header
a row that has table headings
<tr>
  <th>
  </th>
</tr

rows
similar to the header but has td inside the row

<tr>
  <td>
  </td>
</tr>

footer
a row that has footer elements either th or td based on you
<tr>
  <th>
  </th>
  or
  <td>
  </td>
</tr>

*/



// get the parent from html by its ID
let parent=document.getElementById('container');

// create element
let table=document.createElement('table');

// append to parent:
parent.appendChild(table);

// create heading row
let headingRow=document.createElement('tr');


// append header row
table.appendChild(headingRow);

let headings=['name','age'];

for (let i = 0; i < headings.length; i++) {
    // creating th
    let thElement=document.createElement('th');
    // append to tjhe row
    headingRow.appendChild(thElement);
    // give text content
    thElement.textContent=headings[i];  
}


for (let i = 0; i < studentsArr.length; i++) {
    console.log(studentsArr[i]);
    // create a row for student
    let studentRow=document.createElement('tr');

    // append the row
    table.appendChild(studentRow);

    let nameData= document.createElement('td');
    studentRow.appendChild(nameData);
    nameData.textContent= studentsArr[i].userName;

    // studentsArr[0].userName;

    let ageData= document.createElement('td');
    studentRow.appendChild(ageData);
    ageData.textContent= studentsArr[i].age;
}



// for (let i = 0; i < studentsArr.length; i++) {
//     console.log(studentsArr[i].userName);
    
// }




