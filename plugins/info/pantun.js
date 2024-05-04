const axios = require('axios');
const config = require('../../config');
// Memisahkan URL dan API key ke dalam variabel konfigurasi
const API_KEY = config.apilol;

module.exports = (bot) => {
  bot.onText(/\/pantun/, async (msg) => {
    const chatId = msg.chat.id;
    try {
      const response = await axios.get(`https://api.lolhuman.xyz/api/random/pantun?apikey=${API_KEY}`);
      const { result } = response.data;
      bot.sendMessage(chatId, result);
    } catch (error) {
      console.log(error);
      text = 'Maaf, terjadi kesalahan saat mengambil data.';
    
              bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
    }
  });
};