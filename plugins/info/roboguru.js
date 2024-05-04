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
const axios = require('axios');
const config = require('../../config');;
// Memisahkan URL dan API key ke dalam variabel konfigurasi
const API_KEY = config.apilol;

module.exports = (bot) => {
  bot.onText(/\/roboguru (.+)/, async (msg, match) => {
    try {
      const question = match[1];
      const query = encodeURIComponent(question);
      const grade = 'sma'; // ganti dengan tingkat pendidikan yang diinginkan
      const subject = 'sejarah'; // ganti dengan mata pelajaran yang diinginkan
      const apiUrl = `https://api.lolhuman.xyz/api/roboguru?apikey=${API_KEY}&query=${query}&grade=${grade}&subject=${subject}`;
      const response = await axios.get(apiUrl);
      const answer = response.data.result;
      let answerString = answer.map((qa, index) => `${index + 1}. <b>${qa.question}</b>\n${qa.answer}\n\n`).join('');
      const answerChunks = answerString.match(/[\s\S]{1,1000}/g) || [];
      answerChunks.forEach(chunk => {
        bot.sendMessage(msg.chat.id, `Jawaban dari pertanyaan <i>"${question}"</i> adalah:\n\n${chunk}`, { parse_mode: 'HTML' });
      });
    } catch (error) {
      console.log(error);
      bot.sendMessage(msg.chat.id, 'Maaf, YudaMods tidak menemukan jawaban yang kamu cari.');
    }
  });

  bot.onText(/\/roboguru$/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Masukkan pertanyaan yang ingin Anda cari jawabannya, contoh: /roboguru siapa itu Sazumi Viki');
  });
};