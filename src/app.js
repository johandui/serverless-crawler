const AWS = require("aws-sdk");
exports.handler = async (event, context) => {
  let result = null;
  let browser = null;

  try {
  } catch (error) {
    console.log(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }

  return result;
};
