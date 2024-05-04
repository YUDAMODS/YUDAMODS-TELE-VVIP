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
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const config = require('../../config');
// Memisahkan URL dan API key ke dalam variabel konfigurasi
const btc = config.apilol;

module.exports = (bot) => {
  bot.onText(/^\.ssweb(?:\s+(.+))?$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const url = match[1];

    if (!url) {
      bot.sendMessage(chatId, 'Masukan link contoh: .ssweb web');
      return;
    }
    try {
      var img = await fetch(`https://api.botcahx.eu.org/api/tools/ssweb?url=${url}&apikey=${btc}`);
      if (!img) {
        bot.sendMessage(chatId, 'Gagal saat percobaan pertama. Memulai percobaan kedua...');
        img = await fetch(`https://api.botcahx.eu.org/api/tools/ssweb?url=${url}&apikey=${btc}`);
        if (!img) {
          bot.sendMessage(chatId, 'Gambar tidak tersedia');
          return;
      }
    }
      var filepath = path.join(__dirname, '../temp/') + (+new Date) + '.jpeg'; // Ubah ke tmp folder
      if (!fs.existsSync(path.join(__dirname, '../temp/'))) fs.mkdirSync(path.join(__dirname, '../temp/'));
      const dest = fs.createWriteStream(filepath);
      dest.on('finish', () => {
        bot.sendPhoto(chatId, filepath)
          .then(() => {
          })
          .catch(() => { });
      });
      img.body.pipe(dest);    img.body.pipe(fs.createWriteStream(filepath));
    } catch (e) {
      console.log(e);
      bot.sendMessage(chatId, `Terjadi error!`);
    }
  });
};