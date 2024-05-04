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
const API_URL = 'https://api.lolhuman.xyz/api/convert/hextostr';

// Fungsi untuk mengkonversi hex ke string
async function convertHexToString(hexString) {
  const apiUrl = `${API_URL}?apikey=${API_KEY}&hex=${encodeURIComponent(hexString)}`;
  try {
    const response = await axios.get(apiUrl);
    if (response.data && response.data.result) {
      return response.data.result;
    }
    throw new Error('Tidak ada hasil yang ditemukan.');
  } catch (error) {
    console.error(error);
    throw new Error('Gagal mengambil data dari API.');
  }
}

module.exports = (bot) => {
  bot.onText(/\/hextostring(.*)/, async (msg, match) => {
    const hexString = match[1].trim();
    if (!hexString) {
      bot.sendMessage(msg.chat.id, 'Masukkan kode yang ingin kamu convert ke teks, contoh: /hextostring 53617a756d692056696b69');
      return;
    }

    try {
      const text = await convertHexToString(hexString);
      const message = `Berikut adalah teks yang sesuai untuk string heksadesimal "${hexString}":\n\n${text}`;
      bot.sendMessage(msg.chat.id, message);
    } catch (error) {
      bot.sendMessage(msg.chat.id, error.message);
    }
  });
};