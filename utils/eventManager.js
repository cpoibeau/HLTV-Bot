const fs = require('fs');

module.exports = (client) => {
  fs.readdir('./events', (err, items) => {
    if(err) throw err;

    items.forEach((file) => {
      eventName = file.split('.')[0];
      client.on(eventName, require('../events/' + eventName).bind(null, client));
    });
  });
}