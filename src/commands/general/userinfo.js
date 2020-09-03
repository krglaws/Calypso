const Command = require('../Command.js');
const Discord = require('discord.js');
const moment = require('moment');

module.exports = class UserInfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'userinfo',
      aliases: ['user', 'ui'],
      usage: '<USER MENTION>',
      description: 'Fetches a user\'s information (or your own, if no user is mentioned).',
      type: 'general'
    });
  }
  run(message) {
    const target =  message.mentions.members.first() || message.member;
    const embed = new Discord.RichEmbed()
      .setAuthor(target.displayName, target.user.displayAvatarURL)
      .setDescription(`Current status is **${target.presence.status}**.`)
      .setThumbnail(target.user.displayAvatarURL)
      .setFooter(`${target.user.username}#${target.user.discriminator} | User ID: ${target.id}`)
      .setTimestamp()
      .addField('Joined server on', moment(target.joinedAt).format('MMM DD YYYY'), true)
      .addField('Joined Discord on', moment(target.user.createdAt).format('MMM DD YYYY'), true)
      .setColor(target.displayHexColor);
    message.channel.send(embed);
  }
};
