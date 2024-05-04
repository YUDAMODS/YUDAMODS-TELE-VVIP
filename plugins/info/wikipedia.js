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
  bot.onText(/\.wiki (.+)/, async (msg, match) => {
    try {
      const query = match[1];
      const apiUrl = `https://api.lolhuman.xyz/api/wiki?apikey=${API_KEY}&query=${query}`;
      const response = await axios.get(apiUrl);
      const summary = response.data.result.replace(/\\n/g, '\n');
      bot.sendMessage(msg.chat.id, summary);
    } catch (error) {
      console.error(error);
      bot.sendMessage(msg.chat.id, 'Maaf, terjadi kesalahan saat mengambil data.');
    }
  });

  bot.onText(/\.wiki$/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Apa yang ingin anda tanyakan? Contoh: /wiki momo hirai');
  });
};