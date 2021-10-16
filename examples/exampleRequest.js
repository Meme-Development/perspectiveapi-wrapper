// An example request using our package!

const client = require('./src/PerspectiveClient');


client({ apiKey: "api key here!" }, "Memer Development is cool!", (res) => {
  console.log(res);
});
