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
const BASE_URL = 'https://api.lolhuman.xyz/api/gimage';

module.exports = (bot) => {
  // Gunakan regex yang sama untuk kedua command dan bedakan logika berdasarkan kelengkapan argumen
  bot.onText(/\/gimage(?:\s+(.+))?/, async (msg, match) => {
    const chatId = msg.chat.id;
    const query = match[1];

    // Jika tidak ada query, kirim instruksi
    if (!query) {
      return bot.sendMessage(chatId, 'Masukan nama foto yang ingin kamu cari, Contoh: /gimage ??');
    }

    try {
      const timestamp = new Date().getTime();
      const imageUrl = `${BASE_URL}?apikey=${API_KEY}&query=${encodeURIComponent(query)}&timestamp=${timestamp}`;
      await bot.sendPhoto(chatId, imageUrl);
    } catch (error) {
      console.error(error); // Gunakan console.error untuk kesalahan
      bot.sendMessage(chatId, 'Maaf, terjadi kesalahan saat memproses permintaan Anda.');
    }
  });
};