<<<<<<< HEAD
const Database = require('better-sqlite3');
const db = new Database(__basedir + '/data/db.sqlite');

module.exports = (client) => {

  // create table
  db.prepare('CREATE TABLE IF NOT EXISTS scores (id TEXT, guild TEXT, points INTEGER);').run();
  db.prepare('CREATE UNIQUE INDEX IF NOT EXISTS idx ON scores (id, guild);').run();
  db.prepare('CREATE TABLE IF NOT EXISTS config (guild TEXT PRIMARY KEY, defaultChannel TEXT, memberRole TEXT, modRole TEXT, crownRole TEXT);').run();
  db.pragma('synchronous = 1');
  db.pragma('journal_mode = wal');

  // prepare statements
  client.getScore = db.prepare('SELECT * FROM scores WHERE id = ? AND guild = ?');
  client.setScore = db.prepare('INSERT OR REPLACE INTO scores (id, guild, points) VALUES (@id, @guild, @points);');
  client.clearScore = db.prepare('UPDATE scores SET points = 0');
  client.getTop10 = db.prepare('SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;');
  client.getScoreboard = db.prepare('SELECT * FROM scores WHERE guild = ? ORDER BY points DESC;');
  client.getRow = db.prepare('SELECT * FROM config WHERE guild = ?');
  client.setRow = db.prepare('INSERT OR REPLACE INTO config (guild, defaultChannel, memberRole, modRole, crownRole) VALUES (@guild, @defaultChannel, @memberRole, @modRole, @crownRole);');

  console.log('Booted up successfully. Calypso is now online.');
  console.log(`Calypso is running on ${client.guilds.size} server(s).`);
=======
module.exports = (client) => {
  // Update db with new servers
  client.logger.info('Updating database...');
  client.guilds.forEach(guild => {
    client.db.guildSettings.insertRow.run(guild.id, guild.name, guild.systemChannelID);
  });

  client.logger.info('Calypso is now online');
  client.logger.info(`Calypso is running on ${client.guilds.size} server(s)`);
>>>>>>> 028728022c891707ad751e5b149f6a6867816b9f
  client.user.setPresence({ status: 'online', game: { name: 'your commands', type: 2 } });
};
