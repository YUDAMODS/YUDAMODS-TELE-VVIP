const fetch = require('node-fetch');
const axios = require('axios');
const config = require('../../config');
const fs = require('fs');
const API_KEY = config.apilol;
// Menyimpan data tebakan kata saat ini
let currentTebakan = null;
let currentQuestion = null;
let currentGambar = null;
let currentFamily = null;

async function tebakHandler(bot) {
// Handler untuk command /tebak
bot.onText(/^\.tebak$/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Selamat datang di permainan tebak-tebakan! Ketik Sala Satu Menu Tebak Tebakan Di Bawah\n\n.tebaksimpel\n.tebaksulit\n.tebakgambar\n.family100\nuntuk memulai permainan.');
});
//family 100
bot.onText(/^\.family100$/, (msg) => {
  const chatId = msg.chat.id;
  if (currentFamily) {
    bot.sendMessage(chatId, 'Masih ada tebakan yang belum selesai. Silakan jawab terlebih dahulu.');
  } else {
    familySatu(chatId);
  }
});

bot.onText(/^\.jawab (.+)$/, (msg, match) => {
  const chatId = msg.chat.id;
  const answer = match[1];
  if (currentFamily) {
    checkFamily(chatId, answer);
  } else {
    bot.sendMessage(chatId, 'Belum ada tebakan yang sedang berlangsung. Ketik .family100 untuk memulai permainan.');
  }
});

bot.onText(/^\.skip$/, (msg) => {
  const chatId = msg.chat.id;
  if (currentFamily) {
    bot.sendMessage(chatId, `Jawaban yang benar adalah\n "${currentFamily.answer}". \n\nKetik .family100 untuk melanjutkan permainan.`);
    currentFamily = null;
  } else {
    bot.sendMessage(chatId, 'Belum ada tebakan yang sedang berlangsung. Ketik .family100 untuk memulai permainan.');
  }
});
// tebak gambar
bot.onText(/^\.tebakgambar$/, (msg) => {
  const chatId = msg.chat.id;
  if (currentGambar) {
    bot.sendMessage(chatId, 'Masih ada tebakan yang belum selesai. Silakan jawab terlebih dahulu.');
  } else {
    tebakGambar(chatId);
  }
});

bot.onText(/^\.gambar (.+)$/, (msg, match) => {
  const chatId = msg.chat.id;
  const answer = match[1];
  if (currentGambar) {
    checkGambar(chatId, answer);
  } else {
    bot.sendMessage(chatId, 'Belum ada tebakan yang sedang berlangsung. Ketik .tebakgambar untuk memulai permainan.');
  }
});

bot.onText(/^\.stop$/, (msg) => {
  const chatId = msg.chat.id;
  if (currentGambar) {
    bot.sendMessage(chatId, `Jawaban yang benar adalah\n "${currentGambar.answer}". \n\nKetik .tebakgambar untuk melanjutkan permainan.`);
    currentGambar = null;
  } else {
    bot.sendMessage(chatId, 'Belum ada tebakan yang sedang berlangsung. Ketik .tebakgambar untuk memulai permainan.');
  }
});
// tebak caklontong
bot.onText(/^\.tebaksulit$/, (msg) => {
  const chatId = msg.chat.id;
  if (currentQuestion) {
    bot.sendMessage(chatId, 'Masih ada tebakan yang belum selesai. Silakan jawab terlebih dahulu.');
  } else {
    fetchQuestion(chatId);
  }
});

bot.onText(/^\.calo (.+)$/, (msg, match) => {
  const chatId = msg.chat.id;
  const answer = match[1];
  if (currentQuestion) {
    checkAnswer(chatId, answer);
  } else {
    bot.sendMessage(chatId, 'Belum ada tebakan yang sedang berlangsung. Ketik .tebaksulit untuk memulai permainan.');
  }
});

bot.onText(/^\.nyerah$/, (msg) => {
  const chatId = msg.chat.id;
  if (currentQuestion) {
    bot.sendMessage(chatId, `Jawaban yang benar adalah\n "${currentQuestion.answer}". \n\nKetik .tebaksulit untuk melanjutkan permainan.`);
    currentQuestion = null;
  } else {
    bot.sendMessage(chatId, 'Belum ada tebakan yang sedang berlangsung. Ketik .tebaksulit untuk memulai permainan.');
  }
});
// tebak kata
bot.onText(/^\.tebaksimpel$/, (msg) => {
  const chatId = msg.chat.id;
  if (currentTebakan) {
    bot.sendMessage(chatId, 'Masih ada tebakan yang belum selesai. Silakan jawab terlebih dahulu.');
  } else {
    getTebakKata(chatId);
  }
});

bot.onText(/^\.kata (.+)$/, (msg, match) => {
  const chatId = msg.chat.id;
  const answer = match[1];
  if (currentTebakan) {
    checkAnswerx(chatId, answer);
  } else {
    bot.sendMessage(chatId, 'Belum ada tebakan yang sedang berlangsung. Ketik .tebaksimpel untuk memulai permainan.');
  }
});

