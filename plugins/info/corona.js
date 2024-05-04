
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

const apiUrl = `https://api.lolhuman.xyz/api/corona/global?apikey=${API_KEY}`;
const imageUrl = 'https://rs.unud.ac.id/wp-content/uploads/2020/02/novel-corona-virus.jpg';

module.exports = (bot) => {
  bot.on('message', async (msg) => {
    const command = msg.text ? msg.text.toLowerCase() : '';

    if (command === '/corona') {
      try {
        const message = await fetchCovidData();
        bot.sendPhoto(msg.chat.id, imageUrl, { caption: message });
      } catch (error) {
        console.error(error);
        text = 'Maaf, terjadi kesalahan saat mengambil data.';
      
                bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
      }
    }
  });
};

async function fetchCovidData() {
  const response = await axios.get(apiUrl);
  const data = response.data.result;
  return `🦠 Kasus COVID-19 di seluruh dunia:\n\n😷 Kasus: ${data.positif}\n😇 Sembuh: ${data.sembuh}\n💀 Meninggal: ${data.meninggal}`;
}