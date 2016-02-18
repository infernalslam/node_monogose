;(function () {
  'use strict'
  var modelName = 'data'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema
  var schema = new Schema({
       name : String
  })
  module.exports = mongoose.model(modelName, schema)
})()
