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
const axios = require('axios');
const config = require('../../config');
const btc = config.apibot;
module.exports = (bot) => {
  bot.onText(/\.asupan/, async (msg) => {
    const chatId = msg.chat.id;
    const asupan = [
      `https://api.botcahx.eu.org/api/asupan/rikagusriani?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/asupan/santuy?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/asupan/ukhty?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/asupan/bocil?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/asupan/gheayubi?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/asupan/natajadeh?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/asupan/euni?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/asupan/douyin?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/api/asupan/cecan?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/api/asupan/hijaber?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/api/asupan/asupan?apikey=${btc}`,
      `https://api.botcahx.eu.org/api/api/asupan/anony?apikey=${btc}`   
    ]
    try {
      const apiURL = pickRandom(asupan);
      const { data } = await axios.get(apiURL, { responseType: 'arraybuffer' });
      bot.sendVideo(chatId, data);
    } catch (error) {
      console.error(error);
      bot.sendPhoto(chatId, config.error, { caption: 'ERROR 404 NOT FOUND'});
    }
  });
};
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}