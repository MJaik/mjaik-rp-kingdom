const Discord = require('discord.js')
const client = new Discord.Client
let prefix = '&'

client.login(process.env.BOT_TOKEN)

client.on("ready", async () => {
  client.user.setActivity('&help | @MJaik#2003',{ type: 'PLAYING'});
});

client.on("message", async => {
  
});
