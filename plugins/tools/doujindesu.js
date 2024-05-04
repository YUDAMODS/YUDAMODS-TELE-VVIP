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
const API_URL = 'https://api.lolhuman.xyz/api/doujindesulatest';

// Fungsi untuk mengambil data dari API
async function fetchDoujinDesu() {
  try {
    const response = await axios.get(`${API_URL}?apikey=${API_KEY}`);
    const results = response.data.result;
    const randomIndex = Math.floor(Math.random() * results.length);
    return results[randomIndex];
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data dari DoujinDesu:', error);
    throw new Error('Gagal mengambil data.');
  }
}

// Fungsi untuk mengirim pesan DoujinDesu
async function sendDoujinDesuMessage(bot, msg) {
  try {
    const data = await fetchDoujinDesu();
    const message = `🔞 *Judul*: ${data.title}\n🔗 *Link*: ${data.link}\n📷 *Episode Thumbnail*:`;
    await bot.sendPhoto(msg.chat.id, data.thumbnail, { caption: message, parse_mode: 'Markdown' });
  } catch (error) {
    bot.sendMessage(msg.chat.id, 'Terjadi kesalahan saat melakukan pencarian di DoujinDesu.');
  }
}

module.exports = (bot) => {
  bot.on('message', async (msg) => {
    const command = msg.text ? msg.text.toLowerCase() : '';
    if (command === '.doujindesu') {
      await sendDoujinDesuMessage(bot, msg);
    }
  });
};