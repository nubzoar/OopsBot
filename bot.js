// import the discord.js module
const discord = require('discord.js');

// create an instance of a Discord Client, and call it bot
const bot = new discord.Client();

// get the token for the bot via user input
const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Please enter your bot's token to start: ", function(answer) {
    const token = answer;
})

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
  if (message.content === 'ping') {
	console.log(message.author);
    message.channel.sendMessage('pong');
  }
});

bot.login(token);