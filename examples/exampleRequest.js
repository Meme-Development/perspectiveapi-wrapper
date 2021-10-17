// An example request using our package!

const toxic_police = require('./src/client');


toxic_police({ apiKey: "api key here!", content: "Something" }, (res) => {
  console.log(res);
});
