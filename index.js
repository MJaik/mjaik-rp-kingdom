const Discord = require('discord.js')
const client = new Discord.Client
let prefix = '&'

client.login(process.env.BOT_TOKEN)

bot.on("ready", async () => {
  bot.user.setGame("&help | @MJaik#2003");
});
