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
- GlobalElits       [ Creator Bot ]
- Ghost       :    [ Support ] 
- Pengguna Bot Yang Selalu Support

• Recode By ( Nama Mu )
*/
const fetch = require('node-fetch')
const config = require('../../config');
const btc = config.apibot;
module.exports = (bot) => {
  bot.onText(/^\.cecan$/, async (msg) => {
    const chatId = msg.chat.id;
    const asupan = [
      `https://api.botcahx.eu.org/api/cecan/china?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/cecan/vietnam?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/cecan/thailand?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/cecan/indonesia?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/cecan/korea?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/cecan/japan?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/cecan/malaysia?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/cecan/jeni?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/cecan/jiso?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/cecan/ryujin?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/cecan/rose?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/cecan/hijaber?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/cecan/justinaxie?apikey=${btc}`
    ]
    try {
      const apiURL = pickRandom(asupan);
      const buffer = await fetch(apiURL).then(res => res.buffer())
      bot.sendPhoto(chatId, buffer);
    } catch (error) {
      console.error(error);
      bot.sendPhoto(chatId, config.error, { caption: 'ERROR 404 NOT FOUND'});
    }
  });
};
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}