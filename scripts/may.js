module.exports = function(robot) {
	var lulz;
  robot.hear(/bug/i, function(res) {
    return res.send("junebug or VW bug?");
  });
  robot.respond(/open the (.*) doors/i, function(res) {
    var doorType;
    doorType = res.match[1];
    if (doorType === "pod bay") {
      return res.reply("I'm afraid I can't let you do that.");
    } else {
      return res.reply("Opening " + doorType + " doors");
    }
  });
  robot.hear(/welcome june/i, function(res) {
    return res.emote("maybees don't fly in june");
  });
  return lulz = ['lol', 'rofl', 'lmao'];
};