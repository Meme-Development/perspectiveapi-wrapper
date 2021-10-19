// An example request using our package!

const client = require('./src/client');

const toxic_police = new client(
	{apiKey: "your api key!"}
);

toxic_police.Analyze("Hello World!", (r) => {
	console.log(r);
});
