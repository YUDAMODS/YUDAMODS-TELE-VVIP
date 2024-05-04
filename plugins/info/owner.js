/*
* Nama Pengembang: MR.Felix 
* Kontak Whatsapp: wa.me/62856932854302
* Kontak Telegram: t.me/Globalelits
* Akun Github: github.com/Felixhasgawa
* Catatan: Skrip ini tidak Geratis.
*/
module.exports = (bot) => {
  bot.onText(/\.owner/, (msg) => {
      const chatId = msg.chat.id;
      const ownerUsername = 'YUDAMODSZX';
      const replyMessage = `🐱 This is my owner\n`;

      const options = {
          reply_markup: {
              inline_keyboard: [
                  [{ text: 'OWNER', url: `https://t.me/${ownerUsername}` }]
              ]
          }
      };

      bot.sendMessage(chatId, replyMessage, options);
  });
};