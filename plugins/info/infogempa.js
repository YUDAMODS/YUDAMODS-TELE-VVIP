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


// Fungsi untuk mengambil informasi gempa
async function fetchEarthquakeInfo() {
  if (!API_KEY) {
    throw new Error('API Key tidak ditemukan. Pastikan Anda telah mendefinisikan API_KEY di file .env');
  }

  const url = `https://api.lolhuman.xyz/api/infogempa?apikey=${API_KEY}`;
  try {
    const { data } = await axios.get(url);
    return data.result;
  } catch (error) {
    console.error('Error fetching earthquake info:', error);
    text = 'Maaf, terjadi kesalahan saat mengambil data.';
  
            bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
  }
}

// Fungsi untuk memformat pesan yang akan dikirim
function formatMessage(data) {
  return `Terkini:\n• Lokasi: ${data.lokasi}\n• Waktu: ${data.waktu}\n• Kedalaman: ${data.kedalaman}\n• Magnitudo: ${data.magnitude}\n• Keterangan: ${data.potensi}\n`;
}

module.exports = (bot) => {
  bot.onText(/^\/infogempa$/, async (msg) => {
    const chatId = msg.chat.id;
    try {
      const data = await fetchEarthquakeInfo();
      if (!data) {
        text = 'Maaf, terjadi kesalahan saat mengambil data.';
      
                bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
        return;
      }
      const message = formatMessage(data);
      bot.sendPhoto(chatId, data.map, { caption: message });
    } catch (error) {
      console.error('Error handling /infogempa command:', error);
      bot.sendMessage(chatId, error.message);
    }
  });
};