const AWS = require("aws-sdk");
const s3 = new AWS.S3();

module.exports.save = (name, data, callback) => {
  let params = {
    Bucket: "pizza-lvrs-prem",
    Key: `pizza/${name}.png`,
    Body: new Buffer(data, "base64"),
    ContentEncoding: "base64",
    ContentType: "image/png"
  };

  s3.putObject(params, (err, data) => {
    callback(
      err,
      `https://s3.console.aws.amazon.com/s3/object/pizza-luvrs-prem/${
        params.key
      }`
    );
  });
};
