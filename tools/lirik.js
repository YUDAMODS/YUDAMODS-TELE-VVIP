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
const axios = require('axios')
module.exports = (bot) => {
  bot.onText(/^\.lirik(?:\s+(.+))?$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const text = match[1];

    if (!text) {
      bot.sendMessage(chatId, 'Masukan judul lagu yang ingin Anda cari liriknya, contoh: /lirik cupid');
      return;
    }
try {
        let result = await lirik(text)
        let xs = `
${result.lyrics}
🎵 ${result.title} - ${result.artist} 🎵
ℹ️ More info:
🔗 ${result.url}
🎤 Artist: ${result.artistName}
📅 Released: ${result.releasedAt}`;
bot.sendPhoto(chatId, result.thumbnail, { caption : xs });
    } catch (e) {
        console.log(e)
        bot.sendMessage(chatId, 'Terjadi kesalahan, silahkan coba lagi nanti')
    }
  });
};


async function lirik(q) {
    try {
        const searches = await axios.get(`https://aemt.me/lirik?text=${q}`)
     
        let result = searches.data.result
        let data = {
            lyrics: result.lyrics,
            thumbnail: result.thumbnail,
            title: result.title,
            artist: result.artist,
            image: result.image,
            fullTitle: result.fullTitle,
            featuredTitle: result.featuredTitle,
            url: result.url,
            artistName: result.artistName,
            artistUrl: result.artistUrl,
            artistThumbnail: result.artistThumbnail,
            artistImage: result.artistImage,
            releasedAt: result.releasedAt,
            instrumental: result.instrumental,
            iq: result.iq,
            stats: result.stats,
            releaseDateForDisplay: result.releaseDateForDisplay,
            releaseDateWithAbbreviatedMonthForDisplay: result.releaseDateWithAbbreviatedMonthForDisplay
        }
        return data
    } catch (error) {     
        bot.sendMessage(msg.chat.id, 'Terjadi kesalahan, silahkan coba lagi nanti')
    }
}