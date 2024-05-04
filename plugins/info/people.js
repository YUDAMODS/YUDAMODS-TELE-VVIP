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
  bot.onText(/\/people/, async (msg) => {
    try {
      const response = await axios.get(`https://api.lolhuman.xyz/api/random/people?apikey=${API_KEY}`);
      const data = response.data.result;
      const { name, gender, location } = data;
      const { title, first, last } = name;
      const { street, city, state, country, coordinates, timezone } = location;
      const { number, name: streetName } = street;
      
      const message = `Berikut ini adalah hasil acak dari data orang:\n\nNama: ${title} ${first} ${last}\nJenis Kelamin: ${gender}\nAlamat: ${number} ${streetName}, ${city}, ${state}, ${country}\nKoordinat: ${coordinates.latitude}, ${coordinates.longitude}\nZona waktu: ${timezone.offset} (${timezone.description})`;
      
      bot.sendMessage(msg.chat.id, message);
    } catch (error) {
      console.error(error);
      bot.sendMessage(msg.chat.id, 'Terjadi kesalahan saat memproses permintaan Anda.');
    }
  });
};