let fetch = require('node-fetch')
const config = require('../../config');
const btc = config.apibot;
module.exports = (bot) => {

  bot.onText(/^\.ghstalk (.+)$/, async (msg, match) => {
    const chatId = msg.chat.id;
      const username = match[1];
      if (!username) {
        bot.sendMessage(chatId, 'Masukan username, contoh: .ghstalk felix');
        return;
      }
    try {     
        let json = await fetch(`https://api.botcahx.eu.org/api/stalk/github?username=${username}&apikey=${btc}`).then(res => res.json());
        let textco = `⦿  *G H - S T A L K*\n\n`
        textco += `	◦  *Name* : ${json.result.user.username}\n`
        textco += `	◦  *ID* : ${json.result.user.idUser}\n`
        textco += `	◦  *NodeId* : ${json.result.user.nodeId}\n`
        textco += `	◦  *Name* : ${json.result.user.username}\n`
        textco += `	◦  *Followers* : ${json.result.user.followers}\n`
        textco += `	◦  *Following* : ${json.result.user.following}\n`
        textco += `	◦  *Bio* : ${json.result.user.bio}\n`
        textco += `	◦  *Type* : ${json.result.user.type}\n`
        textco += `	◦  *Company* : ${json.result.user.company}\n`
        textco += `	◦  *Repo* : ${json.result.user.publicRepos}\n`
        textco += `	◦  *Create At* : ${json.result.user.createdAt}\n`
        textco += `	◦  *Update At* : ${json.result.user.updatedAt}\n`
        textco += `	◦  *Url* : ${json.result.user.githubUrl}\n`    
        bot.sendPhoto(chatId, json.result.user.avatarUrl, { caption: textco, parse_mode: 'Markdown' });
    } catch (e) {
    text = 'Maaf, terjadi kesalahan saat mengambil data.';
      
                bot.sendPhoto(msg.chat.id, config.error, { caption: text, });
    }
});
};

