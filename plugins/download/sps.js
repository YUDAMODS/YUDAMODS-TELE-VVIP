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
const axios = require('axios');
const config = require('../../config');
// Memisahkan URL dan API key ke dalam variabel konfigurasi
const API_KEY = config.apilol;

module.exports = (bot) => {
    bot.onText(/^\.spotifys(\s+.+)?$/, async (msg, match) => {
        const chatId = msg.chat.id;
        const question = match[1]?.trim();

        if (!question) {
            bot.sendMessage(chatId, 'Masukan pertanyaan, contoh: .spotifys namamu');
            return;
        }

        try {
            const dx = `https://api.lolhuman.xyz/api/spotifysearch?apikey=${API_KEY}&query=${question}`;
            const { data } = await axios.get(dx);
            const topResults = data.result.slice(0, 3);

            for (const { title, artists, link, duration } of topResults) {
                const caption = `\`❖ Title     :\` *${title}*\n` +
                                `\`❖ Artists   :\` *${artists}*\n` +
                                `\`❖ Link      :\` *${link}*\n` +
                                `\`❖ Duration  :\` *${duration}*\n`;
                await bot.sendMessage(chatId, caption);
            }
        } catch (error) {
            bot.sendPhoto(chatId, config.error, { caption: 'ERROR 404 NOT FOUND'});
        }
    });
};