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
/**
 * Source Code By WannOFFC
 * Don't Forget Smile
 * This Bot Telegram Using Api Official
 * Thank You
 */
const axios = require('axios');
const settings = require('../../config')
const apifel = settings.apilol; 

async function handlePixivCommand(bot) {
  bot.onText(/^\.pixiv (.+)$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const query = match[1];
    try {
      const response = await axios.get(`https://api.lolhuman.xyz/api/pixiv?apikey=${apifel}&query=${encodeURI(query)}`);
      const result = response.data.result;
      if (result.length === 0) {
        bot.sendMessage(chatId, 'Maaf, gambar yang Anda cari tidak ditemukan.');
        return;
      }
      const randomIndex = Math.floor(Math.random() * result.length);
      const data = result[randomIndex];
      const title = data.title;
      const imageUrl = data.image;
      const message = `Judul gambar: ${title}\nURL gambar: ${imageUrl}`;
      bot.sendPhoto(chatId, imageUrl, { caption: message });
    } catch (error) {
      console.log(error);
      text = 'Maaf, terjadi kesalahan saat mengambil data.';
    
              bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
    }
  });

  bot.onText(/^\/pixiv$/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Masukkan nama gambar yang ingin kamu cari, Contoh: .pixiv Hatsune Miku');
  });
}
module.exports = handlePixivCommand;