// let cats =["Milo", "Otis", "Garfield", ];

// function destructivelyAppendCat(name){
//     cats.push(name);
// }
// function destructivelyAppendCat(name){
//     cats.unshift(name);
// }
// function destructivelyAppendCat(name){
//     cats.pop(2);
// }
// function destructivelyAppendCat(name){
//     cats.shift(0, 1);
//     }

//     function appendCat(name){
//         return [...cats, name];
//     }

//     function appendCat(name){
//         return [name, ...cats]
//     }
//     function appendCat(name){
//         cats.slice();
//         cats.slice();
//     }
//  console.log(destructivelyAppendCat("Ralph"));
//  console.log(destructivelyPrependCat("Bob"));
// console.log(destructivelyRemoveLastCat());
// console.log(destructivelyRemoveFirstCat());

// console.log(appendCat("Broom"));
// console.log(prependCat("Arnold"));
// console.log(removeLastCat());
// console.log(removeFirstCat());

// // function destructivelyAppendCat(name){
// //     cats.unshift(Bob);
// // }

// // function destructivelyAppendCat(name){

// // }
// Initial array of cats
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}


function destructivelyPrependCat(name) {
    cats.unshift(name);
}


function destructivelyRemoveLastCat() {
    cats.pop();
}


function destructivelyRemoveFirstCat() {
    cats.shift();
}


function appendCat(name) {
    return [...cats, name];
}


function prependCat(name) {
    return [name, ...cats];
}


function removeLastCat() {
    return cats.slice(0, -1);
}


function removeFirstCat() {
    return cats.slice(1);
}


console.log("\nTesting Destructive Functions:");
destructivelyAppendCat("Ralph");
console.log("After append:", cats);
destructivelyPrependCat("Bob");
console.log("After prepend:", cats);
destructivelyRemoveLastCat();
console.log("After removing last cat:", cats);
destructivelyRemoveFirstCat();
console.log("After removing first cat:", cats);

console.log("\nTesting Non-Destructive Functions:");
console.log("New array after append:", appendCat("Broom"));
console.log("New array after prepend:", prependCat("Arnold"));
console.log("New array after removing last:", removeLastCat());
console.log("New array after removing first:", removeFirstCat());

console.log("\nOriginal cats array remains:", cats); 
