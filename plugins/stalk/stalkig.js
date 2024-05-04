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
const config = require('../../config');
// Memisahkan URL dan API key ke dalam variabel konfigurasi
const API_KEY = config.apilol;


module.exports = (bot) => {

  bot.onText(/\.stalkig (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
      const username = match[1];
      const apiUrl = `https://api.lolhuman.xyz/api/stalkig/${encodeURIComponent(username)}?apikey=${API_KEY}`;
  
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Request failed with status code ${response.status}`);
        }
  
        const responseData = await response.json();
        const { photo_profile, username, fullname, posts, followers, following, bio } = responseData.result;
  
  
        bot.sendPhoto(chatId, photo_profile, {
          caption: `
  ╭─ •  「 Instagram Stalk 」
  │  ◦  Username : ${username}
  │  ◦  Nickname : ${fullname}
  │  ◦  Followers : ${followers}
  │  ◦  Following : ${following}
  │  ◦  Posting : ${posts}
  │  ◦  Link : https://instagram.com/${username}
  │  ◦  Bio : ${bio}
  ╰──── •`
        });
      } catch (error) {
        console.error(error);
        text = 'Maaf, terjadi kesalahan saat mengambil data.';
      
                bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
      }
        });
    bot.onText(/\.stalkig$/, (msg) => {
      bot.sendMessage(msg.chat.id, 'Masukan username, Contoh: .stalkig _wndrzzka');
    });
};