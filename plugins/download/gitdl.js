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
module.exports = (bot) => {

    
    bot.onText(/^\.gitdl(.+)$/, async (msg, match) => {
      const chatId = msg.chat.id;
      const args = match[1];
      const args2 = match[2];
      const args3 = match[3];
  
      if (!args) {
        bot.sendMessage(chatId, 'Masukan username nya kak.');
        return;
      }
      
      if (!args2) {
        bot.sendMessage(chatId, 'Repo nya mana kak ?');
        return;
      }
      
      if (!args3) {
        bot.sendMessage(chatId, 'Masukan nama branch nya kak.');
        return;
      }
      const apiUrl = `https://github.com/${args}/${args2}/archive/refs/heads/${args3}.zip`
//F
bot.sendMessage(chatId, `compressing data to file zip`)
bot.sendDocument(chatId, url, `${args2} ${args3}.zip`)
});
};