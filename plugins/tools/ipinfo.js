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
const os = require('os');
const settings = require('../../config')
const apifel = settings.apilol;


async function getSfelix(ipp) {
  try {
    const response = await axios.get(`https://api.lolhuman.xyz/api/ipaddress/${ipp}?apikey=${apifel}`);
    const data = response.data.result;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = (bot) => {
  bot.onText(/^\.ip(?:\s+(.+)|)$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const ipp = match[1];
    if (!ipp) {
      bot.sendMessage(chatId, 'Masukkan ip addres Contoh: .ip 0.0.0.0');
      return;
    }
    try {
      const data = await getSfelix(ipp);
      if (!data) {
        bot.sendMessage(chatId, `Maaf, tidak dapat menemukan informasi ip ${ipp}.`);
        return;
      }
      const message = `Informasi Ip Target ${ipp}: \n•
       Y U D A M O D S  T R A C K E R

Country: ${data.country}
City: ${data.city}
Timezone: ${data.timezone}
Maps: http://www.google.com/maps/place/${data.lat},${data.lon}/@${data.lat},${data.lon}`;
      bot.sendMessage(chatId, message);
    } catch (error) {
      console.error(error);
     
      text = 'Maaf, terjadi kesalahan saat mengambil data.';
    
              bot.sendPhoto(chatId, config.error, { caption: text, });
    }
  });
  function formatUptime(uptime) {
    let seconds = Math.floor(uptime % 60);
    let minutes = Math.floor((uptime / 60) % 60);
    let hours = Math.floor((uptime / (60 * 60)) % 24);
    let days = Math.floor(uptime / (60 * 60 * 24));
  
    let formattedUptime = '';
    if (days > 0) formattedUptime += `${days} days `;
    if (hours > 0) formattedUptime += `${hours} hours `;
    if (minutes > 0) formattedUptime += `${minutes} minutes `;
    if (seconds > 0) formattedUptime += `${seconds} seconds`;
  
    return formattedUptime;
  }
  
  bot.onText(/^\.ips(?:\s+(.+)|)$/, async (msg, match) => {
    const chatId = msg.chat.id;
    const ippx = match[1];
    const response = await axios.get(`http://ip-api.com/json/ ${ippx}`);
    const serverInfo = response.data;
        try {
      
      let serverMessage = `•  S E R V E R\n\n`;

    const uptime = os.uptime();
    const uptimeFormatted = formatUptime(uptime);

    serverMessage += `┌   ◦  Country : ${serverInfo.country}\n`;
    serverMessage += `│  ◦  CountryCode : ${serverInfo.countryCode}\n`;
    serverMessage += `│  ◦  Region : ${serverInfo.region}\n`;
    serverMessage += `│  ◦  RegionName : ${serverInfo.regionName}\n`;
    serverMessage += `│  ◦  City : ${serverInfo.city}\n`;
    serverMessage += `│  ◦  Zip : ${serverInfo.zip}\n`;
    serverMessage += `│  ◦  Lat : ${serverInfo.lat}\n`;
    serverMessage += `│  ◦  Lon : ${serverInfo.lon}\n`;
    serverMessage += `│  ◦  Timezone : ${serverInfo.timezone}\n`;
    serverMessage += `│  ◦  Isp : ${serverInfo.isp}\n`;
    serverMessage += `│  ◦  Org : ${serverInfo.org}\n`;
    serverMessage += `│  ◦  As : ${serverInfo.as}\n`;
    serverMessage += `│  ◦  Query : HIDDEN\n`;
    serverMessage += `└  ◦  Uptime : ${uptimeFormatted}\n`;
      bot.sendMessage(chatId, serverMessage);
    } catch (error) {
      console.error(error);
     
      text = 'Maaf, terjadi kesalahan saat mengambil data.';
    
              bot.sendPhoto(chatId, config.error, { caption: text, });
    }
  });
};