const Discord = require('discord.js');
const Mongoose = require('mongoose');

const config = require('./config');
const client = new Discord.Client();

// Database connection
Mongoose.connect(config.dbConnect,  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
const connection = Mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection etablished successfully');
})

// Commands
client.commandList = new Discord.Collection()
require('./utils/commandManager')(client.commandList)

// Event manager
require('./utils/eventManager')(client);

client.on('error', console.error);
client.on('warn', console.warn);
client.on('debug', console.debug);

client.login(config.token);