const Discord = require('discord.js');
const bot = new Discord.Client();

const fs = require("fs");
const path = require("path");
const pathToConfig : string = path.join(__dirname, '/config.json');

if (!fs.existsSync(pathToConfig)) {
    fs.writeFileSync(pathToConfig, JSON.stringify( {token: ""} ));
}
const config = JSON.parse( fs.readFileSync(pathToConfig) );

bot.on('ready', () => {
    console.log('I am ready! Logging in to Discord servers...');
});

bot.on('message', req => {

    // So the bot doesn't respond to itself or other bots.
    if (req.author.bot) return;

    
});

if (config.token === "") {
    console.log("Please put my login token in the config.json file!");
}
else {
    bot.login(config.token);
}