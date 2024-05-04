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
const apifel = config.apilol;

module.exports = (bot) => {
  bot.onText(/^\.ppcp$/, async (msg) => {
    const response = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${apifel}`);

    const responseData = await response.json();
    const { male, female } = responseData.result;
      bot.sendPhoto(msg.chat.id, `${male}`, { caption: '*🐱 Male*' });
      bot.sendPhoto(msg.chat.id, `${female}`, { caption: '*🐱 Female*' });
     });
};