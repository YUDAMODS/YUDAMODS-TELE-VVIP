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
// Fungsi untuk mengenkripsi teks ke kode morse menggunakan API
async function encryptToMorse(text) {
  const apiUrl = `https://api.lolhuman.xyz/api/morse/encrypt?apikey=${API_KEY}&text=${encodeURIComponent(text)}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data.result;
  } catch (error) {
    console.error(error);
    throw new Error('Terjadi kesalahan saat memproses permintaan Anda.');
  }
}

module.exports = (bot) => {
  bot.onText(/\/morse(.*)/, async (msg, match) => {
    const text = match[1].trim();

    // Jika tidak ada teks setelah /morse, berikan instruksi
    if (!text) {
      bot.sendMessage(msg.chat.id, 'Masukkan teks yang ingin dikonversi ke kode morse, contoh: /morse ayaka always choose viki');
      return;
    }

    try {
      const morseCode = await encryptToMorse(text);
      const message = `Berikut adalah kode morse untuk teks "${text}":\n\n${morseCode}`;
      bot.sendMessage(msg.chat.id, message);
    } catch (error) {
      bot.sendMessage(msg.chat.id, error.message);
    }
  });
};