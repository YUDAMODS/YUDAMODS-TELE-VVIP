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
const fetch = require('node-fetch');
const config = require('../../config');
const apifel = config.apilol;

module.exports = (bot) => {
    bot.onText(/^\.yts(\s+.+)?$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const question = match[1] ? match[1].trim() : null;

    if (!question) {
      bot.sendMessage(chatId, 'Masukan pertanyaan, contoh: .yts mekukis senja');
      return;
    }
				try {
					dx = `https://api.lolhuman.xyz/api/ytsearch?apikey=${apifel}&query=${question}`;
					const response = await fetch(dx);
          const result = await response.json()
					hasil = result.result.slice(0, 3)
					hasil.forEach(async (res) => {
						caption = `\`❖ Title     :\` *${res.title}*\n`
						caption += `\`❖ Link      :\`* https://www.youtube.com/watch?v=${res.videoId} *\n`
						caption += `\`❖ Published :\` *${res.published}*\n`
						caption += `\`❖ Views    :\` *${res.views}*\n`
						bot.sendPhoto(chatId, res.thumbnail, { caption: caption, parse_mode: 'Markdown' })
					})
				
    } catch (error) {
      bot.sendPhoto(chatId, config.error, { caption: 'ERROR 404 NOT FOUND'});
    }
  });
};

