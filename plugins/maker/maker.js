const fetch = require('node-fetch');
const axios = require('axios');
const config = require('../../config');
const fs = require('fs');
const token = config.token;
const btc = config.apibot;
const API_KEY = config.apilol;
async function makerHandler(bot) {
// Menangani pesan yang berisi foto
bot.onText(/^\.agedetect$/, async (msg) => {
  const chatId = msg.chat.id;

  // menagngapai replay foto yang dikirim oleh pengguna
  if (msg.reply_to_message && msg.reply_to_message.photo) {
    const photoId = msg.reply_to_message.photo[msg.reply_to_message.photo.length - 1].file_id;
const pingMsg = await bot.sendMessage(chatId, '🔍 Scann...');
    const photo = await bot.getFile(photoId);
    const photoUrl = `https://api.telegram.org/file/bot${token}/${photo.file_path}`;

    const api = await fetch(`https://api.lolhuman.xyz/api/agedetect?apikey=${API_KEY}&img=${photoUrl}`);
    const image = await api.json();
    bot.editMessageText(`${image.result}`, {
        chat_id: chatId,
        message_id: pingMsg.message_id
      })
      .catch((error) => {

        bot.editMessageText(`[ ! ] Identifikasi Gagal.`, {
        chat_id: chatId,
        message_id: pingMsg.message_id
      });
            });
  } else {
    bot.sendMessage(chatId, 'Balas foto yang ingin ada lihat umurnya dengan perintah .agedetect');
  }
});
// Menangani pesan yang berisi foto
bot.onText(/^\.remini$/, async (msg) => {
  const chatId = msg.chat.id;

  // menagngapai replay foto yang dikirim oleh pengguna
  if (msg.reply_to_message && msg.reply_to_message.photo) {
    const photoId = msg.reply_to_message.photo[msg.reply_to_message.photo.length - 1].file_id;
     bot.sendMessage(chatId, '🔍 wait....');
    const photo = await bot.getFile(photoId);
    const photoUrl = `https://api.telegram.org/file/bot${token}/${photo.file_path}`;

    const api = await fetch(`https://api.botcahx.eu.org/api/tools/remini?url=${photoUrl}&apikey=${btc}`);
    const image = await api.json();
          // Mengirim foto yang sudah diedit ke pengguna
          bot.sendPhoto(chatId, image.url, { caption: `remini` })
      .catch((error) => {

        bot.sendMessage(chatId, `[ ! ] Identifikasi Gagal.`)
      });
  } else {
    bot.sendMessage(chatId, 'Balas foto yang ingin remini dengan perintah .remini');
  }
});
bot.onText(/^\.jadianime$/, async (msg) => {
  const chatId = msg.chat.id;

  // menagngapai replay foto yang dikirim oleh pengguna
  if (msg.reply_to_message && msg.reply_to_message.photo) {
    const photoId = msg.reply_to_message.photo[msg.reply_to_message.photo.length - 1].file_id;
   bot.sendMessage(chatId, '🔍 wait');
    const photo = await bot.getFile(photoId);
    const photoUrl = `https://api.telegram.org/file/bot${token}/${photo.file_path}`;

       const old = new Date()
			 const res = await fetch(`https://api.botcahx.eu.org/api/maker/jadianime3d?url=${photoUrl}&apikey=${btc}`)
			 const convert = await res.json()
			 const buff = await fetch(convert.result.output.fileUrl)
           .then(res => res.buffer())
               // Mengirim foto yang sudah diedit ke pengguna
           bot.sendPhoto(chatId, buff, { caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` })
      .catch((error) => {
        console.log(error);
        bot.sendMessage(chatId, `[ ! ] Identifikasi Gagal.`)
      });
  } else {
    bot.sendMessage(chatId, 'Balas foto yang ingin jadianime dengan perintah .jadianime');
  }
});
bot.onText(/^\.jadigta$/, async (msg) => {
  const chatId = msg.chat.id;

  // menagngapai replay foto yang dikirim oleh pengguna
  if (msg.reply_to_message && msg.reply_to_message.photo) {
    const photoId = msg.reply_to_message.photo[msg.reply_to_message.photo.length - 1].file_id;
   bot.sendMessage(chatId, '🔍 wait');
    const photo = await bot.getFile(photoId);
    const photoUrl = `https://api.telegram.org/file/bot${token}/${photo.file_path}`;

       const old = new Date()
			 const res = await fetch(`https://api.botcahx.eu.org/api/maker/jadigta?url=${photoUrl}&apikey=${btc}`)
			 const convert = await res.json()
			 const buff = await fetch(convert.result)
           .then(res => res.buffer())
               // Mengirim foto yang sudah diedit ke pengguna
           bot.sendPhoto(chatId, buff, { caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` })
      .catch((error) => {
        console.log(error);
        bot.sendMessage(chatId, `[ ! ] Identifikasi Gagal.`)
      });
  } else {
    bot.sendMessage(chatId, 'Balas foto yang ingin jadigta dengan perintah .jadigta');
  }
});
bot.onText(/^\.jadizombie$/, async (msg) => {
  const chatId = msg.chat.id;

  // menagngapai replay foto yang dikirim oleh pengguna
  if (msg.reply_to_message && msg.reply_to_message.photo) {
    const photoId = msg.reply_to_message.photo[msg.reply_to_message.photo.length - 1].file_id;
   bot.sendMessage(chatId, '🔍 wait');
    const photo = await bot.getFile(photoId);
    const photoUrl = `https://api.telegram.org/file/bot${token}/${photo.file_path}`;

       const old = new Date()
			 const res = await fetch(`https://api.botcahx.eu.org/api/maker/jadizombie?url=${photoUrl}&apikey=${btc}`)
			 const convert = await res.json()
			 const buff = await fetch(convert.result)
           .then(res => res.buffer())
               // Mengirim foto yang sudah diedit ke pengguna
           bot.sendPhoto(chatId, buff, { caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` })
      .catch((error) => {
        console.log(error);
        bot.sendMessage(chatId, `[ ! ] Identifikasi Gagal.`)
      });
  } else {
    bot.sendMessage(chatId, 'Balas foto yang ingin jadizombie dengan perintah .jadizombie');
  }
});
bot.onText(/^\.removebg$/,async (msg) => {
  const chatId = msg.chat.id;

  // menagngapai replay foto yang dikirim oleh pengguna
  if (msg.reply_to_message && msg.reply_to_message.photo) {
    const photoId = msg.reply_to_message.photo[msg.reply_to_message.photo.length - 1].file_id;
   bot.sendMessage(chatId, '🔍 wait');
    const photo = await bot.getFile(photoId);
    const photoUrl = `https://api.telegram.org/file/bot${token}/${photo.file_path}`;

       const old = new Date()
			 const api = await fetch(`https://api.botcahx.eu.org/api/tools/removebg?url=${photoUrl}&apikey=${btc}`)
			 const image = await api.json();
        const url = image.url.result;
               // Mengirim foto yang sudah diedit ke pengguna
           bot.sendPhoto(chatId, url, { caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` })
      .catch((error) => {
        console.log(error);
        bot.sendMessage(chatId, `[ ! ] Identifikasi Gagal.`)
      });
  } else {
    bot.sendMessage(chatId, 'Balas foto yang ingin removebg dengan perintah .removebg');
  }
});
bot.onText(/^\.hd$/,  async (msg) => {
  const chatId = msg.chat.id;

  // menagngapai replay foto yang dikirim oleh pengguna
  if (msg.reply_to_message && msg.reply_to_message.photo) {
    const photoId = msg.reply_to_message.photo[msg.reply_to_message.photo.length - 1].file_id;
   bot.sendMessage(chatId, '🔍 wait');
    const photo = await bot.getFile(photoId);
    const photoUrl = `https://api.telegram.org/file/bot${token}/${photo.file_path}`;

       const old = new Date()
       const api = await fetch(`https://api.botcahx.eu.org/api/tools/remini-v3?url=${photoUrl}&resolusi=4&apikey=${btc}`);
       const image = await api.json();
       const url = image.url;
               // Mengirim foto yang sudah diedit ke pengguna
           bot.sendPhoto(chatId, url, { caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` })
      .catch((error) => {
        console.log(error);
        bot.sendMessage(chatId, `[ ! ] Identifikasi Gagal.`)
      });
  } else {
    bot.sendMessage(chatId, 'Balas foto yang ingin hd dengan perintah .hd');
  }
});
bot.onText(/^\.unblur$/,  async (msg) => {
  const chatId = msg.chat.id;

  // menagngapai replay foto yang dikirim oleh pengguna
  if (msg.reply_to_message && msg.reply_to_message.photo) {
    const photoId = msg.reply_to_message.photo[msg.reply_to_message.photo.length - 1].file_id;
   bot.sendMessage(chatId, '🔍 wait');
    const photo = await bot.getFile(photoId);
    const photoUrl = `https://api.telegram.org/file/bot${token}/${photo.file_path}`;

       const old = new Date()
       const api = await fetch(`https://api.botcahx.eu.org/api/tools/remini-v2?url=${photoUrl}&apikey=${btc}`);
       const response = await api.text();
       let image;
       try {
         image = JSON.parse(response);
       } catch (error) {
         console.error(`parse: ${error}`);
         return;
       }
       const { url } = image;
               // Mengirim foto yang sudah diedit ke pengguna
           bot.sendPhoto(chatId, url, { caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` })
      .catch((error) => {
        console.log(error);
        bot.sendMessage(chatId, `[ ! ] Identifikasi Gagal.`)
      });
  } else {
    bot.sendMessage(chatId, 'Balas foto yang ingin unblur dengan perintah .unblur');
  }
});
}
module.exports = makerHandler;
