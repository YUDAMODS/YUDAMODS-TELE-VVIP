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

module.exports = (bot) => {
  bot.onText(/\/quotesanime/, async (msg) => {
    try {
      const response = await axios.get('https://animechan.vercel.app/api/random');
      const { quote, character, anime } = response.data;
      bot.sendMessage(msg.chat.id, `\n"${quote}"\n- ${character} (${anime})`);
    } catch (error) {
      console.log(error);
      bot.sendMessage(msg.chat.id, 'Maaf, terjadi kesalahan saat mengambil quote anime.');
    }
  });
};