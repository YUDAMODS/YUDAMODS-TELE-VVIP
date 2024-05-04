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
let ytdl = require('ytdl-core');
let fs = require('fs');
let ffmpeg = require('fluent-ffmpeg');
let search = require ('yt-search');
async function handleplay(bot) {
  bot.onText(/\.play(.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const text = match[1].trim();
    
    if (text === '') {
      bot.sendMessage(chatId, 'Masukan Title Lagu Yang Anda Mao cari, Contoh: .play melukis senja');
      return;
    }
    
  try {
    let results = await search(text);
    let videoId = results.videos[0].videoId;
    let info = await ytdl.getInfo(videoId);
    let title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    let thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    let url = info.videoDetails.video_url;
    let duration = parseInt(info.videoDetails.lengthSeconds);
    let uploadDate = new Date(info.videoDetails.publishDate).toLocaleDateString();
    let views = info.videoDetails.viewCount;
    let minutes = Math.floor(duration / 60);
    let description = results.videos[0].description;
    let seconds = duration % 60;
    let durationText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;       
    let audio = ytdl(videoId, { quality: 'highestaudio' });
    let inputFilePath = './temp/' + title + '.webm';
    let outputFilePath = './temp/' + title + '.mp3';
    let viewsFormatted = formatViews(views);
    let infoText = `◦ *Title*: ${title}\n◦ *Duration*: ${durationText}\n◦ *Upload*: ${uploadDate}\n◦ *Views*: ${viewsFormatted}\n◦ *ID*: ${videoId}\n◦ *Description*: ${description}\n◦ *URL*: ${url}
\n*Creator Script*: (YudaMods)`;
  bot.sendPhoto(msg.chat.id, thumbnailUrl, { caption: infoText, parse_mode: 'Markdown' });
    audio.pipe(fs.createWriteStream(inputFilePath)).on('finish', async () => {
      ffmpeg(inputFilePath)
        .toFormat('mp3')
        .on('end', async () => {
          let buffer = fs.readFileSync(outputFilePath); 
          bot.sendVoice(msg.chat.id, buffer);
          fs.unlinkSync(inputFilePath);
          fs.unlinkSync(outputFilePath);
        })
        .on('error', (err) => {
          console.log(err);
          bot.sendMessage(msg.chat.id, `There was an error converting the audio: ${err.message}`);
          fs.unlinkSync(inputFilePath);
          fs.unlinkSync(outputFilePath);
        })
        .save(outputFilePath);
    });
  } catch (e) {
    console.log(e);
    bot.sendMessage(msg.chat.id, `An error occurred while searching for the song: ${e.message}`);
  }
  });

  bot.onText(/^\.play$/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Masukan Title Audio Atau Video Yang Anda Mao cari, Contoh: .play melukis senja');
  });
}

function formatViews(views) {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'K';
  } else {
    return views.toString();
  }
}
module.exports = handleplay;