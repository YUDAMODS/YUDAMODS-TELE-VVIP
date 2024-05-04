const { readdirSync, statSync, unlinkSync } = require('fs');
const { join } = require('path');

async function handletemp(bot) {
  bot.onText(/^\.cleartemp$/, async (msg) => {

  const tmp = ['./temp'];
  const filenames = [];

  tmp.forEach(dirname => {
    readdirSync(dirname).forEach(file => {
      filenames.push(join(dirname, file));
    });
  });

  const deletedFiles = [];

  filenames.forEach(file => {
    const stats = statSync(file);

    if (stats.isDirectory()) {
      console.log(`Skipping directory: ${file}`);
      bot.sendMessage(msg.chat.id, `Skipping directory: ${file}`);
    } else {
      unlinkSync(file);
      deletedFiles.push(file);
    }
  });


  if (deletedFiles.length > 0) {
    console.log('Deleted files:', deletedFiles);
    bot.sendMessage(msg.chat.id, `Deleted files:\n${deletedFiles.join('\n')}`);
  }

  if (deletedFiles.length == 0) {
    bot.sendMessage(msg.chat.id, 'tidak ada file yang tersisa di temp');
  }
});
}
module.exports = handletemp;