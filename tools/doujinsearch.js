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
const fetch = require('node-fetch');
const config = require('../../config');
// Memisahkan URL dan API key ke dalam variabel konfigurasi
const API_KEY = config.apilol;
const BASE_URL = 'https://api.lolhuman.xyz/api/doujindesusearch';

async function searchDoujin(doujinName) {
  const apiUrl = `${BASE_URL}?apikey=${API_KEY}&query=${encodeURIComponent(doujinName)}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Terjadi kesalahan saat menghubungi API.');
  }
}

function formatMessage(doujin) {
  return `Title: ${doujin.title}\nType: ${doujin.type}\nLink: ${doujin.link}`;
}

module.exports = (bot) => {
  bot.onText(/\/doujinsearch$/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Masukan nama doujin yang ingin kamu cari, Contoh: /doujinsearch ayaka');
  });

  bot.onText(/\/doujinsearch (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const doujinName = match[1].trim();

    try {
      const data = await searchDoujin(doujinName);

      if (data.status === 200 && data.result.length > 0) {
        data.result.forEach(doujin => {
          const message = formatMessage(doujin);
          bot.sendPhoto(chatId, doujin.thumbnail, { caption: message });
        });
      } else {
        bot.sendMessage(chatId, `Maaf, tidak ada doujin yang ditemukan dengan nama ${doujinName}.`);
      }
    } catch (error) {
      bot.sendMessage(chatId, error.message);
    }
  });
};