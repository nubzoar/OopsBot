// import the discord.js module
const discord = require('discord.js');

// create an instance of a Discord Client, and call it bot
const bot = new discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');
});

const cmds = {

    ping: {
        default: function(message, endOfCommand) {
            message.channel.send('pong');
            
            return true;
        },
        help: function(message, endOfCommand) {
            message.channel.send('The ping command simply makes me respond with "pong".');
        }
    },

    reverse: {
        default: function(message, endOfCommand) {
            let messageText = message.content.substring(endOfCommand);
            
            let reversedText = [];
            messageText
                .split('')
                .map(letter => reversedText.unshift(letter))
            
            message.channel.send(reversedText.join(''));

            return true;
        },
        help: function(message, endOfCommand) {
            message.channel.send('The reverse command makes me respond with your text reversed.');
        }
    },

    list: {
        default: function(message, endOfCommand) {
        
            let replyList = [];

            for (let cmd in cmds) {
                if (cmds.hasOwnProperty(cmd)) {
                    replyList.push('.' + cmd + '\n');
                }
            }

            message.channel.send(replyList.join(''));

            return true;
        },
        help: function(message, endOfCommand) {
            message.channel.send('The list command makes me respond with a list of all commands it knows.');
        }
    },

    help: {
        default: function(message, endOfCommand) {
            message.channel.send('For a list of commands type: .list');

            return true;
        }
    }
}

bot.on('message', message => {
    
    // So the bot doesn't respond to itself or other bots.
    if (message.author.bot) return;

    // Check for the command trigger '.'
    if (message.content.substring(0, 1) === '.') {

        console.log('Trigger spotted!')

        const messageCommand = message.content.match(/[.](\w+)/)[1];
        const endOfCommand = messageCommand.length + 2;

        console.log('Here is what I see is the command: ' + messageCommand)

        if (cmds[messageCommand === undefined]) {
            message.channel.send('Sorry! Command not found.');
        } else {
            // Check for argument "-"
            if (message.content.substring(endOfCommand, endOfCommand + 1) === '-') {

                console.log('Argument spotted!');

                const messageArgument = message.content.match(/[-](\w+)/)[1];

                console.log('Here is what I see is the argument: ' + messageArgument)

                // Try to call cmd with argument
                if (cmds[messageCommand][messageArgument] === undefined) {
                    message.channel.send('Sorry! Invalid argument.');
                } else if (!cmds[messageCommand][messageArgument](message, endOfCommand + messageArgument.length + 1)) {
                    console.log('Command executed but did not return true.');
                }

            } else {
                // Try to call default cmd with no arguments.
                if (cmds[messageCommand].default === undefined) {
                    message.channel.send('Sorry! Something went wrong. Command has no default function.');
                } else if (!cmds[messageCommand].default(message, endOfCommand)) {
                    console.log('Command executed but did not return true.');
                }
            }
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