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
const path = require('path')
module.exports = (bot) => {
    
    bot.onText(/\.totaljs/, async (msg, match) => {
        const chatId = msg.chat.id;
        const directoryPath = __dirname;
        const jsFiles = fs.readdirSync(directoryPath).filter(file => path.extname(file) === '.js');
        const totalJSFiles = jsFiles.length;
        bot.sendMessage(chatId, `Total File Javascript Adalah: ${totalJSFiles}`);
    });
};