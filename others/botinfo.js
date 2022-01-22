const { MessageEmbed } = require("discord.js");

  const prefix = ("-");
  

module.exports = {
  name: "botinfo",
  aliases: ["binfo"],
  description: "Display all commands and descriptions",
  cooldown: 3,
  edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('BLACK')
    .setTitle("Eiko About")
    .setImage("")
  .setDescription(`

<:ano_7:923558660850999356> **__My Name__** : <@917858292699627551>

<:ano_33:932184015480447026> **__Owner Bot__** : <@832437049935527936>

<:ano_4:923558596833341481> **__Admin Bot__** : <@807236065001865217>

⭐️ **__Servers__** : \`${client.guilds.cache.size}\`

🗂 **__Channels__** : \`${client.channels.cache.size}\`

🏓 **__My Ping__** : \`${client.ws.ping}\`

`)
    
 const disbut = require("discord-buttons")
 let button = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Invite')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=917858292699627551&permissions=8&scope=bot');////سيرفرك

    helpEmbed.setTimestamp();

    return message.channel.send({ embed : helpEmbed , buttons : [button] }).catch(console.error);
  }
};
