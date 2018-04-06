class Interpreter {

    private static cmdTrigger = '.';
    private static cmdRegEx:RegExp = new RegExp("/[" + Interpreter.cmdTrigger + "](\w+)/");

    private static argTrigger = '-';
    private static argRegEx:RegExp = new RegExp("/[" + Interpreter.argTrigger + "](\w+)/");

    public static parseCommand(req): Command {
        if (req.content.substring(0, 1) === Interpreter.cmdTrigger) {

            let cmd:string = req.content.match(Interpreter.cmdRegEx)[1];

            let arg:string = null;
            if (req.content.substring(cmd.length + 2, cmd.length + 3) === Interpreter.argTrigger) {
                arg = req.content.match(Interpreter.argRegEx)[1];
            }

            return new Command(cmd, arg, req.content.substring(cmd.length + arg.length + 3), req.author, req.channel);
        }
        return null;
    }
}