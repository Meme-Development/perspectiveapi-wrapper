const { google } = require("googleapis");

class ErrorConstructor extends Error {
	constructor(msg) {
		super(msg);
		this.name = "PerspectiveWrapperError";
	}
}

class WrapperError extends ErrorConstructor {
	constructor(msg) {
		super(msg);
		this.name = "PerspectiveWrapperError";
	}
}
class PerspectiveWrapper {
	constructor(options={ apiKey: null }) {
		this.apiKey = options.apiKey ? options.apiKey : null;
		if (!this.apiKey || this.apiKey.length == 0) {
			throw new WrapperError("Please provide the API key!");
		} else if(typeof this.apiKey !== 'string') {
			throw new WrapperError("The typeof apiKey has to be a string, received " + typeof this.apiKey);
		}
	}

	Analyze(
		content,
		resultFn
	) {
		const key = this.apiKey;
		const url =
			"https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1";

		if (typeof resultFn !== "function") {
			throw new WrapperError(
				"The typeof resultFn should be a function, you provided " +
				typeof resultFn
			);
		} else if (typeof content !== "string") {
			throw new WrapperError(
				"The typeof content has to be a string, you provided " + typeof content
			);
		} else if (content.length <= 0 || !content) {
			throw new WrapperError(
				"The length of the content has to be greater than 0"
			);
		}

		google
			.discoverAPI(url)
			.then((client) => {
				const r = {
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
						resource: r,
					},
					(err, re) => {
						if (err) throw new WrapperError("Unable to the make request");
						else
							try {
								// if(typeof opt.getOriginalData == 'undefined' && typeof opt.getOriginalValue == 'undefined' || typeof opt.getOriginalData == 'null' && typeof opt.getOriginalValue == 'null') {
								// 	resultFn(re.data.attributeScores.TOXICITY.summaryScore.value.toFixed(2))
								// }
								// if (opt.getOriginalData && opt.getOriginalValue) {
								// 	throw new WrapperError(
								// 		"getOriginalValue and getOriginalData cannot be enabled togehter!"
								// 	);
								// } else if (!opt.getOriginalData && !opt.getOriginalValue) {
								// 	resultFn(
								// 		re.data.attributeScores.TOXICITY.summaryScore.value.toFixed(2)
								// 	);
								// } else if (opt.getOriginalData) {
								// 	resultFn(re.data);
								// } else if (opt.getOriginalValue) {
								// 	resultFn(re.data.attributeScores.TOXICITY.summaryScore.value);
								// }

                 // Fixing this later
								resultFn(	re.data.attributeScores.TOXICITY.summaryScore.value.toFixed(2)
								);
							} catch (err) {
								throw new WrapperError(err);
							}
					}
				);
			})
			.catch((err) => {
				console.error(err);
			});
	}

}
module.exports = PerspectiveWrapper;
