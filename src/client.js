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

function Analyze(
  options = {
    apiKey,
    content,
    getOriginalData,
    getOriginalValue,
  },
  resultFn
) {
  const opt = options;
  const key = opt.apiKey;
  const content = opt.content;
  const url =
    "https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1";

  if (typeof resultFn !== "function") {
    throw new WrapperError(
      "The typeof resultFn should be a function, you provided " +
        typeof resultFn
    );
  } else if (typeof key !== "string") {
    throw new WrapperError(
      "The typeof apiKey should be a string, you provided " + typeof key
    );
  } else if (typeof content !== "string") {
    throw new WrapperError(
      "The typeof content has to be a string, you provided " + typeof content
    );
  }

  if (key.length <= 0 || !key) {
    throw new WrapperError(
      "API key has to be provided / greater than 0 characters"
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
              if (opt.getOriginalData && opt.getOriginalValue) {
                throw new WrapperError(
                  "getOriginalValue and getOriginalData cannot be enabled togehter!"
                );
              } else if (!opt.getOriginalData && !opt.getOriginalValue) {
                resultFn(
                  re.data.attributeScores.TOXICITY.summaryScore.value.toFixed(2)
                );
              } else if (opt.getOriginalData) {
                resultFn(re.data);
              } else if (opt.getOriginalValue) {
                resultFn(re.data.attributeScores.TOXICITY.summaryScore.value);
              }
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

module.exports = Analyze;
