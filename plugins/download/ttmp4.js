/*
  ( Base Ori WannOFFC°GhostMods°GlobalElits )

Script Ini Murni Bikinan Sendiri, Saya Hanya Sekedar Kroco Penghuni Inti Bumi.

Note : 
• Jangan Membagikan Script Ini Secara Free !!
• Jangan Mengganti Name Developer Script !!
• Jangan Menjual Script Ini Di Atas Harga Yang Saya Jual !!

Thanks To :                                
- Allah Swt 
- Nabi Muhammad Saw         
- My Team
- WannOFFC   :   [ Support ] 
- GlobalElits       [ Owner Script ]
- Ghost       :    [ Support ] 
- Pengguna Bot Yang Selalu Support

• Recode By ( Nama Mu )
*/
const fetch = require('node-fetch');
const config = require('../../config');
// Memisahkan URL dan API key ke dalam variabel konfigurasi
const API_KEY = config.apilol;

module.exports = (bot) => {
  bot.onText(/^\.ttmp4(?:\s+(.+))?$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const url = match[1];

    if (!url) {
      bot.sendMessage(chatId, 'Masukan link TikTok yang ingin Anda download, contoh: .ttmp4 https://www.tiktok.com/@username/video/1234567890123456789');
      return;
    }

    const apiUrl = `https://api.lolhuman.xyz/api/tiktok?apikey=${API_KEY}&url=${encodeURIComponent(url)}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
      }

      const responseData = await response.json();
      const { link, title, author, duration } = responseData.result;

      const videoCaption = `🎬 Judul: ${title}\n👤 Penulis: @${author.username}\n⏱ Durasi: ${duration} detik`;

      bot.sendVideo(chatId, link, {
        caption: `🎞️ Video TikTok yang kamu minta:\n\n${videoCaption}\n\n⚫ Enjoy!`
      });
    } catch (error) {
      console.error(error);
      bot.sendPhoto(chatId, config.error, { caption: 'ERROR 404 NOT FOUND'});
    }
  });
};