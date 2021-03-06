// https://github.com/michael-ciniawsky/postcss-load-config

const path = require('path');


module.exports = {
  "plugins": {
    'postcss-import': { path: [path.resolve(__dirname, 'src')] },
    "postcss-url": {},
    precss: {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
