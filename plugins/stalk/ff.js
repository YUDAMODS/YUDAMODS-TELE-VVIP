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
const config = require('../../config');
module.exports = (bot) => {
    bot.onText(/^\.stalkff(?:\s+(\w+))?$/, async (msg, match) => {
      const chatId = msg.chat.id;
      const id = match[1];
  
      if (!id) {
        bot.sendMessage(chatId, 'Masukan username yang ingin Anda cari profile nya, contoh: .stalkff 12345678');
        return;
      }
      const apiUrl = `https://ff.lxonfire.workers.dev/?id=${id}`;
  
      try {
        const response = await fetch(apiUrl);
           const responseData = await response.json();
           const { img_url, region, nickname, open_id } = responseData;


      bot.sendPhoto(chatId, img_url, {
        caption: `
╭─ •  「 Firefire Stalk 」
│  ◦  Username : ${nickname}
│  ◦  Region : ${region}
│  ◦  Open ID : ${open_id}
╰──── •`
      });
      } catch (error) {
        console.error(error);
     
        text = 'Maaf, terjadi kesalahan saat mengambil data.';
      
                bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
      }
    });
  };