const path = require('path');

const fns = (exports = module.exports = {});

fns.resolveFromRoot = filePath => {
  return path.join(__dirname, '../', filePath);
};

