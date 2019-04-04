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
  
  return message.channel.send(mInfoEmbed);
  }
  
  if(cmd === '&report'){

    //!report @ned this is the reason

    let rUser = message.guild.member(message.mentions.users.first());
    if(!rUser) return message.channel.send("Couldn't find user.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Жалоба")
    .setColor("#15f153")
    .addField("Виновник", `${rUser} с ID: ${rUser.id}`)
    .addField("Обвиняет", `${message.author} с ID: ${message.author.id}')
    .addField("Место", message.channel)
    .addField("Время", message.createdAt)
    .addField("Причина", reason);

    let reportschannel = message.guild.channels.find(`name`, "логи");
    if(!reportschannel) return message.channel.send("Не могу найти место для отчёта.");

    reportschannel.send(reportEmbed);

    return;
  }
});
