var templates = {};
templates.tweet = [


  "<h3><%= title %></h3>",
  "<h4><%= user %></h4>",
  "<p><%= desc %></p>",
  "<button class='delete'>delete</button>"
  // "<i class='fa fa-trash'></i>",
  // "<i class='fa fa-pencil'></i>"

].join('');


templates.addTweet =[
  '<form>',
    '<input type="text" name="title" placeholder="Title">',
    '<input type="text" name="user" placeholder="User Name">',
    '<input type="text" name="desc" placeholder="Tweet">',
    '<input class="create "type="button" name="create" value="Create">',
  '</form>'
].join('');

module.exports = templates;
