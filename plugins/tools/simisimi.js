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
const axios = require('axios');
const config = require('../../config');
// Memisahkan URL dan API key ke dalam variabel konfigurasi
const API_KEY = config.apilol;

module.exports = (bot) => {
  bot.onText(/\/simi (.+)/, async (msg, match) => {
    try {
      const question = match[1];
      const query = encodeURIComponent(question);
      const apiUrl = `https://api.lolhuman.xyz/api/simi?apikey=${API_KEY}&text=${query}&badword=true`;
      const response = await axios.get(apiUrl);
      const answer = response.data.result;
      bot.sendMessage(msg.chat.id, answer);
    } catch (error) {
      console.log(error);
      bot.sendMessage(msg.chat.id, 'Maaf, terjadi kesalahan saat mencari jawaban.');
    }
  });

  bot.onText(/\/simi$/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Contoh: /simi halo simi');
  });
};