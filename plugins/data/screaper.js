const axios = require('axios')
const cheerio = require('cheerio')
const chalk = require('chalk')
const FormData = require('form-data')
const BodyForm = require('form-data')
const yts = require('yt-search')
const ytdl = require('ytdl-core')
const fs = require('fs')

exports.lirik = function (judul) {
return new Promise(async(resolve, reject) => {
axios.get('https://www.musixmatch.com/search/' + judul)
.then(async({ data }) => {
const $ = cheerio.load(data)
const hasil = {};
let limk = 'https://www.musixmatch.com'
const link = limk + $('div.media-card-body > div > h2').find('a').attr('href')
await axios.get(link)
.then(({ data }) => {
const $$ = cheerio.load(data)
hasil.thumb = 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src')
$$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function(a,b) {
hasil.lirik = $$(b).find('span > p > span').text() +'\n' + $$(b).find('span > div > p > span').text()
})
})
resolve(hasil)
})
.catch(reject)
})
}

exports.cerpen = function (category) {
return new Promise((resolve, reject) => {
let title = category.toLowerCase().replace(/[()*]/g, "")
let judul = title.replace(/\s/g, "-")
let page = Math.floor(Math.random() * 5)
axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
.then((get) => {
let $ = cheerio.load(get.data)
let link = []
$('article.post').each(function (a, b) {
link.push($(b).find('a').attr('href'))
})
let random = link[Math.floor(Math.random() * link.length)]
axios.get(random)
.then((res) => {
let $$ = cheerio.load(res.data)
let hasil = {
title: $$('#content > article > h1').text(),
author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
cerita: $$('#content > article > p').text()
}
resolve(hasil)
})
})
})
}


exports.instagramdl = (url) => {
return new Promise(async(resolve,reject) => {
try {
let res = await axios("https://indown.io/");
let _$ = cheerio.load(res.data);
let referer = _$("input[name=referer]").val();
let locale = _$("input[name=locale]").val();
let _token = _$("input[name=_token]").val();
let { data } = await axios.post("https://indown.io/download", new URLSearchParams({ link: url, referer, locale, _token }), { headers: { cookie: res.headers["set-cookie"].join("; ") }});
let $ = cheerio.load(data);
let result = [];
let __$ = cheerio.load($("#result").html());
__$("video").each(function () {
let $$ = $(this);
result.push({
type: "video",
thumbnail: $$.attr("poster"),
url: $$.find("source").attr("src"),
});
});
__$("img").each(function () {
let $$ = $(this);
result.push({
type: "image",
url: $$.attr("src"),
});
});
resolve({ status: true, result: result })
} catch (e) {
console.log(e)
reject({ status: false, msg: e })
}
})
}

exports.fileUgu = async (input) => {
return new Promise(async (resolve, reject) => {
const form = new FormData
form.append("files[]", fs.createReadStream(input));
await axios({
url: "https://uguu.se/upload.php",
method: "POST",
headers: {
"User-Agent":
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
...form.getHeaders(),
},
data: form,
})
.then((data) => {
resolve(data.data.files[0]);
})
.catch((err) => reject(err));
});
}

exports.tiktokdl = function(url) {
return new Promise((resolve, reject) => {
if (!/tiktok/.test(url)) return reject(new Error('URL is Invalid!'));
axios.get("https://api.tiklydown.link/api/download", { params: { url } })
.then((b) => resolve(b.data))
.catch(reject);
});
}

exports.pinterest = function (t) {
  return new Promise(async (e, a) => {
    axios
      .get("https://id.pinterest.com/search/pins/?autologin=true&q=" + t, {
        headers: {
          cookie:
            '_auth=1; _b="AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg="; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0',
        },
      })
      .then(({ data: t }) => {
        const a = cheerio.load(t),
          i = [],
          c = [];
        a("div > a")
          .get()
          .map((t) => {
            const e = a(t).find("img").attr("src");
            i.push(e);
          }),
          i.forEach((t) => {
            null != t && c.push(t.replace(/236/g, "736"));
          }),
          c.shift(),
          e(c);
      });
  });
}

exports.telegraPh = async (Path) => {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

const SPOTIFY_CLIENT_ID = '4c4fc8c3496243cbba99b39826e2841f'
const SPOTIFY_CLIENT_SECRET = 'd598f89aba0946e2b85fb8aefa9ae4c8'

function convert(ms) {
var minutes = Math.floor(ms / 60000)
var seconds = ((ms % 60000) / 1000).toFixed(0)
return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

const spotifyCreds = () => {
return new Promise(async resolve => {
try {
const json = await (await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
headers: {
Authorization: 'Basic ' + Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')
}
})).data
if (!json.access_token) return resolve({
creator: 'Surya',
status: false,
msg: 'Can\'t generate token!'
})
resolve({
creator: 'Surya',
status: true,
data: json
})
} catch (e) {
resolve({
creator: 'Surya',
status: false,
msg: e.message
})
}
})
}

exports.getInfoSpotify = async (url) => {
return new Promise(async resolve => {
try {
const creds = await spotifyCreds()
if (!creds.status) return resolve(creds)
const json = await (await axios.get('https://api.spotify.com/v1/tracks/' + url.split('track/')[1], {
headers: {
Authorization: 'Bearer ' + creds.data.access_token
}
})).data
resolve({
creator: 'Surya',
status: true,
data: {
thumbnail: json.album.images[0].url,
title: json.artists[0].name + ' - ' + json.name,
artist: json.artists[0],
duration: convert(json.duration_ms),
preview: json.preview_url
}
})
} catch (e) {
resolve({
creator: 'Surya',
status: false,
msg: e.message
})
}
})
}

exports.searchSpotify = async (query, type = 'track', limit = 20) => {
return new Promise(async resolve => {
try {
const creds = await spotifyCreds()
if (!creds.status) return resolve(creds)
const json = await (await axios.get('https://api.spotify.com/v1/search?query=' + query + '&type=' + type + '&offset=0&limit=' + limit, {
headers: {
Authorization: 'Bearer ' + creds.data.access_token
}
})).data
if (!json.tracks.items || json.tracks.items.length < 1) return resolve({
creator: 'Surya',
status: false,
msg: 'Music not found!'
})
let data = []
json.tracks.items.map(v => data.push({
title: v.album.artists[0].name + ' - ' + v.name,
duration: convert(v.duration_ms),
popularity: v.popularity + '%',
preview: v.preview_url,
url: v.external_urls.spotify
}))
resolve({
creator: 'Surya',
status: true,
data: data
})
} catch (e) {
resolve({
creator: 'Surya',
status: false,
msg: e.message
})
}
})
}




let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})