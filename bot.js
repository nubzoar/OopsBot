const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
const path = require("path");
const pathToConfig = path.join(__dirname, '/config.json');
if (!fs.existsSync(pathToConfig)) {
    fs.writeFileSync(pathToConfig, JSON.stringify({ token: "" }));
}
const config = JSON.parse(fs.readFileSync(pathToConfig));
bot.on('ready', () => {
    console.log('I am ready! Logging in to Discord servers...');
});
if (config.token === "") {
    console.log("Please put my login token in the config.json file!");
}
else {
    bot.login(config.token);
}
