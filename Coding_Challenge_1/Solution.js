let johnMass = 92;
let johnHeight = 1.95;

let markHeight = 1.69;
let markMass = 78;


const johnBMI = johnMass / (johnHeight **2);
console.log('John BMI' + ' '+ johnBMI)
const markBMI = markMass / (markHeight **2);
console.log('MarkBMI' + ' ' +markBMI);

let markHigherBMI = markBMI > johnBMI;

console.log('markHigherBMI' + " " + markHigherBMI);