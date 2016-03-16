var Backbone = require('backbone');
var BitterModel = require('./bittermodel');
module.exports = Backbone.Collection.extend({
  model: BitterModel,
  url: 'http://tiny-tiny.herokuapp.com/collections/bitter',
  initialize: function () {
    
  }
});
