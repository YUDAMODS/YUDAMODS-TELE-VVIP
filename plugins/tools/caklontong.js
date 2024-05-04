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
module.exports = (bot) => {
bot.onText(/\.caklontong/, async (msg) => {
  const chatId = msg.chat.id;
  const question = await getQuestion();

  if (question) {
    sendQuestion(chatId, question);
  } else {
    bot.sendMessage(chatId, 'Maaf, terjadi kesalahan saat mengambil pertanyaan. Coba lagi nanti.');
  }
});

bot.onText(/\.jawab (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const answer = match[1];

  if (currentQuestion.soal) {
    checkAnswer(chatId, answer);
  } else {
    bot.sendMessage(chatId, 'Tidak ada pertanyaan saat ini. Ketik .caklontong untuk memulai permainan.');
  }
});
};

let currentQuestion = {};

// Fungsi untuk mengambil pertanyaan dari API
async function getQuestion() {
  try {
    const response = await axios.get(`https://api.lolhuman.xyz/api/tebak/caklontong?apikey=${API_KEY}`);
    return response.data.result;
  } catch (error) {
    console.error('Error fetching question:', error);
    return null;
  }
}

// Fungsi untuk mengirim pertanyaan ke pengguna
function sendQuestion(chatId, question) {
  bot.sendMessage(chatId, question.soal);
  currentQuestion = question;
}

// Fungsi untuk memeriksa jawaban pengguna
function checkAnswer(chatId, answer) {
  if (answer.toLowerCase() === currentQuestion.jawaban.toLowerCase()) {
    bot.sendMessage(chatId, 'Jawaban kamu benar! Selamat!');
    currentQuestion = {};
  } else {
    bot.sendMessage(chatId, 'Jawaban kamu salah. Coba lagi!');
  }
}
