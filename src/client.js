const { google } = require("googleapis");

function Analyze (options = { apiKey }, content, resultFn){
		const opt = options;
		const key = opt.apiKey;
		const url =
			"https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1";
		google.discoverAPI(url)
			.then((client) => {
				const reqbody = {
					comment: {
						text: content,
					},
					requestedAttributes: {
						TOXICITY: {},
					},
				};

				client.comments.analyze(
					{
						key: key,
						resource: reqbody,
					},
					(err, re) => {
						if (err) return console.error(err);
						else
						try {
							resultFn(re.data.attributeScores.TOXICITY.summaryScore.value.toFixed(2));
						} catch(err) {
							throw new Error("Unable to set data");
						}
					}
				);
			})
			.catch((err) => {
				console.error(err);
			});
	}

module.exports = Analyze;
