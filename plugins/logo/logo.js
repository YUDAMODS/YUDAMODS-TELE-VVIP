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
/*
* Nama Pengembang: MR.Felix 
* Kontak Whatsapp: wa.me/62856932854302
* Kontak Telegram: t.me/Globalelits
* Akun Github: github.com/Felixhasgawa
* Catatan: Skrip ini tidak Geratis.
*/

const config = require('../../config');
const btc = config.apibot;
module.exports = (bot) => {
  bot.onText(/\.giraffe(.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const text = match[1];
    if (!text) {
      bot.sendMessage(chatId, 'TEXT NYA MANA CO');
      return;
    }
      const pingMsg = await bot.sendMessage(chatId, '🔍 waait');
      const res = `https://api.botcahx.eu.org/api/textpro/giraffe?text=${text}&apikey=${btc}`;
      bot.sendPhoto(chatId, res);
      bot.editMessageText(`sukses broo`, {
        chat_id: chatId,
        message_id: pingMsg.message_id
      });
    });
    bot.onText(/\.magma(.+)/, async (msg, match) => {
      const chatId = msg.chat.id;
      const text = match[1];
      if (!text) {
        bot.sendMessage(chatId, 'TEXT NYA MANA CO');
        return;
      }
      const pingMsg = await bot.sendMessage(chatId, '🔍 waait');
      const res = `https://api.botcahx.eu.org/api/textpro/magma?text=${text}&apikey=${btc}`;
      bot.sendPhoto(chatId, res);
      bot.editMessageText(`sukses broo`, {
        chat_id: chatId,
        message_id: pingMsg.message_id
      });
  });
   bot.onText(/\.hallowen(.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const text = match[1];
    if (!text) {
      bot.sendMessage(chatId, 'TEXT NYA MANA CO');
      return;
    }
    const pingMsg = await bot.sendMessage(chatId, '🔍 waait');
    const res = `https://api.botcahx.eu.org/api/textpro/hallowen-text?text=${text}&apikey=${btc}`;
    bot.sendPhoto(chatId, res);
    bot.editMessageText(`sukses broo`, {
      chat_id: chatId,
      message_id: pingMsg.message_id
    });
});
bot.onText(/\.valentine(.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  if (!text) {
    bot.sendMessage(chatId, 'TEXT NYA MANA CO');
    return;
  }
  const pingMsg = await bot.sendMessage(chatId, '🔍 waait');
  const res = `https://api.botcahx.eu.org/api/textpro/valentine?text=${text}&apikey=${btc}`;
  bot.sendPhoto(chatId, res);
  bot.editMessageText(`sukses broo`, {
    chat_id: chatId,
    message_id: pingMsg.message_id
  });
});
bot.onText(/\.neonlight(.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  if (!text) {
    bot.sendMessage(chatId, 'TEXT NYA MANA CO');
    return;
  }
  const pingMsg = await bot.sendMessage(chatId, '🔍 waait');
  const res = `https://api.botcahx.eu.org/api/textpro/neon-light?text=${text}&apikey=${btc}`;
  bot.sendPhoto(chatId, res);
  bot.editMessageText(`sukses broo`, {
    chat_id: chatId,
    message_id: pingMsg.message_id
  });
});
bot.onText(/\.neongalaxy(.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  if (!text) {
    bot.sendMessage(chatId, 'TEXT NYA MANA CO');
    return;
  }
  const pingMsg = await bot.sendMessage(chatId, '🔍 waait');
  const res = `https://api.botcahx.eu.org/api/textpro/neon-galaxy?text=?text=${text}&apikey=${btc}`;
      bot.sendPhoto(chatId, res);
      bot.editMessageText(`sukses broo`, {
        chat_id: chatId,
        message_id: pingMsg.message_id
      });
});
bot.onText(/\.neongreen(.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  if (!text) {
    bot.sendMessage(chatId, 'TEXT NYA MANA CO');
    return;
  }
  const pingMsg = await bot.sendMessage(chatId, '🔍 waait');
  const res = `https://api.botcahx.eu.org/api/textpro/neon-green?text=${text}&apikey=${btc}`;
      bot.sendPhoto(chatId, res);
      bot.editMessageText(`sukses broo`, {
        chat_id: chatId,
        message_id: pingMsg.message_id
      });
});
bot.onText(/\.brokenglass(.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  if (!text) {
    bot.sendMessage(chatId, 'TEXT NYA MANA CO');
    return;
  }
  const pingMsg = await bot.sendMessage(chatId, '🔍 waait');
  const res = `https://api.botcahx.eu.org/api/textpro/broken-glass?text=${text}&apikey=${btc}`;
  bot.sendPhoto(chatId, res);
  bot.editMessageText(`sukses broo`, {
    chat_id: chatId,
    message_id: pingMsg.message_id
  });
});
bot.onText(/\.artpapper(.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  if (!text) {
    bot.sendMessage(chatId, 'TEXT NYA MANA CO');
    return;
  }
  const pingMsg = await bot.sendMessage(chatId, '🔍 waait');
  const res = `https://api.botcahx.eu.org/api/textpro/art-papper?text=${text}&apikey=${btc}`;
      bot.sendPhoto(chatId, res);
      bot.editMessageText(`sukses broo`, {
        chat_id: chatId,
        message_id: pingMsg.message_id
      });
});
bot.onText(/\.glossy(.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  if (!text) {
    bot.sendMessage(chatId, 'TEXT NYA MANA CO');
    return;
  }
  const pingMsg = await bot.sendMessage(chatId, '🔍 waait');
  const res = `https://api.botcahx.eu.org/api/textpro/glossy?text=${text}&apikey=${btc}`;
  bot.sendPhoto(chatId, res);
  bot.editMessageText(`sukses broo`, {
    chat_id: chatId,
    message_id: pingMsg.message_id
  });
});
bot.onText(/\.watercolor(.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  if (!text) {
    bot.sendMessage(chatId, 'TEXT NYA MANA CO');
    return;
  }
  const pingMsg = await bot.sendMessage(chatId, '🔍 waait');
  const res = `https://api.botcahx.eu.org/api/textpro/water-color?text=${text}&apikey=${btc}`;
  bot.sendPhoto(chatId, res);
  bot.editMessageText(`sukses broo`, {
    chat_id: chatId,
    message_id: pingMsg.message_id
  });
});
bot.onText(/\.multicolor(.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  if (!text) {
    bot.sendMessage(chatId, 'TEXT NYA MANA CO');
    return;
  }
  const pingMsg = await bot.sendMessage(chatId, '🔍 waait');
  const res = `https://api.botcahx.eu.org/api/textpro/multi-color?text=${text}&apikey=${btc}`;
  bot.sendPhoto(chatId, res);
  bot.editMessageText(`sukses broo`, {
    chat_id: chatId,
    message_id: pingMsg.message_id
  });
});
bot.onText(/\.pornhub/, (msg) => {
  const chatId = msg.chat.id;
  const args = msg.text.split(/\s+/); 
  if (args.length !== 3) {
    bot.sendMessage(chatId, 'TEXT NYA MANA CO');
    return;
  }
        const text = args[1];
        const textx = args[2];
      const res = `https://api.botcahx.eu.org/api/textpro/pornhub?text=${text}&text2=${textx}&apikey=${btc}`;
      bot.sendPhoto(chatId, res);
    });
      bot.onText(/\.wolflogo/, (msg) => {
        const chatId = msg.chat.id;
        const args = msg.text.split(/\s+/); 
        if (args.length !== 3) {
          bot.sendMessage(chatId, 'TEXT NYA MANA CO');
          return;
        }
              const text = args[1];
              const textx = args[2];
      const res = `https://api.botcahx.eu.org/api/textpro/logo-wolf?text=${text}&text2=${textx}&apikey=${btc}`;
      bot.sendPhoto(chatId, res);
  });
  bot.onText(/\.logowolf/, (msg) => {
    const chatId = msg.chat.id;
    const args = msg.text.split(/\s+/); 
    if (args.length !== 3) {
      bot.sendMessage(chatId, 'TEXT NYA MANA CO');
      return;
    }
          const text = args[1];
          const textx = args[2];
    const res = `https://api.botcahx.eu.org/api/textpro/logo-wolf2?text=${text}&text2=${textx}&apikey=${btc}`;
    bot.sendPhoto(chatId, res);
}); 
bot.onText(/\.space/, (msg) => {
  const chatId = msg.chat.id;
  const args = msg.text.split(/\s+/); 
  if (args.length !== 3) {
    bot.sendMessage(chatId, 'TEXT NYA MANA CO');
    return;
  }
        const text = args[1];
        const textx = args[2];
  const res = `https://api.botcahx.eu.org/api/textpro/space?text=${text}&text2=${textx}&&apikey=${btc}`;
  bot.sendPhoto(chatId, res);
});
bot.onText(/\.glitch/, (msg) => {
  const chatId = msg.chat.id;
  const args = msg.text.split(/\s+/); 
  if (args.length !== 3) {
    bot.sendMessage(chatId, 'TEXT NYA MANA CO');
    return;
  }
        const text = args[1];
        const textx = args[2];
  const res = `https://api.botcahx.eu.org/api/textpro/glitch?text=${text}&text2=${textx}&apikey=${btc}`;
  bot.sendPhoto(chatId, res);
  });
};
