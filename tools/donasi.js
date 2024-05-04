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
const config = require('../../config')
module.exports = (bot) => {
    bot.onText(/\.donasi|\/sedekah/, (msg) => {
      const chatId = msg.chat.id;
      const caption = `Halo kak ${msg.from.first_name}! jika kamu ingin donasi ke Owner bisa melalui qris di atas yah..`;
      
      bot.sendPhoto(chatId, config.dana, { caption: caption }).catch((error) => {
        console.log(error);
        bot.sendPhoto(chatId, config.error, { caption: 'Maaf, terjadi kesalahan dalam mengirim foto.'});
      });
    });
  };