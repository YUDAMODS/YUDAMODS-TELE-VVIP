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
const chalk = require('chalk');
module.exports = (bot) => {

    bot.on('message', (msg) => {
      const chatId = msg.chat.id;
      const senderName = msg.from.first_name;
      const messageText = msg.text;
  console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(messageText)) + '\n' + chalk.magenta('=> From'), chalk.green(senderName) + '\n' + chalk.blueBright('=> In'), chalk.green('Private Chat', msg.chat.id))
      });
  };