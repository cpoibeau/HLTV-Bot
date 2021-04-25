const Guild = require('../models/guild.model')

module.exports = (client) => {
  Array.from(client.guilds.cache.keys()).forEach( (el) => {
    let guild = client.guilds.cache.get(el)
    console.log(guild)

    Guild.findOneAndUpdate({ guildID: guild.id },
      { $setOnInsert: {
        guildID: guild.id,
        guildName: guild.name,
        prefix: 'cs-'
        } },
      { upsert: true, new: true },
    (err) => {
      if (err) console.error(err);
    });
  });

  client.user.setActivity(`Say lb-help for help !`, {
    url: 'https://discord.js.org',
    type: 'PLAYING'
  });

  console.log('Client ready !');
}