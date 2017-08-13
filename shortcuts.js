const promise = new Promise((fullfil, reject) => {
  reject(new Error('gotcha!'));
});

promise.catch((rr) => console.log(err));

const promise1 = Promise.resolve('boo yah!');

const promise2 = Promise.reject('boo nah!');
