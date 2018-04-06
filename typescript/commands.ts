class Command {

    name:string;
    argument:string;
    message:string;
    author;
    channel;

    constructor(name:string, arg:string, msg:string, auth, chan) {
        this.name = name;
        this.argument = arg;
        this.message = msg;
        this.author = auth;
        this.channel = chan;
    }

    public static ping: Function = function(cmd:Command) {
        switch (cmd.argument) {
            case "help":
                cmd.channel.send('The ping command simply makes me respond with "pong".');
                break;
        
            default:
                cmd.channel.send('pong');
                break;
        }
    }
}