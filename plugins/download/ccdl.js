
config = require('../../config');
const https = require('https');
const btc = config.apibot;
module.exports = (bot) => {
  bot.onText(/^\.capcut(?:\s+(.+))?$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const url = match[1];

    if (!url) {
      bot.sendMessage(chatId, 'Masukan link capcut yang Anda Ingin Download, contoh: .capcut link ');
      return;
    }
        try {
    const api = await https.get(`https://api.botcahx.eu.org/api/dowloader/capcut?url=${url}&apikey=${btc}`, response => {
      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });
      response.on('end', async () => {
        const res = JSON.parse(data);
        var { 
          video_ori, 
          title, 
          digunakan,
          cover,
          author_profile
        } = res.result
        bot.sendVideo(chatId, video_ori, { caption: `Title: ${title}\nDigunakan: ${digunakan}\nThumbnail: ${cover}\nProfile: ${author_profile}`, parse_mode: 'Markdown' });
      });
    }).on('error', error => {
      console.log(error);
      bot.sendMessage(chatId, 'Error ');
    });
  } catch (e) {
    console.log(e)
      bot.sendMessage(chatId, 'Error ');
  }
  });
};
