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
  bot.onText(/^\.soundcloud(?!.*\bhttps?:\/\/)/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Masukan link soundcloud yang ingin Anda Dowload, contoh: .soundcloud https://soundcloud.com/agung-pranata-839330629/yang-terdalam-noah-new-version');
  });

  bot.onText(/^\.soundcloud (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const url = match[1];
    const apiUrl = `https://api.lolhuman.xyz/api/soundcloud?apikey=${apifel}&url=${encodeURIComponent(url)}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
      }

      const responseData = await response.json();
      const { title, link } = responseData.result;

      bot.sendAudio(chatId, link, {
        caption: `Title:\n${title}`
      });
    } catch (error) {
      console.error(error);
      bot.sendPhoto(chatId, config.error, { caption: 'ERROR 404 NOT FOUND'});
    }
  });
};