
let dayOfWeek = [];
// dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// for(let i = 0; i < dayOfWeek.length; i++) {
//     console.log(dayOfWeek[i]);
// }


// Fibonnacci sequence
const fibonnacci = [];
const index = 5;
fibonnacci[0] = 0;
fibonnacci[1] = 1;
fibonnacci[2] = 1;

for(let i = 3; i < index; i++) {
    fibonnacci[i] = fibonnacci[i - 1] + fibonnacci[i - 2];
}

// fibonnacci.forEach((num) => console.log("the element is " + num));


// Useful Function
dayOfWeek.push("January");
// insert in back end
dayOfWeek.push(...fibonnacci);
// insert in forword end
dayOfWeek.unshift(-5);

dayOfWeek.forEach((num) => console.log(num));

// delete in back end
dayOfWeek.pop();
dayOfWeek.shift();


for(let i = 0; i < dayOfWeek.length; i++) {
    console.log("The " + i + " is " + dayOfWeek[i]);
}

// splice function
dayOfWeek.splice(2, 1);              // just delete 1 numbers from 2
dayOfWeek.splice(3, 0, 33, 44, 55);  // can also use splice to insert numbers to any position

dayOfWeek.concat(10, 21, 30);

// every()  forEach()  some()
let result = dayOfWeek.every((day) => day % 2 === 0);
console.log(result);

// dayOfWeek.join(",");    sort()
dayOfWeek.sort((a, b) => a - b);
let dayString = dayOfWeek.join(",");
console.log(dayString);
console.log(dayOfWeek);
