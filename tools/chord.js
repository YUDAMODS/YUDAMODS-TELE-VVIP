const fetch = require('node-fetch');

module.exports = (bot) => {
  bot.onText(/^\.chord (.+)$/, async (msg, match) => {
    try {
      const text = match[1];
      
    if (!text) {
      bot.sendMessage(msg.chat.id, 'Masukan link TikTok yang ingin Anda download, contoh: .chord <judul lagu>');
      return;
    }

	let data = await chord(text)
	await bot.sendMessage(msg.chat.id, `*Song :* ${text}\n*Chord :*\n\n${data.chord}`)
} catch (error) {
      console.error(error);
        bot.sendMessage(chatId, "*Failed!*", { parse_mode: 'Markdown' });
    }
});
}

const chord = async (query) => {
    try {
        let data = "";
        await fetch(`https://aemt.me/chord?query=${query}`).then((res) => {
            data = res;
        });       
        let jsonData = "";
        await data.json().then((res) => {
            jsonData = res;
        });
        let result = "";
        await new Promise((resolve) => {
            setTimeout(() => {
                result = jsonData.result;
                resolve();
            }, 1000);
        });
        return result;
    } catch (error) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ error: error.mesaage });
            }, 1000);
        });
    }
}
