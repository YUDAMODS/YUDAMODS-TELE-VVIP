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
module.exports = (bot) => {
  bot.onText(/^\.ytdl(?:\s+(.+))?$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const url = match[1];

    if (!url) {
      bot.sendMessage(chatId, 'Masukan link youtube yang ingin Anda download, Contoh: .yt https:///reel/C2M0iJnJR');
      return;
    }
    const apiUrl = `https://aemt.me/youtube?url=${url}&filter=audioandvideo&quality=highestvideo&contenttype=video/mp4`;
const apiUs = `https://aemt.me/youtube?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
      }


      bot.sendVideo(chatId, `${apiUrl}`, {
        caption: `autodowload`
      });
      bot.sendAudio(chatId, `${apiUs}`, {
        caption: `autodowload`
      });
    } catch (error) {
      console.error(error);
      bot.sendPhoto(chatId, config.error, { caption: 'ERROR 404 NOT FOUND'});
    }
  });
};