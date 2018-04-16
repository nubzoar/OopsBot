class CmdHelper {

    static cmdTrigger = ".";
    static cmdRegEx = new RegExp("/[" + CmdHelper.cmdTrigger + "](\w+)/");

    static argTrigger = "-";
    static argRegEx = new RegExp("/[" + CmdHelper.argTrigger + "](\w+)/");

    static cmds = require("./cmds");

    static isCmd(msg) {
        if (msg.content.substring(0, 1) === CmdHelper.cmdTrigger) {
            return true;
        }
        return false;
    }

    static hasArg(msg) {
        if (msg.content.indexOf(CmdHelper.argTrigger) >= 0) {
            return true;
        }
        return false;
    }

    static parseCommand(msg) {
        let strArray = CmdHelper.splitString(msg.content);
    }
}

module.exports = CmdHelper;