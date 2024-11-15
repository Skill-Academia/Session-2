// Synchronous
// console.log("Hi,");
// console.log("Gagan.");
// console.log("my name is");

// Asynchronous
console.log("Sync 1");

setTimeout(() => {
  console.log("Async 2");
}, 0);

Promise.resolve().then(() => console.log("Async 3"));

console.log("Sync 4");
