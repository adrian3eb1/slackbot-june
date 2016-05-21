//adrian notes !!
module.exports = function(robot) {
	robot.hear(/Hello!!/, function(res) {
	   return res.send("Hi there!");
	 });
}

robot.hear(/hello june/i, function(res) {
    return res.emote("Hello, how's it going");
  });