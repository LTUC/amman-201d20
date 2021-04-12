'use strict';


let randomButton = document.getElementById('randomizer');

// console.log(randomButton);

randomButton.addEventListener('click',randomize);

function randomize() {
    let audioElement = document.getElementById('levees');
    // console.log(audioElement);

    audioElement.volume=Math.random();

    audioElement.className='audiofromjs';

    console.log(audioElement.volume);
}

