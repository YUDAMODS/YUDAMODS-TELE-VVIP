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
const fetch = require('node-fetch');
const config = require('../../config');
const apifel = config.apibot;

module.exports = (bot) => {
    bot.onText(/^\.stalkml(?:\s+(\w+))?$/, async (msg, match) => {
      const chatId = msg.chat.id;
      const id = match[1];
      const srv = match[2];
      if (!id) {
        bot.sendMessage(chatId, 'Masukan username, contoh: .stalkml id srv');
        return;
      }
      const apiUrl = `https://api.botcahx.eu.org/api/stalk/ml?id=${id}&server=${srv}&apikey=${apifel}`;
  
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Request failed with status code ${response.status}`);
        }
           const responseData = await response.json();
           const { username } = responseData.result;


      bot.sendMessage(chatId, `
╭─ •  「 *Ml Stalk* 」
│  ◦  Username : ${username}
╰──── •`);
      } catch (error) {
        console.error(error);
        text = 'Maaf, terjadi kesalahan saat mengambil data.';
      
                bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
      }
    });
  };