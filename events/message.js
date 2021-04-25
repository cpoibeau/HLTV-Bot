const Guild = require('../models/guild.model'); 

module.exports = (client, msg) => {
  Guild.findOne(
    { guildID: msg.guild.id },
    (err, doc) => {
      if(err) console.error(err);
      let prefix;
      if (doc) {
        prefix = doc.prefix;
      } else {
        prefix = 'cs-';
      }

      if(!msg.content.startsWith(prefix)) return;
      console.log(`${msg.author.tag} used : '${msg.content}' on ${msg.guild}`);

      let args = msg.content.split(/ +/g);
      reg = new RegExp(prefix + '(\\S+)');
      let cmd = args.shift().toLowerCase().match(reg)[1];

      console.log(client.commandList)
      console.log(`Prefix : ${prefix}; Args : ${args}`)
      if (!client.commandList.has(cmd)){
        msg.channel.send('Unknown command')
        return
      };
      client.commandList.get(cmd)(client, msg, prefix, args);
    }
    );
}