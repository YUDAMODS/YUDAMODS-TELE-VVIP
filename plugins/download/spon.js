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
const apifel = config.apibot;

module.exports = (bot) => {
  bot.onText(/^\.spotify(?:\s+(.+))?$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const urlx = match[1];

    if (!urlx) {
      bot.sendMessage(chatId, 'Masukan link spotify yang ingin Anda download, contoh: .spotify https://open.spotify.com/track/3zakx7RAwdkUQlOoQ7SJRt');
      return;
    }

    try {
      const response = await fetch(`https://api.botcahx.eu.org/api/download/spotify?url=${encodeURIComponent(urlx)}&apikey=${apifel}`);
      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
      }

      const responseData = await response.json();
      
      const { thumbnail, title, name, duration, url } = responseData.result.data;
const { 
id,
type
} = responseData.result.data.artist;
      bot.sendPhoto(chatId, `${thumbnail}`, {
        caption: `
 *${title}*
◦ *Name:* ${name}
◦ *Link:* ${urlx}
◦ *Durasi:* ${duration} detik`
      });
      bot.sendAudio(chatId, url);
    } catch (error) {
      console.error(error);
      bot.sendPhoto(chatId, config.error, { caption: 'ERROR 404 NOT FOUND'});
    }
  });
};