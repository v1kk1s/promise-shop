function attachTitle (name) { return `DR. ${name}`};

const promise = new Promise((resolve) => { resolve('MANHATTAN'); });

promise.then(attachTitle).then(console.log);
