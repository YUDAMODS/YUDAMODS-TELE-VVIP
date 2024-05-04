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
const ytdl = require('ytdl-core');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
module.exports = (bot) => {
  bot.onText(/^\.ytmp3(?!.*\bhttps?:\/\/)/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Masukan link Youtube yang ingin Anda ubah ke audio, contoh: .ytmp3 https://www.youtube.com/watch?v=eZskFo64rs8');
  });

  bot.onText(/^\.ytmp3 (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const text = match[1];
    const isValid = await ytdl.validateURL(text);
    if (!isValid) {
       bot.sendMessage(chatId, "*your link not suported.*", { parse_mode: 'Markdown' });
    }
  try {
    let audio = ytdl(text, { quality: 'highestaudio' });
    let inputFilePath = './temp/music.webm';
    let outputFilePath = './temp/music.mp3';
    audio.pipe(fs.createWriteStream(inputFilePath)).on('finish', async () => {
      ffmpeg(inputFilePath)
        .toFormat('mp3')
        .on('end', async () => {
          let buffer = fs.readFileSync(outputFilePath);
          bot.sendVoice(chatId, buffer);
          fs.unlinkSync(inputFilePath);
          fs.unlinkSync(outputFilePath);
        })
        .on('error', (err) => {
          console.log(err);
          bot.sendMessage(chatId, `*Convert Error:* ${err.message}`, { parse_mode: 'Markdown' });
          fs.unlinkSync(inputFilePath);
          fs.unlinkSync(outputFilePath);
        })
        .save(outputFilePath);
    });
  } catch (e) {
    console.log(e);
    bot.sendMessage(chatId, `*Error:* ${e.message}`, { parse_mode: 'Markdown' });
    }
});
};