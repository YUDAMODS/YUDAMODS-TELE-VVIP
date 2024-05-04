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
const API_URL = 'https://api.lolhuman.xyz/api/bahasapurba';


module.exports = (bot) => {
  bot.onText(/\.bpurba/, async (msg, match) => {
    const chatId = msg.chat.id;
    const text = match.input.split(' ')[1];

    if (!text) {
      return bot.sendMessage(chatId, 'Silakan masukkan teks yang ingin diubah ke bahasa purba.');
    }

    try {
      const response = await axios.get(`${API_URL}?apikey=${API_KEY}&text=${encodeURIComponent(text)}`);
      // Pastikan untuk memeriksa apakah response memiliki data yang diharapkan
      if (response.data && response.data.result) {
        bot.sendMessage(chatId, response.data.result);
      } else {
        throw new Error('Data tidak ditemukan');
      }
    } catch (error) {
      console.error(error);
      bot.sendMessage(chatId, 'Terjadi kesalahan saat memproses permintaan Anda.');
    }
  });
};