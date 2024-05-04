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
const fetch = require('node-fetch');
const config = require('../../config');
// Memisahkan URL dan API key ke dalam variabel konfigurasi
const apifel = config.apilol;

module.exports = (bot) => {
    bot.onText(/^\.stalktt(?:\s+(\w+))?$/, async (msg, match) => {
        const chatId = msg.chat.id;
        const username = match[1];
    
        if (!username) {
          bot.sendMessage(chatId, 'Masukan username yang ingin Anda download profile nya, contoh: .stalktt betabotz');
          return;
        }
        const apiUrl = `https://api.betabotz.eu.org/api/stalk/tt?username=${username}&apikey=${apifel}`;
    
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error(`Request failed with status code ${response.status}`);
          }
             const responseData = await response.json();
             const { profile, username, description, likes, followers, following, totalPosts } = responseData.result;
  
  
        bot.sendPhoto(chatId, profile, {
          caption: `
  ╭─ •  「 Tiktok Stalk 」
  │  ◦  Username : ${username}
  │  ◦  Like : ${likes}
  │  ◦  Followers : ${followers}
  │  ◦  Following : ${following}
  │  ◦  Posting : ${totalPosts}
  │  ◦  Link : https://www.tiktok.com/@${username}
  │  ◦  Bio : ${description}
  ╰──── •`
        });
        } catch (error) {
          console.error(error);
          text = 'Maaf, terjadi kesalahan saat mengambil data.';
        
                  bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
        }
      });
};