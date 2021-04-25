const fs = require('fs');

module.exports = (commandList) => {
  fs.readdir('./commands', (err, items) => {
    if(err) throw err;

    items.forEach((file) => {
      commandName = file.split('.')[0];
      commandList.set(commandName, require('../commands/' + commandName))
    });
  });
}