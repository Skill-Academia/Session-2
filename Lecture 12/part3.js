const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick} ms \n`);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getFruit = async (name) => {
  const fruits = {
    apple: "🍎",
    strawberry: "🍓",
    watermelon: "🍉",
  };

  await delay(5000);

  return fruits[name];
};

const makeSalad = async () => {
  const fruit1 = getFruit("apple");
  const fruit2 = getFruit("watermelon");
  const all = Promise.all([fruit1, fruit2]);

  return all;
};

makeSalad().then(log);

// Request one after other
// Post -> 20s
// Online -> 10s
// Profile -> 5s
// Total Time -> 35s

// Promise.all
// Post -> 20s
// Online -> 10s
// Profile -> 5s
// Total Time -> 20s
