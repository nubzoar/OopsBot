// import the discord.js module
const discord = require('discord.js');

// create an instance of a Discord Client, and call it bot
const bot = new discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');
});

const cmds = {

    ping: function(message, endOfCommand) {
        message.channel.send('pong');
        return true;
    },

    reverse: function(message, endOfCommand) {
        messageText = message.content.substring(endOfCommand);
        
        let reversedText = [];
        messageText
            .split('')
            .map(letter => reversedText.unshift(letter))
        
        message.channel.send(reversedText.join(''));

        return true;
    },

    list: function(message, endOfCommand) {
        
        let replyList = [];

        for (let cmd in cmds) {
            if (cmds.hasOwnProperty(cmd)) {
                replyList.push('~' + cmd + '\n');
            }
        }

        message.channel.send(replyList.join(''));

        return true;
    },

    help: function(message, endOfCommand) {
        message.channel.send('For a list of commands type: ~list');
    }
}

bot.on('message', message => {
    
    // So the bot doesn't respond to itself or other bots.
    if (message.author.bot) return;

    // Check for the command trigger '~'
    if (message.content.substring(0, 1) === '~') {

        console.log('Trigger spotted!')

        const messageCommand = message.content.match(/[~](\w+)/)[1];

        console.log('Here is what I see is the command: ' + messageCommand)

        // Try to call function in cmds object.
        if (cmds[messageCommand] === undefined) {
            message.channel.send('Sorry! Command not found.');
        } else if (!cmds[messageCommand](message, messageCommand.length + 1)) {
            console.log('Command executed but did not return true.');
        }
    }
});

// get the token for the bot via user input then login
const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
interface.question("Please enter your bot's token to start: ", function(answer) {
    bot.login(answer);
})