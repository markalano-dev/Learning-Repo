
/*
function greet(name: string): string {
    return `Hello, ${name}!`;
}

const message: string = greet("World");
console.log(message);

let isActive: boolean = true;
let hasPermission = false;

console.log(`Is Active: ${isActive}`);
console.log(`Has Permission: ${hasPermission}`);
*/

function greet(gender: string, color: string, age: number): string {
    return `He is a ${age} year old looking ${gender}, wearing a ${color} outfit.`;
}

console.log(greet("man", "blue", 30));