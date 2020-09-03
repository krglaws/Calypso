<<<<<<< HEAD
const Discord = require('discord.js');
const config = require('./config.json');
const schedule = require('node-schedule');
global.__basedir = __dirname;

// setup
const client = new Discord.Client();
client.token = config.token;
client.prefix = config.prefix;
client.commands = new Discord.Collection();
client.reactions = new Discord.Collection();
client.topics = []; // for trivia
client.startTimes = new Discord.Collection(); // for voiceStateUpdate

// initialize client
function init() {
	require('./src/loaders/eventLoader.js')(client);
	require('./src/loaders/commandLoader.js')(client);
	require('./src/loaders/reactionLoader.js')(client);
	require('./src/loaders/topicLoader.js')(client);
	client.login(client.token);
	schedule.scheduleJob('0 19 * * 5', () => { // 7:00 Friday
		require('./src/utils/updateCrown.js')(client);
	});
}

init();
=======
const config = require('./config.json');
const Client = require('./src/Client.js');
global.__basedir = __dirname;

// setup
const client = new Client(config);

// initialize client
function init() {
  client.loadEvents('./src/events');
  client.loadCommands('./src/commands');
  client.login(client.token);
}

init();
>>>>>>> 028728022c891707ad751e5b149f6a6867816b9f
