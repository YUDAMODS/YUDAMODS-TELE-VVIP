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
const API_URL = 'https://api.lolhuman.xyz/api/random/faktaunik';

module.exports = (bot) => {
  bot.onText(/\/faktaunik/, async (msg) => {
    const chatId = msg.chat.id;
    try {
      const url = `${API_URL}?apikey=${API_KEY}`;
      const { data } = await axios.get(url);
      // Pastikan untuk selalu memeriksa struktur data yang dikembalikan API
      if (data && data.result) {
        bot.sendMessage(chatId, data.result);
      } else {
        throw new Error('Data tidak ditemukan');
      }
    } catch (error) {
      console.error(error); // Lebih baik menggunakan console.error untuk error
      text = 'Maaf, terjadi kesalahan saat mengambil data.';
    
              bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
    }
  });
};