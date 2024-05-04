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

module.exports = (bot) => {
    const badwords = ['ajg', '/ajg', 'kontol', '/kontol', 'memek', '/memek', 'asu', '/asu', 'puki', '/puki', 'tolol', '/tolol', 'ngentot', '/ngentot', 'pukimak', '/pukimak', 'celeng', '/celeng', 'babi', '/babi', 'ngntot', '/ngntot', 'jing', '/jing', 'mmk', '/mmk', 'tlol', '/tlol', 'kntl', '/kntl'];
  
    bot.on('message', (msg) => {
      const chatId = msg.chat.id;
      const message = msg.text.toLowerCase();
      
      const isBadword = badwords.some((word) => {
        return message.includes(word);
      });
  
      if (isBadword) {
        bot.sendMessage(chatId, 'YudaMods mendeteksi badword, mohon untuk selalu menjaga ketikan Anda..');
      }
    });
  };