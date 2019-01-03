const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("530055794750914580")
setInterval(function() {
channel.send(`yhruruoie689giu6jhg4yiuph`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
