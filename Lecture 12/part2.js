const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick} ms \n`);

const blocker = () => {
  //   let i = 0;
  //   while (i < 10000000000) {
  //     i++;
  //   }
  //   return "Blocker executed successfully!";

  //   Async
  return Promise.resolve().then(() => {
    let i = 0;
    while (i < 10000000000) {
      i++;
    }
    return "Blocker executed successfully!";
  });
};

log("Sync 1");

blocker().then(log);

log("Sync 2");
