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
const config = require('../../config');
// Memisahkan URL dan API key ke dalam variabel konfigurasi
const API_KEY = config.apilol;

module.exports = (bot) => {
  bot.on('message', async (msg) => {
    const command = msg.text ? msg.text.toLowerCase() : '';

    if (command.startsWith('.superhero ')) {
      const superheroName = command.substring('/superhero '.length).trim();
      const apiUrl = `https://api.lolhuman.xyz/api/superhero?apikey=${API_KEY}&query=${superheroName}`;

      try {
        const response = await axios.get(apiUrl);
        const data = response.data.result;
        const { name, biography, image } = data;
        const message = `• 🦸‍♂️ ${name}\n\n• 🏷️ Full Name: ${biography['full-name']}\n• 👤 Alter-egos: ${biography['alter-egos']}\n• 👥 Aliases: ${biography.aliases.join(", ")}\n• 🌍 Place of Birth: ${biography['place-of-birth']}\n• 📅 First Appearance: ${biography['first-appearance']}\n• 📚 Publisher: ${biography.publisher}`;

        bot.sendPhoto(msg.chat.id, image.url, { caption: message });
      } catch (error) {
        console.log(error);
        text = 'Maaf, terjadi kesalahan saat mengambil data.';
      
                bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
      }
    } else if (command === '.superhero') {
      bot.sendMessage(msg.chat.id, 'Masukkan nama superhero, Contoh: /superhero hulk');
    }
  });
};