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
const fs = require('fs');
const config = require('../../config');
const premiumUsersFile = 'database/PremiumFile.json';

try {
    premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
} catch (error) {
    console.error('Error reading premiumUsers file:', error);
    }
// Memisahkan URL dan API key ke dalam variabel konfigurasi
const API_KEY = config.apibot;

module.exports = (bot) => {
  bot.onText(/^\.ai(\s+.+)?/, async (msg, match) => {
    const chatId = msg.chat.id;
    const question = match[1] ? match[1].trim() : null;

  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isReseller = premiumUsers.includes(String(msg.from.id));
  if (!isReseller) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users RESELLER, Hubungi Admin Saya Untuk Menjadi Users ...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: config.adminUrl }
          ]
        ]
      }
    });
    return;
  }
    if (!question) {
      bot.sendMessage(chatId, 'Masukan pertanyaan, contoh: /ai siapa namamu');
      return;
    }
    const apiUrl = await fetch(`https://api.betabotz.eu.org/api/search/openai-chat?text=${encodeURIComponent(question)}&apikey=${API_KEY}`);

    try {
  const res = await apiUrl.json()
      const answer = res.message;

      if (!answer) {
        text = 'Maaf, tidak dapat menemukan jawaban untuk pertanyaan Anda.';
    
              bot.sendPhoto(From, config.error, { caption: text });
        return;
      }

      bot.sendMessage(chatId, answer,{parse_mode: 'Markdown'});
    } catch (error) {
      console.error(error);
     
      text = 'Maaf, terjadi kesalahan saat mengambil data.';
    
              bot.sendPhoto(From, config.error, { caption: text, });
    }
  });
};