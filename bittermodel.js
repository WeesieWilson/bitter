var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/bitter',
  idAttribute: '_id',
  initialize: function () {
    console.log('its alive, the like, our model!');
  }
});
