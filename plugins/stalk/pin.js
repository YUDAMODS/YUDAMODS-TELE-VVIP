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
- WannOFFC   :   [ My Self ] 
- GlobalElits       [ Support ]
- Ghost       :    [ Support ] 
- Pengguna Bot Yang Selalu Support

• Recode By ( Nama Mu )
*/
/**
 * Source Code By sandy
 * Don't Forget Smile
 * This Bot Telegram Using Api Official
 * Thank You
 */
const axios = require('axios');
const settings = require('../../config')
const apifel = settings.apilol;

function pinHandler(bot, msg, match) {
  const query = match[1] ? encodeURIComponent(match[1]) : null;

  if (!query) {
    bot.sendMessage(msg.chat.id, 'Maaf, masukkan nama foto yang ingin Anda cari. Contoh: .pinterest momo hirai');
    return;
  }

  const apiUrl = `https://api.lolhuman.xyz/api/pinterest?apikey=${apifel}&query=${query}`;

  axios.get(apiUrl)
    .then(response => {
      const imageUrl = response.data.result;

      bot.sendPhoto(msg.chat.id, imageUrl);
    })
    .catch(error => {
      console.log(error);
      text = 'Maaf, terjadi kesalahan saat mengambil data.';
    
              bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
    });
}

module.exports = function(bot) {
  bot.onText(/^\.pin(?:\s+(.+))?$/, (msg, match) => {
    pinHandler(bot, msg, match);
  });
};
