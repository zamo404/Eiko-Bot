const { MessageEmbed } = require("discord.js");

  const prefix = (">");
  

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
    .setImage("https://media.discordapp.net/attachments/913075841372651560/913901265036136508/d878028b1a05983d7cd5ec6a8b482fa0.gif")
  .setDescription(`

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
    
 const disbut = require("discord-buttons")
 let button = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Invite')
        .setEmoji('🏳️‍🌈')
        .setURL('https://discord.com/oauth2/authorize?client_id=874800680269926420&permissions=8&scope=bot');////سيرفرك

 let button1 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Support')
        .setEmoji('🏳️‍🌈')
        .setURL(`https://discord.gg/KyD4S6e2dH`);

    helpEmbed.setTimestamp();

    return message.channel.send({ embed : helpEmbed , buttons : [button,button1] }).catch(console.error);
  }
};
