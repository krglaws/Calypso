<<<<<<< HEAD
const updatePoints = require(__basedir + '/src/utils/updatePoints.js');

module.exports = (client, message) => {
	if (message.channel.type === 'dm' || message.author.bot) return;

	// command handler
	let command;
	if (message.content.charAt(0) === client.prefix){
		const args = message.content.trim().split(/ +/g);
		command = client.commands.get(args.shift().slice(client.prefix.length).toLowerCase());
		if (command) command.run(message, args);
	}
	else {
		const reaction = client.reactions.find(r => r.prompt === message.content);
		if (reaction) reaction.run(message);
	}

	// points
	const id = message.author.id, guild = message.guild.name;
	if (!command) {
		if (message.content.includes('http') || message.attachments.size > 0) updatePoints(client, id, guild, 15); // link or file
		else updatePoints(client, id, guild);
	}
=======
module.exports = (client, message) => {
  if (message.channel.type === 'dm' || message.author.bot) return;

  // Command handler
  let command;
  if (message.content.charAt(0) === client.prefix){
    const args = message.content.trim().split(/ +/g);
    const cmd = args.shift().slice(client.prefix.length).toLowerCase();
    command = client.commands.get(cmd);
    if (!command) command = client.aliases.get(cmd); // If command not found, check aliases
    if (command) command.run(message, args);
  }
>>>>>>> 028728022c891707ad751e5b149f6a6867816b9f
};
