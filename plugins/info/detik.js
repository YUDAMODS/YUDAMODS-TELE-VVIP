const axios = require('axios');
const config = require('../../config');
// Memisahkan URL dan API key ke dalam variabel konfigurasi
const API_KEY = config.apilol;
const NO_NEWS_FOUND_MESSAGE = 'Maaf, tidak ada berita yang ditemukan.';
const ERROR_FETCHING_NEWS_MESSAGE = 'Maaf, terjadi kesalahan saat mengambil berita.';

// Fungsi pembantu untuk mengirim pesan atau gambar
async function sendMessageOrPhoto(bot, chatId, { title, date, link, thumb }) {
  let caption = `${title ? `${title}\n\n` : ''}${date ? `${date}\n\n` : ''}${link || ''}`;

  if (!caption) {
    await bot.sendMessage(chatId, NO_NEWS_FOUND_MESSAGE);
    return;
  }

  if (thumb) {
    await bot.sendPhoto(chatId, thumb, { caption });
  } else {
    await bot.sendMessage(chatId, caption);
  }
}

module.exports = (bot) => {
  bot.onText(/\.detik/, (msg) => {
  const { chat: { id: chatId } } = msg;

  try {
    const { data: { result: data } } = axios.get(`https://api.lolhuman.xyz/api/detik?apikey=${API_KEY}`);

    if (data.length === 0) {
       bot.sendMessage(chatId, NO_NEWS_FOUND_MESSAGE);
      return;
    }

    const randomIndex = Math.floor(Math.random() * data.length);
    const article = data[randomIndex];

    sendMessageOrPhoto(bot, chatId, article);
  } catch (error) {
    console.error(error);
    bot.sendMessage(chatId, ERROR_FETCHING_NEWS_MESSAGE);
  }
})
};