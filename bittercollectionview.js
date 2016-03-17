var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var BitterView = require('./bittermodelview');

module.exports =  Backbone.View.extend({
  el: '.bitter',
  initialize: function () {
    this.addAll();

    this.listenTo(this.collection, 'update', this.addAll);
    this.listenTo(this.collection, 'change', this.addAll);

  },
  addOne: function (el) {

      var modelView = new BitterView({model: el});
      console.log(modelView);
      this.$el.append(modelView.render().el);
  },
  addAll: function () {
    this.$el.html('');
    console.log(this.collection)
    window.glob2 = this.collection;
    _.each(this.collection.models, this.addOne, this);
  }
});
