const Discord = require('discord.js')
const client = new Discord.Client
let prefix = '&'

client.login(process.env.BOT_TOKEN)

client.on("message", async message => {   
client.user.setActivity('&help | @MJaik#2003',{ type: 'WATCHING' }) 
if(message.author.bot) return;
if(message.channel.type === "dm") return;
  
});
