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
const fetch = require('node-fetch');
const config = require('../../config');
const asupan = config.apilol;
async function handlenekopoi(bot) {
  bot.onText(/^\.nekopoi$/, async (msg) => {
  try {
    const response = await axios.get(`https://api.lolhuman.xyz/api/nekopoi?apikey=${asupan}&url=${encodeURIComponent(text)}`)
    const result = response.data.result
    const thumbnailBuffer = await (await fetch(result.thumbnail)).buffer()
    const captionx = `
*Judul*: ${result.title}
*Produser*: ${result.producers}
*Durasi*: ${result.duration}
*Genre*: ${result.genre.join(', ')}
*Sinopsis*: ${result.sinopsis}
*Link Download*:
720p:
${Object.entries(result.link['720p']).map(([key, value]) => `${key}: ${value}`).join('\n')}

480p:
${Object.entries(result.link['480p']).map(([key, value]) => `${key}: ${value}`).join('\n')}

360p:
${Object.entries(result.link['360p']).map(([key, value]) => `${key}: ${value}`).join('\n')}
`.trim()
bot.sendPhoto(msg.chat.id, thumbnailBuffer, {
  caption: captionx
});
  } catch (error) {
    console.error(error);
    bot.sendPhoto(msg.chat.id, config.error, { caption: 'ERROR 404 NOT FOUND'});
  }
});
}
module.exports = handlenekopoi;