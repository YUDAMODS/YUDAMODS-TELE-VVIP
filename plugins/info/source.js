/*
* Nama Pengembang: MR.Felix 
* Kontak Whatsapp: wa.me/62856932854302
* Kontak Telegram: t.me/Globalelits
* Akun Github: github.com/Felixhasgawa
* Catatan: Skrip ini tidak Geratis.
*/
module.exports = (bot) => {
  bot.onText(/\.script/, (msg) => {
    const chatId = msg.chat.id;
    const replyMessage = '😀 This is source code bot';

    const options = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Source Code', url: 't.me/YUDAMODS' }]
        ]
      }
    };

    bot.sendMessage(chatId, replyMessage, options);
  });
};