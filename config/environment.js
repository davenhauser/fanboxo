var _ = require('lodash');

var localEnvVars = {
  TITLE:      'fanboxo',
  SAFE_TITLE: 'fanboxo'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
