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
// functions.js

const axios = require('axios');
const chalk = require('chalk');

let accessList = [];

async function fetchAccessList() {
    try {
        const { data: accessData } = await axios.get('https://pastebin.com/zAzYhNAx');
        accessList = accessData;
    } catch (error) {
        throw 'Error loading access list: ' + error.message;
    }
}

async function getBotIP() {
    try {
        const ipInfo = await axios.get('https://ipinfo.io/json');
        const { ip: botIP } = ipInfo.data;
        return botIP;
    } catch (error) {
        throw 'Error getting bot IP.';
    }
}

async function functions() {
    if (accessList.length === 0) {
        await fetchAccessList();
    }

    const botIP = await getBotIP();

    if (!accessList.includes(botIP)) {
        console.log('Your IP Address is Not Registered: ' + chalk.red(botIP) + '\n');
        console.log('Please Contact The Developer at wa.me/6283153305709\n');
        return false;
    }

    console.log('Congratulations, Your IP Address ' + botIP + ' is Registered.\n');
    return true;
}

module.exports = functions ;