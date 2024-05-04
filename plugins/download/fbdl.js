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
- GlobalElits       [ Creator ]
- Ghost       :    [ Support ] 
- Pengguna Bot Yang Selalu Support

• Recode By ( Nama Mu )
*/
config = require('../../config');
const fetch = require('node-fetch');
const btc = config.apibot;
module.exports = (bot) => {
  bot.onText(/^\.fbdl(?:\s+(.+))?$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const url = match[1];

    if (!url) {
      bot.sendMessage(chatId, 'Masukan link facebook yang Anda Ingin Download, contoh: .fbdl ');
      return;
    }
        try {
        const res = await fetch(`https://api.botcahx.eu.org/api/dowloader/fbdown?url=${url}&apikey=${btc}`);
        const json = await res.json();
        let urlsx = json.result.url.urls;
        for (let ursl of urlsx) {
            if (ursl.sd) {
                bot.sendVideo(chatId, ursl.sd);
            }
        }
    } catch (error) {
        console.log(error);
        bot.sendMessage(chatId, 'Error');
      return;
    }
  });
};