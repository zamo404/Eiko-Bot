const { MessageEmbed } = require("discord.js");

  const prefix = ("p.");
  

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  cooldown: 3,
  edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .setTitle("Help Command")
    .setImage("https://cdn.discordapp.com/attachments/776114986879549471/807229581962510366/image0.gif")
  .setDescription(`[  Support  ](https://discord.gg/Z7JgEkGtak) - [  Invite  ](https://discord.com/api/oauth2/authorize?client_id=787948438700032030&permissions=1647705169&scope=bot)

\`prefix\` : \`p.\`

🎶__Music Command__
\`filter(fi)\`  -  \`loop(l)\`
\`lyrics(ly)\`  -  \`np\`
\`pause\`  -  \`play(p)\`
\`queue(qu)\`  -  \`radio\`
\`remove\`  -  \`resume(r)\`
\`search\`  -  \`shuffle(mix)\`
\`skip(s)\`  -  \`skipto(st)\`
\`stop\`  -  \`volume(vol)\`


`)
    
       

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
