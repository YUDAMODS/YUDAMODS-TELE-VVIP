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
- GlobalElits       [ Owner Sc ]
- Ghost       :    [ Support ] 
- Pengguna Bot Yang Selalu Support

• Recode By ( Nama Mu )
*/
const fs = require("fs");
const ytdl = require("ytdl-core");
const config = require('../../config');
module.exports = (bot) => {
  bot.onText(/^\.ytmp4(?!.*\bhttps?:\/\/)/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Masukan link Youtube yang ingin Anda ubah ke Video, contoh: .ytmp4 https://www.youtube.com/watch?v=eZskFo64rs8');
  });

  bot.onText(/^\.ytmp4 (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const url = match[1];

    const isValid = await ytdl.validateURL(url);
    if (!isValid) {
       bot.sendMessage(chatId, "*your link not suported.*", { parse_mode: 'Markdown' });
    }

    const _filename = `./temp/${Math.random().toString(36).substring(2, 7)}.mp4`;
    const writer = fs.createWriteStream(_filename);
    
    try {
        const { formats, videoDetails } = await ytdl.getInfo(url);
        const { title, description, publishDate, author, isFamilySafe } = videoDetails;
        const { user } = author;
        return new Promise(async (resolve, reject) => {
            ytdl(url, {
                quality: "lowest",
            }).pipe(writer);
            writer.on("error", () => {
                bot.sendMessage(chatId, "Failed sending video", { parse_mode: 'Markdown' });
                resolve();
            });
            writer.on("close", async () => {
                try {
                    
          let buffer = fs.readFileSync(_filename);
          bot.sendVideoNote(chatId, buffer, { caption: `┌  • *Y o u t u b e - M P 4*\n│  ◦ *Title:* ${title}\n│  ◦ *Published:* ${publishDate}\n└  ◦ *Author:* ${user}\n author script Felix`, parse_mode: 'Markdown' });
          fs.unlinkSync(outputFilePath);
                } catch {
                fs.unlinkSync(_filename);
                resolve();
            }
        });
        });
    } catch {
        bot.sendMessage(chatId, "*Failed get a video!*", { parse_mode: 'Markdown' });
    }
  });
};