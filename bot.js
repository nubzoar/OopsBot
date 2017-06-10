// import the discord.js module
const discord = require('discord.js');

// create an instance of a Discord Client, and call it bot
const bot = new discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', message => {
    
    // So the bot doesn't respond to itself or other bots.
    if (message.author.bot) return;

    // Check for the command trigger '~'
    if (message.content.substring(0, 1) === '~') {

        console.log('Trigger spotted!')

        console.log('Here is what I see is the command: ' + message.content.match(/[~](\w+)/)[1])

        if (!cmds[message.content.match(/[~](\w+)/)[1]](message)) {
            console.log('Command executed but did not return true.');
        }
    }
});

const cmds = {

    ping: function(message) {
        message.reply('pong');
        return true;
    }
}

// get the token for the bot via user input then login
const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
interface.question("Please enter your bot's token to start: ", function(answer) {
    bot.login(answer);
})