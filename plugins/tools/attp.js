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
const API_KEY = config.apilol;

module.exports = (bot) => {
  bot.onText(/^\.attp (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const text = match[1];
    const url = `https://api.lolhuman.xyz/api/attp?apikey=${API_KEY}&text=${encodeURIComponent(text)}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
      }

      const buffer = await response.buffer();
      bot.sendDocument(chatId, buffer);
    } catch (error) {
      console.error(error);
      bot.sendMessage(chatId, 'Maaf, terjadi kesalahan dalam mengonversi teks menjadi GIF.');
    }
  });

  bot.onText(/^\.attp$/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Masukan teks, contoh: /attp viki ganteng');
  });
};