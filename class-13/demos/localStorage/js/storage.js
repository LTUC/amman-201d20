'use strict';


console.log(localStorage);



// adding items to the local storage

localStorage.setItem('name','alia');
localStorage.setItem('age',24);


// get data from the local storage

console.log(localStorage.getItem('name'));


// removing a key from the local storage
localStorage.removeItem('age');

localStorage.removeItem('name');

localStorage.setItem('walk','walking here...');


// clear everything from the local storage

// localStorage.clear();
