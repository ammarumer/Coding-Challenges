let johnMass = 90;
let markMass = 80;

let johnHeight = 5;
let markHeight = 4;

const johnBMI = johnMass / (johnHeight **2);
console.log('John BMI' + ' '+ johnBMI)
const markBMI = markMass / (markHeight **2);
console.log('MarkBMI' + ' ' +markBMI);

let markHigherBMI = markBMI > johnBMI;

console.log('markHigherBMI' + " " + markHigherBMI);