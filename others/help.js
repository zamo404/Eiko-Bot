const { MessageEmbed } = require("discord.js");

  const prefix = ("/");
  

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
    .setColor('F2254C')
    .setTitle("Help Command")
    .setImage("https://dribbble.com/shots/2087271-Retro-Radio/attachments/9125305?mode=media")
  .setDescription(`[  Support  ](https://discord.gg/rSXquTjmU3) - [  Invite  ](https://discord.com/api/oauth2/authorize?client_id=912442458409943091&permissions=534761045968&scope=bot)
**Music Command**
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
