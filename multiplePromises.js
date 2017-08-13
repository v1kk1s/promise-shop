'use strict';

function all(promise1, promise2) {
  return new Promise(resolve => {
    let counter = 0;
    const result = [];

    promise1.then((val) => { 
        counter += 1;
        result[0] = val;
        if (counter === 2) {
          resolve(result);
        }
    });
  
    promise2.then((val) => { 
      counter += 1;
      result[1] = val;
      if (counter === 2) {
        resolve(result);
      }
   });

  });
};

all(getPromise1(), getPromise2()).then(console.log);