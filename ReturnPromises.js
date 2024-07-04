// Write a function similar to Promise.all() which takes an array of promises and returns a promise that resolves when all of the promises in the array have resolved or when the array is empty. 

function arrayOfPromises(promises) {
    return new Promise((resolve, reject) => {
      if (promises.length === 0) {
        resolve([]);
      } else {
        let results = [];
        let count = 0;
        promises.forEach((promise, index) => {
          promise.then(result => {
            results[index] = result;
            count++;
            if (count === promises.length) {
              resolve(results);
            }
          }).catch(error => {
            reject(error);
          });
        });
      }
    });
  }

  const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

arrayOfPromises([promise1, promise2, promise3]).then(results => {
  console.log(results); 
}).catch(error => {
  console.log(error);
});
