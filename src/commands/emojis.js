const Discord = require('discord.js');

module.exports = {
  name: 'emojis',
  usage: '',
  description: 'Displays a list of all current emojis.',
  tag: 'general',
  run: async (message) => {
    const emojis = message.guild.emojis;
    let emojiList = '';
    emojis.forEach(e => emojiList = emojiList + `${e} :${e.name}: \n`);
    const embed = new Discord.RichEmbed()
      .setAuthor('Emoji List', message.guild.iconURL)
      .setDescription(emojiList)
      .setColor((await message.guild.fetchMember(message.client.user)).displayHexColor);
    message.channel.send(embed);
  }
};
