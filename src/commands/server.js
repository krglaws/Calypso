const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
  name: 'server',
  usage: '',
  description: 'Fetches information and statistics about the server.',
  tag: 'general',
  run: (message, args) => {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setThumbnail(message.guild.iconURL)
      .addField('Users', message.guild.members.size, true)
      .addField('Owner', message.guild.owner.displayName, true)
      .addField('Region', message.guild.region, true)
      .addField('Created On', moment(message.guild.createdAt).format('MMM DD YYYY'), true)
      .addField('Roles', message.guild.roles.array().filter(r => r.name.indexOf('#') !== 0).join(' '))
      .addField('Text Channels', message.guild.channels.array().filter(c => c.type === 'text').join(' '))
      .setFooter(`Server ID: ${message.guild.id}`)
      .setTimestamp()
      .setColor(message.client.color);
    message.channel.send(embed);
  }
}
