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
- WannOFFC   :   [ Support ] 
- GlobalElits       [ Owner Script ]
- Ghost       :    [ Support ] 
- Pengguna Bot Yang Selalu Support

• Recode By ( Nama Mu )
*/
const fetch = require('node-fetch');
const config = require('../../config');
const apifel = config.apilol;
// Fungsi untuk mengambil ekstensi file dari URL
function getFileExtension(url) {
  const extension = url.split('.').pop();
  return extension.split('?')[0];
}

module.exports = (bot) => {
  bot.onText(/^\.snackvideo(?!.*\bhttps?:\/\/)/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Masukan link snackvideo yang ingin Anda Dowload, contoh: .snackvideo https://sck.io/p/jiv-dwZX');
  });
  bot.onText(/^\.snackvideo (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const urlx = match[1];
    const apiUrl = `https://api.lolhuman.xyz/api/snackvideo?apikey=${apifel}&url=${encodeURIComponent(urlx)}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
      }

      const responseData = await response.json();
      const { caption, url } = responseData.result;

      bot.sendVideo(chatId, url, {
        caption: `Title:\n${caption}`
      });
    } catch (error) {
      console.error(error);
      bot.sendPhoto(chatId, config.error, { caption: 'ERROR 404 NOT FOUND'});
    }
  });
};