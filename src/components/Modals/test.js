function retPro() {
  return new Promise((resolve) => {
    resolve("hello");
    // setTimeout(() => {
    //   resolve("Hello");
    // });
  });
}

// retPro().then((data) => {
//   console.log(data);
// });

// retPro().then((data) => {
//   console.log(data);
// });

// const arr = [retPro(), retPro()];
// console.log(arr);

// const proall = Promise.all(arr);
// proall.then((data) => {
//   console.log(data);
// });

let arr = [];
for (x = 0; x < 100000; x++) {
  arr.push(Math.random());
}

function oldFor(d) {
  aux = [];
  const t0 = performance.now();
  for (x = 0; x < d.length; x++) {
    aux.push(d);
  }
  return performance.now() - t0;
}

function eachFor(d) {
  let aux = [];
  const t0 = performance.now();
  d.forEach((v) => {
    aux.push(v);
  });
  return performance.now() - t0;
}

oldFor(arr);
eachFor(arr);
