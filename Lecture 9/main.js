const h1 = document.querySelector(".counter");
h1.textContent = 0;

function increment() {
  //   if (Number(h1.textContent) < 99) {
  //     const newValue = Number(h1.textContent) + 1;
  //     h1.textContent = newValue;
  //   }

  if (Number(h1.textContent) >= 99) {
    return;
  }

  const newValue = Number(h1.textContent) + 1;
  h1.textContent = newValue;
}

function decrement() {
  if (Number(h1.textContent) <= 0) {
    return;
  }

  const newValue = Number(h1.textContent) - 1;
  h1.textContent = newValue;
}

// Asynchronous JavaScript

// fetch ---> Promise<Response>
// response.json() ---> Promise<data>

// fetch("https://jsonplaceholder.typicode.com/photos").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const createTemplate = (src, text) => {
  return `<div id='${text.split(" ")[0]}'>
    <img
      width="120"
      height="120"
      src="${src}"
    />
    <p>${text.split(" ")[0]}</p>
  </div>`;
};

// const container = document.querySelector("#container");
const container = document.getElementById("container");

async function asyncFn() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();

  data.slice(0, 100).forEach((obj) => {
    const template = createTemplate(obj.thumbnailUrl, obj.title);

    const parser = new DOMParser();
    const html = parser.parseFromString(template, "text/html");

    container.appendChild(html.body);
  });
}

// const promise = new Promise(function (resolve, reject) {
//   let i = 1;

//   if (i === 0) resolve("Got the number");
//   else reject("Error: Didn't get the number");
// });

// promise.then(
//   function (success) {
//     console.log(success);
//   },
//   function (failed) {
//     console.log(failed);
//   }
// );
