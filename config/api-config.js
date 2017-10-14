const googleApiKey = { key: process.env.key1 };
const yelpApiToken = { token: process.env.key2 };
const openWeatherApiKey = process.env.key3;
const facebookApiKey = {
  clientID: process.env.key4,
  clientSecret: process.env.key5,
  callbackURL: process.env.key6
};

exports.facebookApiKey = facebookApiKey;
exports.googleApiKey = googleApiKey;
exports.openWeatherApiKey = openWeatherApiKey;
exports.yelpApiToken = yelpApiToken;
