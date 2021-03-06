const Discord = require('discord.js');

module.exports = {
  name: 'avatar',
  usage: '<USER MENTION>',
  description: 'Fetches a user\'s avatar (or your own, if no user is mentioned).',
  tag: 'general',
  run: (message) => {
    const target =  message.mentions.members.first() || message.member;
    const embed = new Discord.RichEmbed()
      .setAuthor(`${target.displayName}'s Avatar`)
      .setImage(target.user.displayAvatarURL)
      .setColor(target.displayHexColor);
    message.channel.send(embed);
  }
};
