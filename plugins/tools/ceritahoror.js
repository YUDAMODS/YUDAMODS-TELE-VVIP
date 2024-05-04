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
const axios = require("axios");
const config = require('../../config');
// Memisahkan URL dan API key ke dalam variabel konfigurasi
const API_KEY = config.apilol;
const API_CONFIG = 'https://api.lolhuman.xyz/api/ceritahoror';

// Fungsi untuk mengambil gambar sebagai buffer
async function fetchImageAsBuffer(url) {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  return Buffer.from(response.data, "binary");
}

// Fungsi untuk menghindari karakter khusus Markdown
function escapeMarkdown(text) {
  return text.replace(/[\*\_\[\]\(\)\~\`\>\#\+\-\=\|\{\}\.\!]/g, "\\$&");
}

// Fungsi utama untuk mengambil dan mengirim cerita
async function fetchAndSendStory(bot, chatId) {
  try {
    await bot.sendMessage(chatId, "YudaMods sedang memuat, tunggu sebentar..");
    const { data } = await axios.get(`${API_CONFIG}?apikey=${API_KEY}`);

    if (!data.result) throw new Error("Data yang diterima dari API tidak valid.");

    const { image, thumbnail, story, title } = data.result;
    const imageUrl = image || thumbnail;

    if (imageUrl) {
      const imageBuffer = await fetchImageAsBuffer(imageUrl);
      await bot.sendPhoto(chatId, imageBuffer, { caption: title });
    }

    if (story) {
      const escapedMessage = escapeMarkdown(story);
      await bot.sendMessage(chatId, escapedMessage, {
        parse_mode: "MarkdownV2",
        disable_web_page_preview: true,
      });
    }
  } catch (error) {
    console.error(error);
    bot.sendMessage(chatId, `Terjadi kesalahan pada sistem: ${error.message}. Silakan coba lagi nanti.`);
  }
}

module.exports = (bot) => {
  bot.onText(/\.ceritahororr|\/hororr/, async (msg) => {
    const chatId = msg.chat.id;
    await fetchAndSendStory(bot, chatId);
  });
};