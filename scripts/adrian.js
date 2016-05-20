module.exports = (robot) ->

bot.hear(/Hello!!/, function(res) {
   return res.send("Hi there!");
 });

