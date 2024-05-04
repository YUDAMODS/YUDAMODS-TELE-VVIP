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
const config = require('../../config');
const apifelx = config.apilol; 
const axios = require("axios");
async function handleboep(bot) {
bot.onText(/\.xnxxserach(.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const nama = match[1].trim();
    
    if (!nama) {
        bot.sendMessage(chatId, 'bbos');
        return;
      }
  const search = await axios.get(
    `https://api.botcahx.eu.org/api/search/xvideos?query=${nama}&apikey=${apifelx}`
  );
  const hasil = search.data.result;
  
  let teks = `*XVIDEOS RESULTS* \n\n🔍 *KEYWORDS*: *${text}*\n\n`;
  let no = 1;
  
  for (let i of hasil) {
    teks += `📑 *No* : ${no++}\n📚 *Title* : ${i.title}\n⏱️ *Duration* : ${i.duration}\n🔗 *URL* ${i.url}\n\n─────────────────\n\n`;
  }
  bot.sendPhoto(chatId, hasil[0].thumb,{ caption: teks });
});
}

module.exports = handleboep;