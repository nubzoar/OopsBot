const Commands = {

    ping: {
        default: function(message, endOfCommand) {
            message.channel.send('pong');
            
            return true;
        },
        help: function(message, endOfCommand) {
            message.channel.send('The ping command simply makes me respond with "pong".');
        }
    },
    
    confuse: {
        default: function(message, endOfCommand) {
            let messageText = message.content.substring(endOfCommand);

            let confusedText = [];

            messageText
                .split('')
                .map(function(character, index) {
                    if (index % 2 === 0) {
                        confusedText.push(character.toUpperCase());
                    } else {
                        confusedText.push(character.toLowerCase());
                    }
                })

            message.channel.send(confusedText.join(''));

            return true

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

module.exports = Commands;