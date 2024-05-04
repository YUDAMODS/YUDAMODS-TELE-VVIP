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
const axios = require('axios')
config = require('../../config');
const asupan = config.apilol;
async function handlekanna(bot) {
  bot.onText(/^\.kanna$/, async (msg) => {
    let res = await axios.get(`https://api.lolhuman.xyz/api/random/kanna?apikey=${asupan}`, { responseType: 'arraybuffer' })
    try{
      let image = Buffer.from(res.data, 'binary')
      bot.sendPhoto(msg.chat.id, image, {
        caption: `ngebokep terus lu su tobat gblk`
      });
    } catch (err) {
      console.log(err)
      bot.sendMesaage(msg.chat.id, 'An error occurred while processing your request.')
    }
  });
  }
  module.exports = handlekanna;