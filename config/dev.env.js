'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API: '"http://goi.front-challenge.s3-website-eu-west-1.amazonaws.com/"'
})
