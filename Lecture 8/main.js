// Iterations

const arr = [1, 2, 3, 4, 5, "Hello", "Javascript"];
// For loop
console.log("------------For Loop------------");
for (let i = 0; i < arr.length; i++) {
  console.log(`index: ${i}, value: ${arr[i]}`);
}

// For of loop
console.log("------------For of Loop------------");
for (let value of arr) {
  console.log(value);
}
// Alternative to above for of loop
// forEach loop
console.log("------------forEach Loop------------");
arr.forEach((value) => {
  console.log(value);
});

const obj = { course: "JavaScript", lesson: 8 };
// For in loop
console.log("------------For in Loop------------");
for (let key in obj) {
  console.log(obj[key]);
}
// Alternative to above for in loop
// Object.keys(obj); --> Output: ["course", "lesson"]
Object.keys(obj).forEach((key) => {
  console.log(obj[key]);
});

// While loop
let n = 0;
console.log("----------While loop-------");
while (n < arr.length) {
  console.log(arr[n]);
  n++; // n = n+1 --> n += 1
}

// Do while loop
let doN = 0;
console.log("---------Do while loop-------");
do {
  console.log(arr[doN]);
  doN++;
} while (doN < 0);

// IF...Else & Switch Case
console.log("--------If...else---------");
if (1 > 2) {
  console.log("1 is greater than 2");
} else {
  console.log("2 is greater than 1");
}

const num = 3;
console.log("--------If...else if...else---------");
if (0 === num) {
  console.log("The number is zero");
} else if (1 === num) {
  console.log("It's a match");
} else if (2 === num) {
  console.log("It's again a match");
} else {
  console.log("Nothing matches");
}

// Switch Case
const x = 1;
console.log("--------Switch Case---------");
switch (x) {
  case 0: {
    console.log("This is case 0");
    break;
  }

  case 1: {
    console.log("This is case 1");
    break;
  }

  case 2: {
    console.log("This is case 2");
    break;
  }

  default: {
    console.log("This is default");
  }
}
