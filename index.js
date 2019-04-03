const Discord = require('discord.js')
const client = new Discord.Client
let prefix = '&'

client.login(process.env.BOT_TOKEN)

client.on("ready", async () => {
  client.user.setActivity('&help | @MJaik#2003',{ type: 'PLAYING'});
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  if(cmd === '&hello') {
  return message.channel.send("Привет!");
  }
});
