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
    // code by sazumi viki
    bot.onText(/\/rules/, (msg) => {
      const chatId = msg.chat.id;
      const rules = [
        '1. Tidak boleh mengirimkan pesan spam.',
        '2. Tidak boleh mengirimkan konten yang mengandung kekerasan, pornografi, atau hal yang merugikan orang lain.',
        '3. Harap bersikap sopan dan menghormati pengguna lain selama chat dengan YudaMods.'
      ];
  
      bot.sendMessage(chatId, `Berikut adalah rules selama chat dengan YudaMods:\n${rules.join('\n')}`);
    });
  };