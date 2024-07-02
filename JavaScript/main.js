/**
 * Variabler
 */

let x;

x = "X can also be a string!";
console.log(x);
/**
 * Datatyper
 */


// number type
const myConstantNumber = 10;
let myNumber = 25;
console.log(myConstantNumber + myNumber);

// string type

const myString = "Hello, World!";
let alsoAString = 'Also a valid string!';
console.log(myString, alsoAString);

// null type

let nullAble = null;

// boolean

let canRide = false;

const heigth = 175; // cm

if (heigth >= 180 || canRide) {
    console.log("Can ride the rollercoaster!")
}
else {
    console.log("Cannot ride the rollercoaster!")
};

/**
 * Datastrukturer
 */


// Array -> holder flere elementer av samme datatype

let myArray = ["Hello", "From", "A", "JavaScript", "Array!"];
console.log(myArray);

// Object -> holder "key/value" par, som inneholder både samme datatype, eller flere datatyper.

let myObject = {
    "name": "John Doe",
    "names": ["Jane Doe", "John Smith", "Jane Smith", "Some Guy", "Some Girl"]
};
console.log(myObject);

/**
 * DOM og funksjoner
 */


const greetingButton = document.getElementById("greeting-button");
const greetingText = document.getElementById("my-text");

function sayHello() {
    greetingText.textContent = "Hello there!";
};

function removeText() {
    greetingText.textContent = "";
}

greetingButton.addEventListener("click", sayHello);

greetingText.addEventListener("click", removeText);



// Bruk Audio klassen i JavaScript
/**
 * Til å spille av en mp3 fil i nettleseren.
 */

const audio = new Audio("../JavaScript/audio/It's Always Sunny in Philadelphia Theme [idoYCVLh2qI].mp3");

// hent knappene fra DOM
const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const stopButton = document.getElementById("stop-button");


// Her lager vi funksjonene for å spille av lydklippet

function startAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function stopAudio() {
    audio.pause(); // pauser først, så stopper vi via currentTime
    audio.currentTime = 0;
}

startButton.addEventListener("click", startAudio);
pauseButton.addEventListener("click", pauseAudio);
stopButton.addEventListener("click", stopAudio);

function createRNG(num) {
    num = Math.floor(Math.random() * 12);
    return num;
}

