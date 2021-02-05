const { MessageEmbed } = require("discord.js");

  const prefix = ("p.");


module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .setTitle("Help")
  .setImage("https://cdn.discordapp.com/attachments/776114986879549471/807229581962510366/image0.gif")
  .setDescription([  SUPPORT  ](https://discord.gg/Z7JgEkGtak) - [   INVITE   ](https://discord.com/api/oauth2/authorize?client_id=787948438700032030&permissions=1647705169&scope=bot) 

prefix=\${prefix}`



Music

`${prefix}filter(fi)` - `${prefix}loop(l)` 
`${prefix}lyrics(ly)` - `${prefix}np`
`${prefix}pause` - `${prefix}play(p)` 
`${prefix}queue(qu)` - `${prefix}radio`
`${prefix}remove` - `${prefix}resume(r)`
`${prefix}search` - `${prefix}volume(vol)` 
`${prefix}shuffle(mix)` - `${prefix}skip(s)` 
`${prefix}skipto(st)` - `${prefix}stop`



`)


    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
Robot.WiLdERYesterday at 12:02 AM
const { MessageEmbed } = require("discord.js");

  const prefix = ("p.");


module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .setTitle("Help")
  .setImage("https://cdn.discordapp.com/attachments/776114986879549471/807229581962510366/image0.gif")
  .setDescription(`[  SUPPORT  ](https://discord.gg/Z7JgEkGtak) - [   INVITE   ](https://discord.com/api/oauth2/authorize?client_id=787948438700032030&permissions=1647705169&scope=bot) 
\`
prefix=${prefix}

${prefix}help - ${prefix}uptime 
${prefix}ping - ${prefix}prefix

Music

${prefix}filter(fi) - ${prefix}loop(l)
${prefix}lyrics(ly) - ${prefix}np
${prefix}pause - ${prefix}play(p) 
${prefix}queue(qu) - ${prefix}radio
${prefix}remove - ${prefix}resume(r)
${prefix}search - ${prefix}volume(vol) 
${prefix}shuffle(mix) - ${prefix}skip(s) 
${prefix}skipto(st) - ${prefix}stop
\`

`)


    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
