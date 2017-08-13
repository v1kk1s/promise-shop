const address = 'http://localhost:1337)';
const http = require('q-io/http');

http.request(address)
  .then((res) => { console.log(res.body.read()); return res.body.read()})
  .then(console.log);