// Arrays, Strings and Objects
// Index starts from 0 and Length starts from 1
const arr = ["hello", "java", 3];
console.log(arr.length);

arr[0] = "JS"; // ["JS", "java", 3]

arr.forEach((el, index) => {
  console.log(index + "-" + el);
});

console.log(arr.slice(0, 2));

arr.unshift("Hello");
console.log(arr);

arr.push("Last");
console.log(arr);

console.log(arr.filter((el) => el !== 3));

console.log(arr.pop());
console.log(arr); // ["Hello", "JS", "java", 3]
console.log(arr.shift());
console.log(arr); // ["JS", "java", 3]

const newArray = arr.map((el) => {
  console.log(el);
  return 1;
});
console.log(newArray); // [1, 1, 1, 1]

console.log(arr.length);

const arr1 = ["Gagan", "Biswas"];
const map = arr1.map((el) => {
  return el === "Gagan" ? el + " Hello" : el;
});
console.log(map); // ["Gagan Hello", "Biswas"]

// Strings
const str = "Hello from javascript";
console.log(str.length);
console.log(str.substring(0, 10));
console.log(str[0]);
console.log(str.includes("Hello"));
console.log(str.split(" "));
console.log(str.split(" ")[1]);

// Word extraction
str.split(" ").forEach((el) => {
  console.log(el);
});

// Character extraction
for (let i = 0; i <= str.length - 1; i++) {
  console.log(str[i]);
}

// Objects
const obj = {
  person: [
    { name: "John", age: 32 },
    { name: "Sarah", age: 31 },
  ],
  numberOfPerson: 2,
  dateOfMeeting: new Date(),
};

console.log(obj);

console.log(obj.person);
console.log(obj["person"]);

obj.numberOfPerson = 3;
console.log(obj.numberOfPerson);

obj.person.push({ name: "Amy", age: 21 });
console.log(obj.person);

obj.gagan = {
  age: 26,
  height: 5.9,
};

obj.gagan.dob = 1998;
console.log(obj);

// Users Response from server
const response = {
  users: [
    { name: "Gagan", age: 26, state: "WB" },
    { name: "Sayak", age: 25, state: "WB" },
    { name: "Gaurav", age: 21, state: "WB" },
  ],
};

response.users.forEach((el) => {
  console.log(el.name);
});

// Object to string conversion
console.log(JSON.stringify(response));
// String to object conversion
// String should be structured like an object
const string = `{"users":[{"name":"Gagan","age":26,"state":"WB"}]}`;
console.log(JSON.parse(string));
