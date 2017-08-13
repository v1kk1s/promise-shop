const json = process.argv[2];

const parsePromised = () => new Promise((fulfill, reject) => {
  try {
    fulfill(JSON.parse(json))
  } catch (e) {
    reject(e);
  }
});

parsePromised().then(console.log, console.log);
