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


async function getWeatherInfo(city) {
  try {
    const url = `https://api.lolhuman.xyz/api/cuaca/${city}?apikey=${API_KEY}`;
    const { data } = await axios.get(url);
    return data.result || null;
  } catch (error) {
    throw new Error('Gagal mengambil informasi cuaca.');
  }
}

module.exports = (bot) => {
  bot.onText(/^\/infocuaca(?:\s+(.+)|)$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const city = match[1];
    if (!city) {
      bot.sendMessage(chatId, 'Masukkan nama kota / negara, Contoh: /infocuaca Makassar');
      return;
    }
    try {
      const data = await getWeatherInfo(city);
      if (!data) {
        text = 'Maaf, terjadi kesalahan saat mengambil data.';
      
                bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
        return;
      }
      const message = `Informasi cuaca untuk kota ${city}:\n• Cuaca: ${data.cuaca}\n• Suhu: ${data.suhu}\n• Kelembapan: ${data.kelembapan}\n• Angin: ${data.angin}\n• Deskripsi: ${data.description}\n• Tekanan Udara: ${data.udara}\n• Tekanan Permukaan Laut: ${data.permukaan_laut}\n`;
      bot.sendMessage(chatId, message);
    } catch (error) {
      text = 'Maaf, terjadi kesalahan saat mengambil data.';
    
              bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
    }
  });
};