const axios = require('axios');

// API Key
const config = require('../../config');
// Memisahkan URL dan API key ke dalam variabel konfigurasi
const API_KEY = config.apilol;

// Fungsi untuk mengambil data dari api.lolhuman.xyz berdasarkan fitur
async function getDataByFeature(feature) {
    try {
        const response = await axios.get(`https://api.lolhuman.xyz/api/${feature}`, {
            headers: {
                'apikey': API_KEY
            }
        });
        const data = response.data.result;
        return data;
    } catch (error) {
        console.error('Error:', error);
        return `Maaf, terjadi kesalahan dalam mengambil data untuk fitur ${feature}.`;
    }
}

// Fungsi untuk menangani perintah '/randomjoke'
async function handleRandomJoke() {
    try {
        const joke = await getDataByFeature('random/joke');
        return joke;
    } catch (error) {
        console.error('Error:', error);
        return 'Maaf, terjadi kesalahan dalam mengambil joke.';
    }
}

// Fungsi untuk menangani perintah '/randomquote'
async function handleRandomQuote() {
    try {
        const quote = await getDataByFeature('random/quote');
        return quote;
    } catch (error) {
        console.error('Error:', error);
        return 'Maaf, terjadi kesalahan dalam mengambil quote.';
    }
}

// Fungsi untuk menangani perintah '/randommeme'
async function handleRandomMeme() {
    try {
        const meme = await getDataByFeature('meme');
        return meme;
    } catch (error) {
        console.error('Error:', error);
        return 'Maaf, terjadi kesalahan dalam mengambil meme.';
    }
}

// Fungsi untuk menangani perintah '/randomcat'
async function handleRandomCat() {
    try {
        const catImage = await getDataByFeature('cat');
        return catImage;
    } catch (error) {
        console.error('Error:', error);
        return 'Maaf, terjadi kesalahan dalam mengambil gambar kucing.';
    }
}

module.exports = {
    handleRandomJoke,
    handleRandomQuote,
    handleRandomMeme,
    handleRandomCat
};
