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

async function fetchQuote() {
  try {
    const url = `https://api.lolhuman.xyz/api/random/katabijak?apikey=${API_KEY}`;
    const { data } = await axios.get(url);
    return data.result;
  } catch (error) {
    console.error(error);
    return 'Maaf, terjadi kesalahan saat mengambil kutipan bijak.';
  }
}

module.exports = (bot) => {
  bot.onText(/\/katabijak/, async (msg) => {
    const quote = await fetchQuote();
    bot.sendMessage(msg.chat.id, quote);
  });
};