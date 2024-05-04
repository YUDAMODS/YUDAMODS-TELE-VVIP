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
const apifel = config.apilol;

module.exports = (bot) => {

    
  bot.onText(/^\.ig(?:\s+(.+))?$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const url = match[1];

    if (!url) {
      bot.sendMessage(chatId, 'Masukan link Instagram yang Anda Ingin Download, contoh: .igdl https://www.instagram.com/reel/C2M0iJnJRaU/?utm_source=ig_web_copy_link');
      return;
    }
    const apiUrl = `https://api.lolhuman.xyz/api/instagram?apikey=${apifel}&url=${encodeURIComponent(url)}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
      }

      const responseData = await response.json();
      const link = responseData.result;


      bot.sendVideo(chatId, `${link}`, {
        caption: `🎞️ Video instagram yang kamu minta:\n\n⚫ Enjoy!`
      });
    } catch (error) {
      console.error(error);
      bot.sendPhoto(chatId, config.error, { caption: 'ERROR 404 NOT FOUND'});
    }
  });
};