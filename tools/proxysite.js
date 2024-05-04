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
  bot.onText(/\/proxy (.+)/, async (msg, match) => {
    const websiteUrl = match[1];
    try {
      const response = await axios.get(`https://api.lolhuman.xyz/api/proxysite?apikey=${API_KEY}&url=${websiteUrl}`);
      const proxyResult = response.data.result;
      bot.sendMessage(msg.chat.id, `Berikut adalah hasil proxy untuk ${websiteUrl}:\n${proxyResult}`);
    } catch (error) {
      console.log(error);
      bot.sendMessage(msg.chat.id, 'Maaf, terjadi kesalahan saat melakukan proxy website.');
    }
  });

  bot.onText(/\/proxy$/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Anda belum memberikan website yang ingin di-proxy. Contoh: /proxy google.com');
  });
};