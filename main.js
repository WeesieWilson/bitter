var $ = require('jquery');
var Backbone = require('backbone');
var BitterCollection = require('./bittercollection');
var BitterCollectionView = require('./bittercollectionview');
var AddBitterView = require('./addbitterview');

$(document).ready(function(){
  var finalBitterCol = new BitterCollection();
  new AddBitterView();
  finalBitterCol.fetch().then(function(data){
    var collection = new BitterCollection(data);
    new BitterCollectionView({collection: collection});
  })
});
