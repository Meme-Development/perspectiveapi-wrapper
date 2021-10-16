// An example request using our package!

const client = require('./src/PerspectiveClient');


client({ apiKey: "api key here!" }, "Some text here!", (res) => {
  console.log(res);
});
