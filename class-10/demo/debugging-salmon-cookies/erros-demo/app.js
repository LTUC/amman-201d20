'use strict';

// var food
// console.log(food);

// food="chicken";

// console.log(food);

// var car;

// console.log(car);

// let 

// console.log(food);

// const food="chicken";

// food='homos'

// console.log(food);


// let total=0;

// for (let i = 0; i < 5; i++) {
//     let total
//     console.log(total);
    
// }

// Errors

// Refrence error:

// when youre trying to use a variable that you never declared 
// let car;
// car='something'
// console.log(car);


// RangeError
// this is thrown when a number is outside an allowed range of values

// let arr=[1,2,3,4,5];

// arr.length=4;
// console.log(arr);
// arr.length=90**99;

// SyntaxError
// let car='bmw';
// let samer='teacher';

// for(let i =0;i<5;i++){
// console.log(123);
// }




// let food='burger';
// food.push()
// food();


// let total=0;
// console.log('total outside of loop',total);
// for (let i = 0; i < 5; i++) {
//     console.log('total inside of loop',total);
//     console.log(total+=5);
// }


// Scopes

// let globalVar='im outside of anything';

// function scoping() {
//     let localVar1='im inside the function';
    
//     if (true) {
//         let localVar2='im inside the if that is inside the function';
//     }
    
//     // console.log(globalVar);
//     // console.log(localVar1);
//     // console.log(localVar2);  
//     return localVar1;   
    
// }

// function testing() {
//     console.log(scoping());
//     // console.log(localVar1);
    
// }

// testing()

let globalVar=50;

function sum(num1,num2) {
    let output=num1+num2;
    globalVar='firas';

    return [output,globalVar]
    // any thing after return will not work
    console.log(output);

}

// console.log(globalVar);

// console.log(globalVar+100);

// console.log(sum(5,8));
// let test=NaN

// console.log(test);

// console.log(globalVar.length);

// console.log(globalVar+100);


// console.log(sum(7,8));
// console.log(sum(50,8));
// console.log(sum(588,8));
// console.log(sum(523,8));
// console.log(sum(5,80));