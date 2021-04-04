/*
If statement:

if (condition){
    do this thing if condition is true
}else if(anotherCondition){

    do this other thing if anotherCondition is true
}else{
    do this if none of the conditions are met
}

Switch

let variable;

switch(variable){
    case 'value1':
        do this code..
        break;

    case 'value2':
    case 'value3':
         do this code.
         break;
    default:
        do this if nothing is met
        break;
}

comparison operators:
== value only

10=='10' => true

=== value and datatype
10==='10' => false

>
<
!=
!==
>=
<=


logical operators:
And
&&
its only true when both are true

OR
||
it only false when both of them are false
when you have 1 as true the final result is true

NOT
!
The opposite of a value
!true => false


truthy:
true
1
'car'
5/2
'true'
'false'
'0'

falsy:

false
0
''
'string'/2 =>NaN
undefined


*/

// let userName=NaN;

// if(userName){
//   alert('truthy value');
// }else{
//   alert('falsy value');
// }


/*
Loops:
why: reapeat code for an amount of times without copy pasting the same code

for loop:
when we know how many times we will repeat this code

for(initialization; condition; update value){
    do stuff
}

increment:
initialization: let i = 0;
condition: i<10;
update: i++

decrement:
initialization: let i = 10;
condition: i>0;
update: i--

*/

// for (let i = 0; i < 10; i++) {

//     console.log('increment example',i);
//     // i=10
// }

// for (let i = 10; i > 0; i--) {
//     console.log('decrement example',i);
//     // i=0
// }

// break: to stop loop
// continue: to skip this iteration

// // for (let i = 0; i <5; i++) {
// //     // if(i===3){
// //     //     break;
// //     // }

// //     // 0
// //     // 1
// //     // 3
// //     // 4

// //     if(i===2){
// //         continue;
// //     }

//     console.log('increment example',i);
// //     // i=10
// // }


/*
while:
if you don't know how many times you'll loop through

while(condition){
    code will keep running while the condition is true
}



*/


// let userName=prompt('whats your name?');

// while (!userName) {
//   userName=prompt('please write something');
// }


// let grade1=50;
// let grade2=100;
// let grade3=50;


/*
ARRAYS
*/

// let grades=[100,50,77,66,33,22,10];

// console.log('whole array',grades);

// console.log('first element',grades[0]);

// console.log('fourth element', grades[3]);

// // to print index for an element:
// console.log('get index of 22', grades.indexOf(22));

// // print length:
// console.log('print length', grades.length);


// // arrays of multible datatypes:

// // let info=['ahmad', 22,1.86,['pizza','mansaf','burger']];

// // console.log(info);

// // add elements at the end of an array:

// grades.push(150);

// console.log('grades after pushing', grades);

// // to remove an element from the end:
// grades.pop();

// console.log('grades after pop', grades);







////////////////////////////////////////
// ########  DEMO  ######

/* to do list:
1) make sure the user name is not empty ( not a falsy value) X

2)ask the user 2 yes or no questions the user can answer with yes/y or no/n

3)keep track of the score of the user and display it at the end add 1 point when the user answers correctly

4) show in the console these foods in order 'burger','steak','pizza','mansaf'
*/

let userName = prompt('whats your name?');

while (!userName) {
    userName = prompt('please write something');
}


alert('hello ' + userName + ' glad to have you hear');


let human = prompt('am I a robot?');

let score = 0;

human = human.toLowerCase();
if (human === 'yes' || human === 'y') {
    alert('good job');
    score++;
    // score=score+1

} else if (human === 'no' || human === 'n') {
    alert('think again');
} else {
    alert('answer yes/y or no/n');
}


let horses = prompt('does horses fly');

horses = horses.toUpperCase();

if (horses === 'YES' || horses === 'Y') {
    alert('are you ok?');
} else if (horses === 'NO' || horses === 'N') {
    alert('really?');
    score++;
} else {
    alert('answer yes/y or no/n');
}

// alert('thanks for playing '+ userName + ' your score is '+score );

alert(`thanks for playing ${userName} your score is ${score} `);

// let userName2=`hello ${userName}`;
// console.log(userName2);

// string interpolation:
// template literals: add backticks then the text and variables inside them like this:
console.log(`hello there from js ${userName}`);




let typesOfFoods = ['burger', 'steak', 'pizza', 'mansaf'];

for (let i = 0; i < typesOfFoods.length; i++) {
    // 0
    // 1
    // 2
    // 3
    console.log(typesOfFoods[i]);
}



/*
Do while:

*/

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while (i<0);

