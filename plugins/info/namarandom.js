
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
const BASE_URL = 'https://api.lolhuman.xyz/api/random/nama';

module.exports = (bot) => {
  bot.onText(/\/namarandom/, async (msg) => {
    const chatId = msg.chat.id;
    try {
      // Membuat fungsi terpisah untuk mendapatkan nama random
      const result = await getRandomName();
      bot.sendMessage(chatId, result);
    } catch (error) {
      console.error(error); // Menggunakan console.error untuk error logging
      text = 'Maaf, terjadi kesalahan saat mengambil data.';
    
              bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
    }
  });
};

// Fungsi terpisah untuk memudahkan pengelolaan dan pengujian
async function getRandomName() {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}`);
  if (response.data && response.data.result) {
    return response.data.result;
  } else {
    throw new Error('Tidak dapat mendapatkan nama random');
  }
}