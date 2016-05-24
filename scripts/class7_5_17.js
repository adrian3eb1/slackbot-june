/*
class #7
5_17 
SEE Voice notes
See robot.js

*/

// for HOMEWORK: 
// create new Hubot from scratch. scaffolded app. remember u have to invite ur Hubot to the channel to start responding.
// create 2 js files in the scripts folder, 1 per teammate.
// push up to the server.
// 2 js files, 1 heroku app, 1 github repo


/* bot: automated response to certain text from user.
Twitterbot: helps w/ marketing PR.  Yelp: automatically weed out words to auto respond to.
Slack integration: plug into channel in company, so that you can do many things directly from Slack.
Carbon5: user experience of bots.

Interview Questions: #1 are you on Twitter?
 It's actually a great resource for developers.  Good devs post very helpful articles all the time.
 As you find devs that you like, follow them.
 Otherwise, read Reddit or Techcrunch.
 Zach has helpful tips etc on Twitter.

HUBOT - framework to help create bot more easily.
 Coffeescript - JS that looks cleaner.
 Framework allows to create aspects of app or actual app more easily.

 Compile - take language & compile into code that machine can read/process.
 Transpile - ex: Coffeescript. Trasitive type of property, since machine can't read Coffeescript.

HEROKU - our Slack is hosted online. use Heroku to host our code on Slack's server/cloud. 
  Slack server will connect w/ our Hiroku server.
  Heroku Toolbelt is same as CLI.
  Owned by Amazon.  Friendly layer over Amazon's AWS, to host apps.

scaffolding: command that creates files & folder for you.
http://yeoman.io/ - code generator, it'll scaffold out code, like Ruby on Rails framework.
  help w/ our initial creation w/ our Hubot, since there are a lot of files etc we don't need to focus on now.
  It's like a skeleton of our app, so we can just focus.
  It has commands already, but you can create ur own yeoman code generator. So it is commonly used professionally.


  HEROKU - in CLI, mkdir myHubot. cd myHubot.
  use npm node pkg manager to install some CLI.  use npm to host pkgs (libraries of node), see 1st class.
  npm.com: search csv, just for ref.
  install with npm: Hubot.
  CLI: npm install or npm i -g (flag g, globally meaning on ur machine not just on this project) hubot.
   if Errors, use sudo
   npm i -g coffee-script
   npm i -g yo.  if it's a Warning, that's ok.
  csv parser - dependency on that pkg.  parse my csv.

Voice notes: 30:40
41:20
in the folder you want the bot to be in:
yo hubot --adapter="slack"
ls
now you can see scaffolding that was created.


subl . to open the muHubot scaffolding: folder node modules: node pkgs.
folder: scripts -> open: example.coffee
bottom rt of file in sublime: change from Plain Text to JavaScript
if you want, can copy/paste into sandbox http://js2.coffee/ which will make easier to read.
  copy/paste from coffeescript (see Screenshot). browser look up: JS to Coffee 2.0
any file that's in scripts folder will run in coffeescript.

in our myHubot directory in CLI:
git init     to initialize git to monitor our code
git status
<change script code if want here>
git add (to stage) -A
git commit -m 'scaffolded hubot app'
  it's now staged. now we need to work with the remote, which is the Heroku remote to host our code for Slack to connect with it
heroku login
heroku create nancy (domain name, no caps, letters & some dashes. can be cahnged later.
  name that's not already taken as a domain)
   create: (equivalent of creating a repo, but on Heroku we're creating an App)
   we created Heroku remote, but our local isn't connected to remote.  now we need to connect the remote
git remote add origin <the url that's given to use: https://git.heroku.com/maybotter.git>
git remote -v (flag v)    to check that we're connected to our remote
  now we're connected, but our code isn't up on the remote
git push heroku master
  go to heroku.com, go to ur dashboard, ur app should be there

  our code went from local to Heroku.  but now we need to connect Heroku to Slack.
  generate an access key (api token) in Slack manually that's associated with the bot in our Slack, plug it into Heroku.
  from Slack 
heroku config:add HEROKU_URL=https://nancy-can-sing.herokuapp.com/
heroku config:add HUBOT_SLACK_TOKEN=xo... (the api token, a unique key)
  the 2 above are: config environ variables we're adding to Heroku
heroku ps:scale web:1     turns on ur bot, start up our Heroku app server. now u can go visit the site if have front-end code

see VOICE Notes 1:21

now u can go into your bot into Slack js-1 channel.
change the script file.
git status
stage, commit, git push heroku master
  don't push small changes since it takes so long
VOICE Notes 1:28


VOICE Notes from class#8 Slackbot cont
invite ur bot in Slack by typing in msg area: @<bot name>
both people push all code to Github, then 1 person pull, who pushes up to Heroku.
make sure Slack each other to check that both people are done, for 1 person to push up.
if want to test a bot command, make sure let other person know that ur gonna push a bot command to test.
note: Slack can be replaced by Spotify or Twitter etc. Go to Spotify developer site, then you'll get a token.
the bot gets named when generate the token. the bot name you give when yo to scaffold ur files doesn't matter.

SLACKBOT project
slack token is paired with the bot name. but up to 5 or 6 developers can use the token,
  so partner can put that token in & push up to Heroku.  you can do this b/c ur a collaborator to that person's Heroku.
  When add collabo, use partner's Heroku username
if there's syntax error in ur code, ur app crashes and your Heroku crashes.  be careful!

VOICE 27mins

CLI:
heroku logs		to check health of the bot
   Tyler example: right before it crashed, there's msg "node_modules/.bin/hubot: not found".  maybe reinstall hubot
heroku restart		to restart the app, will wake him up if sleeping
VOICE 33:34
npm i -g hubot		Alex trying to reinstall hubot
npm i hubot
git status ...		unsuccessfull
Alex googled the error msg
rm -rf node_modules		"remove, forcibly remove"
npm i 		"install"
node modules aren't on heroku b/c git ignore includes node modules.
package.json file 		apps glossary. don't touch this file, it needs all the dependencies.


hubot documentation has scripts

*/

// Alex's nancy bot
  module.exports = function(robot) {  // Alex's nancy bot
    robot.hear(/These boots/, function(response) {  // These boots no need quotes, b/c regEx
      return response.send('...are made for walkin');  // there are other commands we could find. google: hubot documentation
    })
  }

// Alex's nancy bot version #2
// Voice time 1:40
  module.exports = function(robot) {  
    robot.respond(/Hi Nancy! My name is (.*)/i, function(message) {  // '*' so that we can send it an argument
      var name = message.match[1]; // array to match what's in the '*' wildcard.  according to the documentation,
         // 0 is the entire expression.  1 is just the argument.
      if (name == 'Nancy') {
        return message.send('You are not Nancy-- I am Nancy!');
      } else {
        return message.reply('Nice to meet you, ' + name + '!');
      }
    })
  }

  module.exports = function(robot) {  
    robot.respond(/Hi Nancy! My name is (.*)/i, function(message) {  // '*' so that we can send it an argument
      var name = message.match[1]; // array to match what's in the '*' wildcard.  according to the documentation,
         // 0 is the entire expression.  1 is just the argument.  all wildcards start at 1.
      if (name == 'Nancy') {
        return message.send('You are not Nancy-- I am Nancy!');
      } else {
        return message.reply('Nice to meet you, ' + name + '!');
      }
    })
  }



