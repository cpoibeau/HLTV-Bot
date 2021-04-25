const Guild = require('../models/guild.model'); 

module.exports = (client, msg) => {
  Guild.findOne(
    { guildID: msg.guild.id },
    (err, doc) => {
      if(err) console.error(err);
      let prefix
      if (doc) {
        prefix = doc.prefix
      } else {
        prefix = 'cs-'
      }

      if(!msg.content.startsWith(prefix)) return
      console.log(`${msg.author.tag} used : '${msg.content}' on ${msg.guild}`)
    }
    );
}