bot.onText(/^\.surend$/, (msg) => {
  const chatId = msg.chat.id;
  if (currentTebakan) {
    bot.sendMessage(chatId, `Jawaban yang benar adalah\n "${currentTebakan.jawaban}". \n\nKetik .tebaksimpel untuk melanjutkan permainan.`);
    currentTebakan = null;
  } else {
    bot.sendMessage(chatId, 'Belum ada tebakan yang sedang berlangsung. Ketik .tebaksimpel untuk memulai permainan.');
  }
});

// Mendapatkan tebakan kata dari API
// family 100
function familySatu(chatId) {
  axios.get(`https://api.lolhuman.xyz/api/tebak/family100?apikey=${API_KEY}`)
    .then((response) => {
      const question = response.data.result;
      currentFamily = question;
      bot.sendMessage(chatId, question.question);
      bot.sendMessage(chatId, 'Ketik .jawab untuk menjawab pertanya.');
    })
    .catch((error) => {
      console.log(error);
      bot.sendMessage(chatId, 'Terjadi kesalahan saat mengambil pertanyaan. Silakan coba lagi nanti.');
    });
}

function checkFamily(chatId, answer) {
  const correctAnswer = currentFamily.answer.toLowerCase();
  if (answer.toLowerCase() === correctAnswer) {
    bot.sendMessage(chatId, 'Jawaban benar! Selamat!');
    currentFamily = null;
  } else {
    bot.sendMessage(chatId, 'Jawaban salah. Silakan coba lagi.');
  }
}
// tebak Gambar
function tebakGambar(chatId) {
  axios.get(`https://api.lolhuman.xyz/api/tebak/gambar2?apikey=${API_KEY}`)
    .then((response) => {
      const question = response.data.result;
      currentGambar = question;
      bot.sendPhoto(chatId, question.image);
      bot.sendMessage(chatId, 'Ketik .gambar untuk menjawab pertanya.');
    })
    .catch((error) => {
      console.log(error);
      bot.sendMessage(chatId, 'Terjadi kesalahan saat mengambil pertanyaan. Silakan coba lagi nanti.');
    });
}

function checkGambar(chatId, answer) {
  const correctAnswer = currentGambar.answer.toLowerCase();
  if (answer.toLowerCase() === correctAnswer) {
    bot.sendMessage(chatId, 'Jawaban benar! Selamat!');
    currentGambar = null;
  } else {
    bot.sendMessage(chatId, 'Jawaban salah. Silakan coba lagi.');
  }
}
// Random Tebaka tebakan
const randomapit = [
      `https://api.lolhuman.xyz/api/tebak/kata?apikey=${API_KEY}`,
      `https://api.lolhuman.xyz/api/tebak/asahotak?apikey=${API_KEY}`
    ]
function getTebakKata(chatId) {
      const apiURLx = pickRandom(randomapit);
      axios.get(apiURLx)
     .then((response) => {
      const question = response.data.result;
      currentTebakan = question;
      bot.sendMessage(chatId, question.pertanyaan);
      bot.sendMessage(chatId, 'Ketik .kata untuk menjawab pertanya.');
    })
    .catch((error) => {
      console.log(error);
      bot.sendMessage(chatId, 'Terjadi kesalahan saat mengambil pertanyaan. Silakan coba lagi nanti.');
    });
}

function checkAnswerx(chatId, answer) {
  const correctAnswer = currentTebakan.jawaban.toLowerCase();
  if (answer.toLowerCase() === correctAnswer) {
    bot.sendMessage(chatId, 'Jawaban benar! Selamat!');
    currentTebakan = null;
  } else {
    bot.sendMessage(chatId, 'Jawaban salah. Silakan coba lagi.');
  }
}
// random tebak tebakan
const randomapi = [
      `https://api.lolhuman.xyz/api/tebak/caklontong?apikey=${API_KEY}`,
      `https://api.lolhuman.xyz/api/tebak/lirik?apikey=${API_KEY}`,
      `https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${API_KEY}`   
    ]
function fetchQuestion(chatId) {
      const apiURL = pickRandom(randomapi);
      axios.get(apiURL)
      .then((response) => {
      const question = response.data.result;
      currentQuestion = question;
      bot.sendMessage(chatId, question.question);
      bot.sendMessage(chatId, 'Ketik .calo untuk menjawab pertanya.');
    })
    .catch((error) => {
      console.log(error);
      bot.sendMessage(chatId, 'Terjadi kesalahan saat mengambil pertanyaan. Silakan coba lagi nanti.');
    });
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function checkAnswer(chatId, answer) {
  const correctAnswer = currentQuestion.answer.toLowerCase();
  if (answer.toLowerCase() === correctAnswer) {
    bot.sendMessage(chatId, 'Jawaban benar! Selamat!');
    currentQuestion = null;
  } else {
    bot.sendMessage(chatId, 'Jawaban salah. Silakan coba lagi.');
  }
}

}
module.exports = tebakHandler;
