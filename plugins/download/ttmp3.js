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

function getFileExtension(url) {
  const extension = url.split('.').pop().split('?')[0];
  return extension;
}

module.exports = (bot) => {
  bot.onText(/^\.ttmp3(?!.*\bhttps?:\/\/)/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Masukan link TikTok yang ingin Anda ubah ke audio, contoh: .ttmp3 https://www.tiktok.com/xxxxxxxxx');
  });

  bot.onText(/^\.ttmp3 (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const url = match[1];
    const apiUrl = `https://api.lolhuman.xyz/api/tiktokmusic?apikey=${API_KEY}&url=${encodeURIComponent(url)}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType.startsWith('audio/')) {
        throw new Error(`Invalid content type: ${contentType}`);
      }

      const audioBuffer = await response.buffer();
      const audioExtension = getFileExtension(url);
      const audioName = `tiktok.${audioExtension}`;

      bot.sendAudio(chatId, audioBuffer, { fileName: audioName });
    } catch (error) {
      console.error(error);
      bot.sendPhoto(chatId, config.error, { caption: 'ERROR 404 NOT FOUND'});
    }
  });
};