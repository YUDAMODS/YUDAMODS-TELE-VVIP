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
async function handleboep(bot) {
  bot.onText(/^\.bokep$/, async (msg) => {
  const api = 'https://api.zahwazein.xyz/randomasupan/discord18?apikey=zenzkey_f07b21f698'
  try {
    const res = await axios.get(api)
    const result = res.data.result
    bot.sendVideo(msg.chat.id, result, {
      caption: `ngebokep terus lu su tobat gblk`
    });
  } catch (e) {
    console.log(e)
    bot.sendMesaage(msg.chat.id, 'An error occurred while processing your request.')
  }
});
}

module.exports = handleboep;