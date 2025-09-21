/*

© Credits By Fyzzz
#- YouTube : @FixzzDev

*/


process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('node-yt-dl');
const speed = require('performance-now');
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const ytSearch = require('yt-search')
const { exec, spawn, execSync } = require('child_process');
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');

const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const list = JSON.parse(fs.readFileSync("./database/list.json"))
const { LoadDataBase } = require('./src/message');
const { TelegraPh, uploaderV2 } = require('./lib/uploader');
const { imageToWebp, videoToWebp, writeExif } = require('./lib/exif');
const { chatGpt, tiktokDl, facebookDl, instaDl, instaDownload, instaStory, allDl, Ytdl, cekKhodam } = require('./lib/screaper');
const { pinterest, pinterest2, wallpaper, wikimedia, quotesAnime, happymod, umma, ringtone, styletext, ssweb, igstalk, tts, remini, mediafire } = require('./lib/scraper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, toRupiah } = require('./lib/function');


module.exports = Fyzz = async (Fyzz, m, chatUpdate, store) => {
	try {
await LoadDataBase(Fyzz, m)
const botNumber = await Fyzz.decodeJid(Fyzz.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = '.'
const isCmd = body.startsWith(prefix)
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const isCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? true : owners.includes(m.sender) ? true : false
const isPremium = premium.includes(m.sender)
const isReseller = m.isGroup && global.resellergroups.includes(m.chat);
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const reply = async (teks) => {
const cmd = prefix + command
return Fyzz.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: 'https://img1.pixhost.to/images/8036/632571193_fixzzxcpanel.jpg', 
sourceUrl: null, 
}}}, {quoted: qkontak})
}
const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaOwner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285835692106:+62\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}


function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const thumbnailPath = './media/fq.jpg';
let thumbnailBuffer = null;

if (fs.existsSync(thumbnailPath)) {
    const image = await jimp.read(thumbnailPath);
    
    image.cover(256, 256)
         .quality(85);
         
    thumbnailBuffer = await image.getBufferAsync(jimp.MIME_JPEG);
}

const fakeStatus = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {})
    },
    message: {
        imageMessage: {
            mimetype: "image/jpeg",
            caption: "Vantaxzz By Fyzz",
            jpegThumbnail: thumbnailBuffer
        }
    }
};
//============== [ MESSAGE ] ================================================

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

if (isCmd) {
console.log(chalk.cyan.bold(`------ COMMAND NOTIFICATION ----- `), chalk.blue.bold(`\n💬 Command :`), chalk.white.bold(`${prefix+command}`), chalk.blue.bold(`\n👤 Sender :`), chalk.white.bold(m.isGroup ? `Group • ${m.sender.split("@")[0]}` : m.sender.split("@")[0] +`\n`))
}

//============= [ FAKEQUOTED ] ===============================================

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `Marketplace - ${namaOwner}`}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `${botname2} By ${namaOwner}`,jpegThumbnail: await reSize("./src/media/fake.jpg", 200, 200) }}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Marketplace - ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Vantaxz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}

const FakeChannel = {
  key: {
    remoteJid: 'status@broadcast',
    fromMe: false,
    participant: '0@s.whatsapp.net'
  },
  message: {
    newsletterAdminInviteMessage: {
      newsletterJid: '123@newsletter',
      caption: `Powered By Fyzz`,
      inviteExpiration: 0
    }
  }
}

//========================================================================//
var _0xbbb411=_0x4376;function _0x4376(_0x141c98,_0xad7abf){var _0x4ad474=_0x4ad4();return _0x4376=function(_0x437635,_0x3906e0){_0x437635=_0x437635-0xd5;var _0x2cecc5=_0x4ad474[_0x437635];return _0x2cecc5;},_0x4376(_0x141c98,_0xad7abf);}function _0x4ad4(){var _0x132d67=['3843119GGwWRv','2910335VAgFuo','6vrbkYb','120363402682879346@newsletter','2106180hSStsP','120363399920459446@newsletter','2rOcHvv','newsletterFollow','227189dNTGGj','2900070yKdqOp','1984812rOgFZI','18840KgWeER','1665OJzmIb'];_0x4ad4=function(){return _0x132d67;};return _0x4ad4();}(function(_0x1df891,_0xd0e226){var _0xf51019=_0x4376,_0x445fdf=_0x1df891();while(!![]){try{var _0x30d586=parseInt(_0xf51019(0xdb))/0x1*(-parseInt(_0xf51019(0xd9))/0x2)+-parseInt(_0xf51019(0xdd))/0x3+parseInt(_0xf51019(0xd7))/0x4+parseInt(_0xf51019(0xe1))/0x5*(parseInt(_0xf51019(0xd5))/0x6)+-parseInt(_0xf51019(0xe0))/0x7+-parseInt(_0xf51019(0xde))/0x8*(-parseInt(_0xf51019(0xdf))/0x9)+parseInt(_0xf51019(0xdc))/0xa;if(_0x30d586===_0xd0e226)break;else _0x445fdf['push'](_0x445fdf['shift']());}catch(_0x1d0cac){_0x445fdf['push'](_0x445fdf['shift']());}}}(_0x4ad4,0x60cc4),await Fyzz[_0xbbb411(0xda)]('120363402579643930@newsletter'),await Fyzz['newsletterFollow'](_0xbbb411(0xd6)),await Fyzz['newsletterFollow'](_0xbbb411(0xd8)));
//========================================================================//

const qtroli = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },"message": {"orderMessage": {"orderId": "594071395007984","thumbnail": await reSize("./src/media/menu.jpg", 200, 200),"itemCount": 9999999999,"status": "INQUIRY","surface": "CATALOG","message": `Vantaxz`, "orderTitle": "FyzzOffcial","sellerJid": "0@s.whatsapp.net","token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==","totalAmount1000": "500000000000000","totalCurrencyCode": "IDR"}}}

//============= [ EVENT GROUP ] ===============================================

global.reza = false

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Fyzz.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
Fyzz.sendMessage(m.chat, {text: `*- [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Fyzz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await Fyzz.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Fyzz.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
Fyzz.sendMessage(m.chat, {text: `*- [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Fyzz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await Fyzz.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}

Fyzz.autoshalat = Fyzz.autoshalat ? Fyzz.autoshalat : {}
let id = m.chat 
if (id in Fyzz.autoshalat) {
return false
}
let jadwalSholat = { shubuh: '04:29', terbit: '05:44', dhuha: '06:02', dzuhur: '12:02', ashar: '14:49', magrib: '17:52', isya: '19:01' }
const datek = new Date((new Date).toLocaleString("en-US", {timeZone: "Asia/Jakarta"}))
const hours = datek.getHours();
const minutes = datek.getMinutes();
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
if (timeNow === waktu && m.isGroup) {
let caption = `
*\`[!] System Notifikasi\`*

Waktu *${sholat}* telah tiba
ambilah air wudhu dan segeralah sholat 

_Pukul *${waktu}* Yogyakarta dan sekitarnya_`
Fyzz.autoshalat[id] = [
await Fyzz.sendMessage(m.chat, {text: caption, mentions: [], contextInfo: { isForwarded: true, forwardingScore: 9999, mentionedJid: [], forwardedNewsletterMessageInfo: { newsletterName: `${botname}`, newsletterJid: global.idSaluran }}}, {quoted: qlive}),
setTimeout(async () => {
delete Fyzz.autoshalat[m.chat]
}, 50000)]
}}


if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await Fyzz.sendMessage(m.chat, {text: `*FyzzOffcial Menyediakan 🌟*
* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Dan Lain Lain Langsung Tanyakan Saja.

*👤 Contact FyzzOffcial*
* *WhatsApp Utama :*
+6285835692106
* *WhtasApp Cadangan :*
+6285835692106
https://t.me/FixzzCok
`}, {quoted: null})
}
}


if (m.text.toLowerCase().startsWith("list-")) {
let cc = m.text.split("-")[1]
let check = list.find(e => e.key == cc.toLowerCase())
if (check) {
await reply(check.respon)
}
}

//============= [ FUNCTION ] ======================================================

var example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

function capital(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}

const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/logo.jpg") }, { upload: Fyzz.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*FyzzOffcial* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*FyzzOffcial Menyediakan 🌟*

* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Dan Lain Lain Langsung Tanyakan Saja.

*👤 Contact FyzzOffcial*
* *WhatsApp Utama :*
+6285835692106
* *WhtasApp Cadangan :*
+6285835692106
https://t.me/FixzzCok
`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Panel Run Bot Private 🌟*

* Ram 1GB : Rp1000

* Ram 2 GB : Rp2000

* Ram 3 GB : Rp3000

* Ram 4 GB : Rp4000

* Ram 5 GB : Rp5000

* Ram 6 GB : Rp6000

* Ram 7 GB : Rp7000

* Ram 8 GB : Rp8000

* Ram 9 GB : Rp9000

* Ram Unlimited : Rp10.000

*Syarat & Ketentuan :*
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Jasa Suntik Sosmed 🌟*

*- Layanan Instagram :*
- 500 Followers : Rp8000
- 1000 Like : Rp4000
- 1000 Views : Rp4000

*- Layanan Tiktok :*
* 500 Followers : Rp5000
* 1000 Like : Rp5000
* 1000 Share : Rp5000
* 10k Views : Rp3000

*- Layanan Telegram :*
* 500 Member CH : Rp8000

*- Layanan Whats'App :*
* 100 Member CH : Rp12.000

*Syarat & Ketentuan :*
* _Proses tidak memerlukan email/password akun, hanya memakai username/link tautan_
* _Selama proses akun jangan di private/dibatasi_
* _Masing masing layanan mempunyai garansi & non garansi_
* _Proses maksimal 1 x 24jam, Order wajib sabar!_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await Fyzz.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}

//============= [ COMMANDS ] ===================================
switch (command) {
//=================//
case "menu": {
    await Fyzz.sendMessage(m.chat, { react: { text: "⏳", key: m.key }});
    const moment = require('moment-timezone');
    const jimp = require('jimp');

    moment.tz.setDefault('Asia/Jakarta');
    const jam = moment().format('HH:mm');
    const hari = moment().format('dddd, D MMMM YYYY');

    const image = await jimp.read("./src/media/menu2.jpg");
    if (image.bitmap.width > image.bitmap.height) {
        image.resize(300, jimp.AUTO);
    } else {
        image.resize(jimp.AUTO, 300);
    }
    image.quality(90);
    const thumbnail = await image.getBufferAsync(jimp.MIME_JPEG);

    const menuText = `\`▧✨ 𝗩𝗮𝗻𝘁𝗮𝘅𝘇𝘇 𝗔𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝘁 ✨▧\`
> ʜᴀɪ, ᴀᴋᴜ ᴀᴅᴀʟᴀʜ ᴠᴀɴᴛᴀ𝘅ᴢ ʙᴏᴛ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜᴍᴜ ᴅᴀʟᴀᴍ ᴍᴇɴɢᴜʀᴜs ᴘᴀɴᴇʟ, ᴅᴀɴ ᴛᴏᴏʟs ʟᴀɪɴɴʏᴀ. sᴇɴᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ

\`▨ 𝗜 𝗡 𝗙 𝗢 𝗥 𝗠 𝗔 𝗦 𝗜\`
𝗕𝗼𝘁 𝗻𝗮𝗺𝗲 : ${botname}
𝗠𝗼𝗱𝗲 : ${Fyzz.public ? "Public": "Self"}
𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : @${global.owner}
𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : ${global.versi}
𝗥𝘂𝗻𝘁𝗶𝗺𝗲 𝗕𝗼𝘁 : ${runtime(process.uptime())}
𝗨𝗽𝘁𝗶𝗺𝗲 𝗩𝗽𝘀 : ${runtime(os.uptime())}
𝗦𝗽𝗲𝗲𝗱 : ${runtime(os.uptime())}

*KATA KATA*
*幸福は外からではなく、自分自身の内側から生まれます。*`;
    await Fyzz.sendMessage(m.chat, {
        footer: `© Fyzz`,
        buttons: [
            { buttonId: '.allmenu', buttonText: { displayText: '𝗔𝗟𝗟𝗠𝗘𝗡𝗨' }, type: 1 },
            { buttonId: '.owner', buttonText: { displayText: '𝗢𝗪𝗡𝗘𝗥' }, type: 1 },
            { buttonId: '.tqto', buttonText: { displayText: '𝗧𝗤𝗧𝗢' }, type: 1 }           
        ],
        headerType: 1,
        document: fs.readFileSync("./package.json"),
        fileName: `Vantaxz - Fyzz`,
        mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        fileLength: 9999999999,
        caption: menuText,
        contextInfo: {
            isForwarded: true,
            externalAdReply: {
                title: `Fyzz - ${global.versi}`,
                body: `Powered by ${global.namaOwner}`,
                thumbnail,
                mediaType: 1,
                renderLargerThumbnail: true,
            },
        },
    }, { quoted: fakeStatus });
}
break;
case 'allmenu': {
    await Fyzz.sendMessage(m.chat, { react: { text: "⏳", key: m.key }});
    const fs = require('fs');
    const moment = require('moment-timezone');
    const jimp = require('jimp');

    const videoPath = './src/media/Fyzz.mp4';
    const thumbnailPath = './src/media/menu.jpg';

    if (!fs.existsSync(videoPath)) {
        return m.reply("Gagal menampilkan menu: File video './src/media/Fyzz.mp4' tidak dapat ditemukan di server.");
    }
    if (!fs.existsSync(thumbnailPath)) {
        return m.reply("Gagal menampilkan menu: File thumbnail './src/media/menu.jpg' tidak dapat ditemukan di server.");
    }

    try {
        const videoBuffer = fs.readFileSync(videoPath);
        
        const image = await jimp.read(thumbnailPath);
        if (image.bitmap.width > image.bitmap.height) {
            image.resize(300, jimp.AUTO);
        } else {
            image.resize(jimp.AUTO, 300);
        }
        image.quality(90);
        const thumbnailBuffer = await image.getBufferAsync(jimp.MIME_JPEG);

        moment.tz.setDefault('Asia/Jakarta');
        const jam = moment().format('HH:mm');
        const hari = moment().format('dddd, D MMMM YYYY');
        const audioUrl = 'https://files.catbox.moe/d2e4xa.mp3';
        
        const menuCaption = `\`▧✨ 𝗩𝗮𝗻𝘁𝗮𝘅𝘇𝘇 𝗔𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝘁 ✨▧\`     
> ʜᴀɪ, ᴀᴋᴜ ᴀᴅᴀʟᴀʜ ᴠᴀɴᴛᴀxᴢᴢ ʙᴏᴛ ʏᴀɴɢ sɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜᴍᴜ ᴅᴀʟᴀᴍ ᴍᴇɴɢᴜʀᴜs ᴘᴀɴᴇʟ, ᴅᴀɴ ᴛᴏᴏʟs ʟᴀɪɴɴʏᴀ. sᴇɴᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ        

\`▨ 𝗜 𝗡 𝗙 𝗢 𝗥 𝗠 𝗔 𝗦 𝗜\`
𝗕𝗼𝘁 𝗻𝗮𝗺𝗲 : ${botname}
𝗠𝗼𝗱𝗲 : ${Fyzz.public ? "Public": "Self"}
𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : @${global.owner}
𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : ${global.versi}
𝗥𝘂𝗻𝘁𝗶𝗺𝗲 𝗕𝗼𝘁 : ${runtime(process.uptime())}
𝗨𝗽𝘁𝗶𝗺𝗲 𝗩𝗽𝘀 : ${runtime(os.uptime())}
𝗦𝗽𝗲𝗲𝗱 : ${runtime(os.uptime())}

┏─❖ \`𝗢𝘁𝗵𝗲𝗿 𝗠𝗲𝗻𝘂\`
│ *.ᴀɪ*
│ *.ɢᴘᴛ*
│ *.ᴄᴇᴋɪᴅᴄʜ*
│ *.ᴛᴏᴜʀʟ*
│ *.ᴛᴏᴜʀʟ2*
│ *.ʜᴅ*
│ *.ᴛʀᴀɴsʟᴀᴛᴇ*
│ *.ǫᴄ*
│ *.sᴛɪᴄᴋᴇʀᴡᴍ*
│ *.sᴛɪᴄᴋᴇʀ*
│ *.sʜᴏʀᴛʟɪɴᴋ*
│ *.ᴘʟᴀʏ*
│ *.ᴘɪɴᴛᴇʀᴇsᴛ*
│ *.ʙʀᴀᴛ*
│ *.ʀᴠᴏ*
┗────────────❖
┏─❖ \`𝗣𝗮𝗻𝗲𝗹 𝗠𝗲𝗻𝘂\`
│ *.1ɢʙ*
│ *.2ɢʙ*
│ *.3ɢʙ*
│ *.4ɢʙ*
│ *.5ɢʙ*
│ *.6ɢʙ*
│ *.7ɢʙ*
│ *.8ɢʙ*
│ *.9ɢʙ*
│ *.10ɢʙ*
│ *.ᴜɴʟɪᴍɪᴛᴇᴅ*
│ *.ᴄᴀᴅᴍɪɴ*
│ *.ᴅᴇʟᴘᴀɴᴇʟ*
│ *.ᴅᴇʟᴀᴅᴍɪɴ*
│ *.ʟɪsᴛᴘᴀɴᴇʟ*
│ *.ʟɪsᴛᴀᴅᴍɪɴ*
┗────────────❖
┏─❖ \`𝗦𝘁𝗼𝗿𝗲 𝗠𝗲𝗻𝘂\`
│ *.ᴀᴅᴅʟɪsᴛ*
│ *.ɢᴇᴛʟɪsᴛ*
│ *.ᴅᴇʟʟɪsᴛ*
│ *.ᴅᴏɴᴇ*
│ *.ᴘʀᴏsᴇs*
│ *.ᴊᴘᴍ*
│ *.ᴊᴘᴍ1*
│ *.ᴊᴘᴍ2*
│ *.ᴊᴘᴍᴛᴇsᴛɪ*
│ *.ᴊᴘᴍsʟɪᴅᴇ*
│ *.ᴊᴘᴍsʟɪᴅᴇʜᴛ*
│ *.ᴘᴜsʜᴋᴏɴᴛᴀᴋ*
│ *.ᴘᴜsʜᴋᴏɴᴛᴀᴋ2*
│ *.ᴘᴀʏᴍᴇɴᴛ*
│ *.ᴘʀᴏᴅᴜᴋ*
┗────────────❖
┏─❖ \`𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂\`
│ *.ᴀᴅᴅ*
│ *.ᴋɪᴄᴋ*
│ *.ᴄʟᴏsᴇ*
│ *.ᴏᴘᴇɴ*
│ *.ʜɪᴅᴇᴛᴀɢ*
│ *.ᴋᴜᴅᴇᴛᴀɢᴄ*
│ *.ʟᴇᴀᴠᴇ*
│ *.ʟᴇᴀᴠᴇ2*
│ *.ᴛᴀɢᴀʟʟ*
│ *.ᴘʀᴏᴍᴏᴛᴇ*
│ *.ᴅᴇᴍᴏᴛᴇ*
│ *.ʀᴇsᴇᴛʟɪɴᴋɢᴄ*
│ *.ᴀɴᴛɪʟɪɴᴋ*
│ *.ᴀɴᴛɪʟɪɴᴋ2*
│ *.ᴡᴇʟᴄᴏᴍᴇ*
│ *.ʟɪɴᴋɢᴄ*
┗────────────❖
┏─❖ \`𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂\`
│ *.ᴀᴅᴅᴏᴡɴᴇʀ*
│ *.ʟɪsᴛᴏᴡɴᴇʀ*
│ *.ᴅᴇʟᴏᴡɴᴇʀ*
│ *.ᴀᴅᴅᴀᴋsᴇs*
│ *.ᴛᴏᴛᴀʟᴀᴅᴍɪɴ*
│ *.ʟɪsᴛᴀᴋsᴇs*
│ *.ᴅᴇʟᴀᴋsᴇs*
│ *.ᴀᴜᴛᴏʀᴇᴀᴅ*
│ *.ᴀᴜᴛᴏᴘʀᴏᴍᴏsɪ*
│ *.ᴀᴜᴛᴏʀᴇᴀᴅsᴡ*
│ *.ᴀᴜᴛᴏᴛʏᴘɪɴɢ*
│ *.sᴇʟғ*
│ *.ᴘᴜʙʟɪᴄ*
│ *.sᴇᴛɪᴍɢᴍᴇɴᴜ*
│ *.sᴇᴛᴘᴘʙᴏᴛ*
│ *.ᴄʟᴇᴀʀsᴇssɪᴏɴ*
│ *.ᴄʟᴇᴀʀᴄʜᴀᴛ*
│ *.ɢᴇᴛsᴄ*
│ *.ɢᴇᴛᴄᴀsᴇ*
│ *.ᴊᴏɪɴɢᴄ*
│ *.ᴊᴏɪɴᴄʜ*
│ *.ᴊᴘᴍᴄʜᴛᴇᴋs*
│ *.ᴊᴘᴍᴄʜғᴏᴛᴏ*
┗────────────❖`;

        await Fyzz.sendMessage(m.chat, {
            video: videoBuffer, 
            gifPlayback: true,
            caption: menuCaption,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: `${global.namaOwner}`,
                    newsletterJid: `120363402682879346@newsletter`,
                },
                externalAdReply: {
                    title: global.botname,
                    body: global.namaOwner,
                    thumbnail: thumbnailBuffer,
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    mentionedJid: [m.sender]
                }
            }
        }, { quoted: fakeStatus });

        const audioMessage = {
            audio: { url: audioUrl },
            mimetype: 'audio/mp4',
            ptt: true,
        };
        await Fyzz.sendMessage(m.chat, audioMessage, { quoted: m });

    } catch (error) {
        console.error("Error saat mengirim menu 'allmenu':", error);
        await m.reply(`Terjadi kesalahan teknis saat menampilkan menu. Silakan cek log/konsol untuk detail error: ${error.message}`);
    }
}
break;

//================================================================================

case "shortlink": case "shorturl": {
if (!text) return reply("https://xnxx.com")
if (!isUrl(text)) return reply("https://example.com")
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl*
${res.data.toString()}
`
await Fyzz.sendMessage(m.chat, {text: link}, {quoted: m})
}
break


case "shortlink-dl": {
if (!text) return reply("https://example.com")
if (!isUrl(text)) return reply("https://example.com")
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await Fyzz.sendMessage(m.chat, {text: a.url}, {quoted: m})
}

//================================================================================
case "play":{
if (!text) return reply(`\n*ex:* ${prefix + command} impossible\n`)
let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${text}`)
let ahh = mbut.result
let crot = ahh.download.audio

Fyzz.sendMessage(m.chat, {
laudio: { url: crot },
mimetype: "audio/mpeg", 
ptt: true
}, { quoted: qkontak })
}
break

case "rvo": {
if (!m.quoted) return reply(
`*❌Syntax Error!!*
*Example:* Reply ViewOnce with caption ${prefix + command}`);
try {
let buffer = await m.quoted.download();
let type = m.quoted.mtype;
let sendOptions = { quoted: m };
if (type === "videoMessage") {
await Fyzz.sendMessage(m.chat, { video: buffer, caption: m.quoted.text || "" }, sendOptions);
} else if (type === "imageMessage") {
await Fyzz.sendMessage(m.chat, { image: buffer, caption: m.quoted.text || "" }, sendOptions);
} else if (type === "audioMessage") {
await Fyzz.sendMessage(m.chat, { 
audio: buffer, 
mimetype: "audio/mpeg", 
ptt: m.quoted.ptt || false 
}, sendOptions);
} else {
return reply("❌ Media View Once tidak didukung.");
}} catch (err) {
console.error(err)}}
break;

case 'idch': case 'cekidch': {
if (!text) return reply("linkchnya mana")
if (!text.includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await Fyzz.newsletterMetadata("invite", result)
let teks = `* *ID : ${res.id}*
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
interactiveMessage: {
body: {
text: teks }, 
footer: {
text: "powered by FyzzOffcial | Vantaxz " }, //input watermark footer
  nativeFlowMessage: {
  buttons: [
             {
        "name": "cta_copy",
        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
           },
     ], },},
    }, }, },{ quoted : m });
await Fyzz.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }
);
}
break

//===============================================================================//
case "brat": {
if (!text) return reply("teksnya")
let brat = `https://api.nekorinn.my.id/maker/brat-v2?text=${encodeURIComponent(text)}&isVideo=false`
let response = await axios.get(brat, { responseType: "arraybuffer" })
let videoBuffer = response.data;
try {
await Fyzz.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f2.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await Fyzz.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break


case "listpanel-v2": case "listp-v2": case "listserver-v2": {
if (!isCreator && !isPremium) return reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f2 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f2.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await Fyzz.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break
//================================================================================

case "deladmin": {
if (!isCreator) return reply(mess.owner)
if (!text) {
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return Fyzz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return reply("Akun admin panel tidak ditemukan!")
await reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

///================================================================================

case "delpanel": {
if (!isCreator && !isPremium) return reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f2.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return Fyzz.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return reply("Server panel tidak ditemukan!")
reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break









//================================================================================

//================================================================================

case "pin": case "pinterest": {
if (!text) return reply("anime dark")
await Fyzz.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: Fyzz.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `🔎 Result From Pinterest`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Fyzz.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await Fyzz.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ai": case "gpt": case "openai": {
if (!text) return reply("apa itu nodejs")
await fetchJson("https://diibot-api.vercel.app/api/ai/gpt-prompt?query="+text).then(async (res) => {
await reply(res.result.toString())
}).catch(e => reply(e.toString()))
}
break

//================================================================================

case "qc": {
if (!text) return reply("teksnya")
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await Fyzz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#000000",
"width": 812,
"height": 968,
"scale": 2,
"messages": [
 {
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": m.pushName,
"photo": {
 "url": ppuser
}
},
"text": text,
"replyMessage": {}
 }
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
 const buffer = Buffer.from(res.data.result.image, 'base64')
 let tempnya = "./database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return reply("Error")
await Fyzz.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

//================================================================================

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return reply("dengan kirim media")
if (/video/gi.test(mime) && qmsg.seconds > 15) return reply("Durasi vidio maksimal 15 detik!")
var image = await Fyzz.downloadAndSaveMediaMessage(qmsg)
await Fyzz.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//================================================================================

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return reply("namamu dengan kirim media")
if (!/image|video/gi.test(mime)) return reply("namamu dengan kirim media")
if (/video/gi.test(mime) && qmsg.seconds > 15) return reply("Durasi vidio maksimal 15 detik!")
var image = await Fyzz.downloadAndSaveMediaMessage(qmsg)
await Fyzz.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//================================================================================

case "tourl": {
if (!/image/.test(mime)) return reply("dengan kirim/reply foto")
let media = await Fyzz.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'scriptfree.png');

await Fyzz.sendMessage(m.chat, {text: `${directLink}`}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tourl2": {
if (!/image/.test(mime)) return reply("dengan kirim/reply foto")
let foto = await Fyzz.downloadAndSaveMediaMessage(qmsg)
let result = await TelegraPh(await fs.readFileSync(foto))
await Fyzz.sendMessage(m.chat, {text: `${result}`}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//================================================================================

//================================================================================

//================================================================================

//================================================================================

//================================================================================

//================================================================================

//================================================================================
//------[ 𝗗𝗜 𝗔𝗧𝗔𝗦 𝗔𝗟𝗟 𝗙𝗜𝗧𝗨𝗥 𝗡𝗘𝗪 𝗨𝗣𝗗𝗔𝗧𝗘 ]


//================================================================================
case "tohd": case "hd": {
if (!/image/.test(mime)) return reply("dengan kirim/reply foto")
let foto = await Fyzz.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await Fyzz.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//================================================================================

case "add": {
if (!m.isGroup) return reply(mess.group)
if (!isCreator && !m.isAdmin) return reply(mess.admin)
if (!m.isBotAdmin) return reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Fyzz.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return reply("Nomor Tidak Terdaftar Di WhatsApp")
const res = await Fyzz.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return reply(JSON.stringify(res, null, 2))
}} else {
return reply("62838###")
}
}
break

//================================================================================

case "kick": case "kik": {
if (!m.isGroup) return reply(mess.group)
if (!isCreator && !m.isAdmin) return reply(mess.admin)
if (!m.isBotAdmin) return reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Fyzz.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return reply("Nomor Tidak Terdaftar Di WhatsApp")
const res = await Fyzz.groupParticipantsUpdate(m.chat, [input], 'remove')
await reply(`Berhasil Mengeluarkan ${input.split("@")[0]} Dari Grup Ini`)
} else {
return reply("@tag/reply")
}
}
break

//================================================================================

case "leave": {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
await reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await Fyzz.groupLeave(m.chat)
}
break

//================================================================================

case "resetlinkgc": {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!m.isBotAdmin) return reply(mess.botAdmin)
await Fyzz.groupRevokeInvite(m.chat)
reply("Sukses Reset Link Grup ✅")
}
break

//================================================================================

case "tagall": {
if (!m.isGroup) return reply(mess.group)
if (!isCreator && !m.isAdmin) return reply(mess.admin)
if (!text) return reply("pesannya")
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await Fyzz.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "linkgc": {
if (!m.isGroup) return reply(mess.group)
if (!m.isBotAdmin) return reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await Fyzz.groupInviteCode(m.chat)
var teks = `
${urlGrup}

- ${m.metadata.subject}
`
await Fyzz.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//================================================================================

case "ht": case "hidetag": {
if (!m.isGroup) return reply(mess.group)
if (!isCreator && !m.isAdmin) return reply(mess.admin)
if (!text) return reply("pesannya")
let member = m.metadata.participants.map(v => v.id)
await Fyzz.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "joingc": case "join": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply("linkgcnya")
if (!text.includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
await Fyzz.groupAcceptInvite(result)
reply("Sukses Join Grup")
}
break
//================================================================================
case "1gb":
case "2gb":
case "3gb":
case "4gb":
case "5gb":
case "6gb":
case "7gb":
case "8gb":
case "9gb":
case "10gb":
case "unli":
case "unlimited": {
    const missingSettings = [];

if (!global.domain || global.domain === "-") {
    missingSettings.push("`global.domain`");
}
if (!global.apikey || global.apikey === "-") {
    missingSettings.push("`global.apikey` (kunci ptla)");
}
if (!global.capikey || global.capikey === "-") {
    missingSettings.push("`global.capikey` (kunci ptlc)");
}
if (missingSettings.length > 0) {
    let replyText = '⚠️ *Konfigurasi Belum Lengkap!*\n\n';
    replyText += 'Harap isi informasi berikut di file `settings.js` untuk dapat menggunakan fitur ini:\n\n';
    missingSettings.forEach(setting => {
        replyText += `• ${setting}\n`;
    });
    return m.reply(replyText.trim());
}

    if (!isOwner && !isReseller && !isPremium) {
        return m.reply("Perintah ini hanya bisa diakses oleh Owner atau anggota grup Reseller.");
    }
    
    if (!text) return m.reply(`Contoh Penggunaan:\n.unli username\n atau .unli username,nomor target`);

    let nomor, usernem;

    if (isOwner) {
        const tek = text.split(",");
        if (tek.length > 1) {
            const [users, nom] = tek;
            if (!users || !nom) return m.reply(`Format Owner Salah. Contoh:\n.${command} username,628xxxxxx`);
            nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            usernem = users.toLowerCase();
        } else {
            usernem = text.toLowerCase();
            nomor = m.sender;
        }
    } else if (isReseller) {
        if (text.includes(',')) return m.reply("Format Reseller Salah. Cukup ketik `.command username` tanpa nomor.");
        usernem = text.toLowerCase();
        nomor = m.sender;
    }

    const [onWa] = await Fyzz.onWhatsApp(nomor.split("@")[0]);
    if (!onWa?.exists) return m.reply("❌ Nomor target tidak terdaftar di WhatsApp!");

    const paket = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120" },
        "6gb": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200" },
        "10gb": { ram: "10000", disk: "5000", cpu: "220" },
        "unli": { ram: "0", disk: "0", cpu: "0" },
        "unlimited": { ram: "0", disk: "0", cpu: "0" }
    };

    const specs = paket[command];
    if (!specs) return m.reply("❌ Paket tidak ditemukan.");

    const { ram, disk: disknya, cpu } = specs;
    const username = usernem.toLowerCase();
    const email = `${username}@gmail.com`;
    const name = capitalize(username) + " Fyzz";
    const password = username + crypto.randomBytes(3).toString("hex");

    try {
        await m.reply("🛠 Membuat akun panel...");

        const userResponse = await axios.post(`${global.domain}/api/application/users`, {
            email, username, first_name: name, last_name: "Server", language: "en", password
        }, {
            headers: {
                Authorization: `Bearer ${global.apikey}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });

        const user = userResponse.data.attributes;

        const eggResponse = await axios.get(`${global.domain}/api/application/nests/${global.nestid}/eggs/${global.egg}`, {
            headers: {
                Authorization: `Bearer ${global.apikey}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });

        const startup_cmd = eggResponse.data.attributes.startup;

        const serverResponse = await axios.post(`${global.domain}/api/application/servers`, {
            name, description: tanggal(Date.now()), user: user.id, egg: parseInt(global.egg),
            docker_image: "ghcr.io/parkervcp/yolks:nodejs_18", startup: startup_cmd,
            environment: { INST: "npm", USER_UPLOAD: "0", AUTO_UPDATE: "0", CMD_RUN: "npm start" },
            limits: { memory: ram, swap: 0, disk: disknya, io: 500, cpu },
            feature_limits: { databases: 5, backups: 5, allocations: 5 },
            deploy: { locations: [parseInt(global.loc)], dedicated_ip: false, port_range: [] }
        }, {
            headers: {
                Authorization: `Bearer ${global.apikey}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });

        const server = serverResponse.data.attributes;

        if (m.isGroup) {
            if (isOwner && nomor !== m.sender) {
                await m.reply(`✅ Akun panel berhasil dibuat!\nData telah dikirim ke nomor ${nomor.split("@")[0]}`);
            } else {
                await m.reply(`✅ Akun panel berhasil dibuat!\nData telah dikirim ke chat pribadi Anda.`);
            }
        }

        const detailTeks = `
*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
*🗓️ Tanggal:* ${tanggal(Date.now())}

🧠 *Spesifikasi:*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*

🌐 *Login Panel:*
${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian 
`.trim();

        const preparedImage = await prepareWAMessageMedia({
            image: { url: 'https://img1.pixhost.to/images/8037/632576997_fixzzxcpanel.jpg' }
        }, { upload: Fyzz.waUploadToServer });

        preparedImage.imageMessage.contextInfo = {
            ...preparedImage.imageMessage.contextInfo,
            renderLargerThumbnail: true
        };

        const interactiveMessage = {
            body: { text: detailTeks },
            footer: { text: '© Vantaxz Assistant' },
            header: {
                title: "🎉 Akun Anda Siap Digunakan!",
                hasMediaAttachment: true,
                imageMessage: preparedImage.imageMessage
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({ display_text: "COPY USERNAME", copy_code: user.username })
                    },
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({ display_text: "COPY PASSWORD", copy_code: password })
                    }
                ]
            }
        };

        const msg = generateWAMessageFromContent(nomor, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                    interactiveMessage
                }
            }
        }, { userJid: nomor });

        await Fyzz.relayMessage(nomor, msg.message, { messageId: msg.key.id });

    } catch (err) {
        const e = err?.response?.data?.errors?.[0]?.detail || err.message;
        return m.reply(`❌ Error:\n${e}`);
    }
}
break;
case "cadmin": {
    const missingSettings = [];
if (!global.domain || global.domain === "-") {
    missingSettings.push("`global.domain`");
}
if (!global.apikey || global.apikey === "-") {
    missingSettings.push("`global.apikey` (kunci ptla)");
}
if (!global.capikey || global.capikey === "-") {
    missingSettings.push("`global.capikey` (kunci ptlc)");
}

if (missingSettings.length > 0) {
    let replyText = '⚠️ *Konfigurasi Belum Lengkap!*\n\n';
    replyText += 'Harap isi informasi berikut di file `settings.js` untuk dapat menggunakan fitur ini:\n\n';
    missingSettings.forEach(setting => {
        replyText += `• ${setting}\n`;
    });
    return m.reply(replyText.trim());
}

    if (!isOwner && !isPremium) return m.reply(mess.ress);
    if (!text) return m.reply(`Contoh Penggunaan:\n.cadmin username,628...`);
    
    let nomor, usernem;
    let tek = text.split(",");
    if (tek.length > 1) {
        let [users, nom] = text.split(",");
        if (!users || !nom) return m.reply(`Contoh Penggunaan:\n.cadmin username,628...`);
        nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        usernem = users.toLowerCase();
    } else {
        usernem = text.toLowerCase();
        nomor = m.isGroup ? m.sender : m.chat;
    }
    
    const [onWa] = await Fyzz.onWhatsApp(nomor.split("@")[0]);
    if (!onWa?.exists) return m.reply("Nomor target tidak terdaftar di WhatsApp!");

    let username = usernem.toLowerCase();
    let email = username + "@gmail.com";
    let name = capitalize(usernem);
    let password = username + crypto.randomBytes(2).toString('hex');
    
    try {
        await m.reply("Sedang membuat akun admin, mohon tunggu...");
        const userResponse = await axios.post(global.domain + "/api/application/users", {
            "email": email,
            "username": username,
            "first_name": name,
            "last_name": "Admin",
            "root_admin": true,
            "language": "en",
            "password": password
        }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + global.apikey
            }
        });

        const user = userResponse.data.attributes;

        const detailTeks = `
*Berikut Detail Akun Admin Panel Anda 📦*

*📡 ID User:* ${user.id}
*👤 Username:* ${user.username}
*🔐 Password:* ${password}
*🌐 Login Panel:* ${global.domain}
*🗓️ Dibuat Pada:* ${tanggal(Date.now())}

*Syarat & Ketentuan:*
- Akun akan kedaluwarsa dalam 1 bulan.
- Simpan data ini dengan baik.
- Dilarang menghapus server sembarangan!
- Ketahuan mencuri, akun akan dihapus tanpa refund!
`.trim();
        
        const preparedImage = await prepareWAMessageMedia({ image: { url: 'https://img1.pixhost.to/images/8037/632576997_fixzzxcpanel.jpg' } }, { upload: Fyzz.waUploadToServer });

        const interactiveMessage = {
            body: { text: detailTeks },
            footer: { text: '© Vantaxz Assistant' },
            header: {
                title: "✅ Akun Admin Panel Anda Telah Siap!",
                hasMediaAttachment: true,
                imageMessage: preparedImage.imageMessage
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "COPY USERNAME",
                            copy_code: user.username
                        })
                    },
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "COPY PASSWORD",
                            copy_code: password
                        })
                    }
                ]
            }
        };

        const msg = generateWAMessageFromContent(nomor, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: interactiveMessage
                }
            }
        }, { userJid: nomor });

        await Fyzz.relayMessage(nomor, msg.message, { messageId: msg.key.id });

        await m.reply(`✅ Berhasil membuat akun Admin Panel!\nData akun telah dikirim ke nomor ${nomor.split("@")[0]}`);
    } catch (error) {
        const errorMsg = error.response ? JSON.stringify(error.response.data.errors[0], null, 2) : error.message;
        return m.reply(`Terjadi Kesalahan:\n${errorMsg}`);
    }
}
break;

case "delakses":
case "delaksesgc": {
    if (!isCreator) return reply(mess.owner);
    if (!m.isGroup) return reply(mess.group);
    const groupId = m.chat;
    if (!global.resellergroups.includes(groupId)) {
        return reply("Grup ini belum memiliki akses reseller panel!");
    }
    // Hapus groupId dari array Reseller
    const index = Reseller.indexOf(groupId);
    if (index > -1) Reseller.splice(index, 1);
    
    try {
        await fs.writeFileSync("./database/reseller.json", JSON.stringify(Reseller, null, 2));
        reply("Berhasil menghapus akses reseller panel dari grup ini ❌");
    } catch (err) {
        console.error(err);
        reply("Gagal menyimpan perubahan. Silakan coba lagi.");
    }
}
break;

case "addakses":
case "addaksesgc": {
    if (!isCreator) return reply(mess.owner);
    if (!m.isGroup) return reply(mess.group);
    const groupId = m.chat;
    if (global.resellergroups.includes(groupId)) {
        return reply("Grup ini sudah memiliki akses reseller panel!");
    }
    Reseller.push(groupId);
    try {
        await fs.writeFileSync("./database/reseller.json", JSON.stringify(Reseller, null, 2));
        reply("Berhasil menambahkan grup sebagai reseller panel ✅");
    } catch (err) {
        console.error(err);
        reply("Gagal menyimpan data akses. Silakan coba lagi.");
    }
}
break;

case "listakses": {
    if (!isCreator) return reply(mess.owner);
    if (Reseller.length < 1) return reply("Tidak ada grup reseller panel.");
    const datagc = await Fyzz.groupFetchAllParticipating();
    let teks = "";

    for (let id of Reseller) {
        const grup = datagc[id];
        const nama = grup ? grup.subject : "Grup tidak ditemukan";
        teks += `\n* ID: ${id}\n* Nama Grup: ${nama}\n`;
    }
    return reply(teks);
}
break;


case "listadmin": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Fyzz.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

///================================================================================
//================================================================================
case "joinch": case "joinchannel": {
if (!isCreator) return reply(mess.owner)
if (!text && !m.quoted) return reply("linkchnya")
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return reply("Link Tautan Tidak Valid!")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await Fyzz.newsletterMetadata("invite", result)
await Fyzz.newsletterFollow(res.id)
reply(`*Berhasil Join Saluran ✅*
* Nama Channel : *${res.name}*
* Total Pengikut : *${res.subscribers + 1}*`)
}
break
case "welcome": {
 if (!isCreator) return reply(mess.owner);
 if (!m.isGroup) return reply(mess.group);

 if (!q) {
return reply("Silakan masukkan teks `on` atau `off` setelah perintah .welcome untuk mengaktifkan atau menonaktifkan Welcome Message.");
 }
 if (!db.groups[m.chat]) {
db.groups[m.chat] = {};
 }
 if (db.groups[m.chat].welcome === undefined) {
db.groups[m.chat].welcome = false;
 }

 if (q.toLowerCase() == "on") {
if (db.groups[m.chat].welcome === true) {
return reply("Welcome Message sudah aktif di grup ini!");
}
db.groups[m.chat].welcome = true;
await reply("Berhasil mengaktifkan Welcome Message di grup ini.");
 } else if (q.toLowerCase() == "off") {
if (db.groups[m.chat].welcome === false) {
return reply("Welcome Message sudah nonaktif di grup ini!");
}
db.groups[m.chat].welcome = false;
await reply("Berhasil menonaktifkan Welcome Message di grup ini.");
 } else {
return reply("Input tidak valid. Silakan ketik `.welcome on` untuk mengaktifkan atau `.welcome off` untuk menonaktifkan Welcome Message.");
 }
}
break
//================================================================================
case "antilink": {
 if (!isCreator) return reply(mess.owner);
 if (!m.isGroup) return reply(mess.group);

 if (!q) {
return reply("Silakan masukkan teks `on` atau `off` setelah perintah .antilink untuk mengaktifkan atau menonaktifkan antilink.");
 }
 if (!global.db.groups[m.chat]) {
global.db.groups[m.chat] = {};
 }

 if (q.toLowerCase() == "on") {
if (global.db.groups[m.chat].antilink === true) {
return reply("Antilink Group sudah aktif di grup ini!");
}
if (global.db.groups[m.chat].antilink2 === true) {
global.db.groups[m.chat].antilink2 = false;
}
global.db.groups[m.chat].antilink = true;
await reply("Berhasil menyalakan Antilink Group di grup ini.");
 } else if (q.toLowerCase() == "off") {
if (global.db.groups[m.chat].antilink === false) {
return reply("Antilink Group tidak aktif di grup ini!");
}
global.db.groups[m.chat].antilink = false;
await reply("Berhasil mematikan Antilink Group di grup ini.");
 } else {
return reply("Perintah tidak valid. Silakan masukkan `on` atau `off` setelah perintah .antilink.");
 }
}
break;
//================================================================================
case "mute": {
 if (!isCreator) return reply(mess.owner);
 if (!m.isGroup) return reply(mess.group);

 if (!q) {
return reply("Silakan masukkan teks `on` atau `off` setelah perintah .mute untuk mengaktifkan atau menonaktifkan mute.");
 }
 if (!global.db.groups[m.chat]) {
global.db.groups[m.chat] = {};
 }
 if (global.db.groups[m.chat].mute === undefined) {
global.db.groups[m.chat].mute = false;
 }

 if (q.toLowerCase() == "on") {
if (global.db.groups[m.chat].mute === true) {
return reply("Grup Ini Sudah Dalam Keadaan Mute!");
}
global.db.groups[m.chat].mute = true;
await reply("Berhasil Mute Grup Ini");
 } else if (q.toLowerCase() == "off") {
if (global.db.groups[m.chat].mute === false) {
return reply("Grup Ini Tidak Dalam Keadaan Mute!");
}
global.db.groups[m.chat].mute = false;
await reply("Berhasil Unmute Grup Ini");
 } else {
return reply("Perintah tidak valid. Silakan masukkan `on` atau `off` setelah perintah .mute.");
 }
}
break;

//================================================================================
case "antilink2": {
 if (!isCreator) return reply(mess.owner);
 if (!m.isGroup) return reply(mess.group);

 if (!q) {
return reply("Silakan masukkan teks `on` atau `off` setelah perintah .antilink2 untuk mengaktifkan atau menonaktifkan antilink2.");
 }
 if (!global.db.groups[m.chat]) {
global.db.groups[m.chat] = {};
 }
 if (global.db.groups[m.chat].antilink2 === undefined) {
global.db.groups[m.chat].antilink2 = false;
 }

 if (q.toLowerCase() == "on") {
if (global.db.groups[m.chat].antilink2 === true) {
return reply("Antilink2 Group Sudah Aktif Di Grup Ini!");
}
if (global.db.groups[m.chat].antilink === true) {
global.db.groups[m.chat].antilink = false;
}

global.db.groups[m.chat].antilink2 = true;
await reply("Berhasil Menyalakan Antilink2 Group Di Grup Ini");

 } else if (q.toLowerCase() == "off") {
if (global.db.groups[m.chat].antilink2 === false) {
return reply("Antilink2 Group Tidak Aktif Di Grup Ini!");
}

global.db.groups[m.chat].antilink2 = false;
await reply("Berhasil Mematikan Antilink2 Group Di Grup Ini");

 } else {
return reply("Perintah tidak valid. Silakan masukkan `on` atau `off` setelah perintah .antilink2.");
 }
}
break;
//================================================================================

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return reply(mess.group)
if (!m.isBotAdmin) return reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return reply("Status Grup Sudah Terbuka!")
await Fyzz.groupSettingUpdate(m.chat, 'not_announcement')
return reply(`Berhasil Membuka Grup`)
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return reply("Status Grup Sudah Tertutup!")
await Fyzz.groupSettingUpdate(m.chat, 'announcement')
return reply(`Berhasil Menutup Grup`)
} else {}
}
break;

//================================================================================
case "kudetagc": case "kudeta": {
 if (!isCreator) return reply(mess.owner);
 if (!m.isGroup) return reply(mess.group);
 if (!global.db.groups[m.chat]) {
global.db.groups[m.chat] = {};
 }
 let memberFilter = await m.metadata.participants
.map(v => v.id)
.filter(e => e !== botNumber && e !== m.sender);
 if (memberFilter.length < 1) return reply("Grup ini sudah tidak ada member!");
 await reply("Kudeta Grup By Fyzz Starting 🔥");
 for (let i of memberFilter) {
try {
await Fyzz.groupParticipantsUpdate(m.chat, [i], 'remove');
await sleep(2000);
} catch (error) {
console.error(`Failed to remove member ${i}: ${error.message}`);
await reply(`Gagal mengeluarkan member dengan ID ${i}`);
}
 }

 await reply("Kudeta Grup Telah Berhasil 🏴‍☠️");
}
break;
//================================================================================

case "demote":
case "promote": {
if (!m.isGroup) return reply(mess.group)
if (!m.isBotAdmin) return reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await Fyzz.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await Fyzz.sendMessage(m.chat, {text: `Sukses ${action} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return reply("@tag/6285###")
}
}
break
case "produk": {
await slideButton(m.chat)
}
break

//================================================================================

break

//================================================================================

case "pushkontak": {
if (!isOwner) return reply(mess.owner)
if (!text) return reply("idgrup|pesannya")

const parts = text.split("|")
if (parts.length !== 2) return reply("idgrup|pesannya")

const [idgc, pes] = parts
const teks = pes
const jidawal = m.chat

try {
const data = await Fyzz.groupMetadata(idgc)
const halls = await data.participants
.filter(v => 
v.id.endsWith('.net') && 
v.id !== botNumber && 
v.id.split("@")[0] !== global.owner
)
.map(v => v.id)

 await reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

 for (let mem of halls) {
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${namaOwner}\n`
+ 'ORG:Developer;\n'
+ `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
+ 'END:VCARD'

const sentMsg = await Fyzz.sendMessage(mem, { 
contacts: { 
 displayName: namaOwner, 
 contacts: [{ vcard }] 
}
})

await Fyzz.sendMessage(mem, { text: teks }, { quoted: sentMsg })
await sleep(global.delayPushkontak)
 }

 await Fyzz.sendMessage(jidawal, {
text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`
 }, { quoted: m })

} catch (error) {
 console.error("Error in pushkontak:", error)
 await reply("Terjadi kesalahan saat memproses pushkontak")
}
}
break

//================================================================================

case "pushkontak2": {
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!text) return reply("pesannya")
const teks = text
const jidawal = m.chat
const data = await Fyzz.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await reply(`Memproses *pushkontak*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${namaOwner}\n`
+ 'ORG:Developer;\n'
+ `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
+ 'END:VCARD'
const sentMsg= await Fyzz.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await Fyzz.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await Fyzz.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break
//================================================================================

case "jpmslide": {
if (!isCreator) return reply(mess.owner)
let allgrup = await Fyzz.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await reply(`Memproses Pengiriman Pesan Ke ${res.length} Grup Chat`)
for (let i of res) {
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Fyzz.sendMessage(jid, {text: `Pesan Berhasil Dikirim ✅\nTotal Pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return reply(mess.owner)
let allgrup = await Fyzz.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await reply(`Memproses Pengiriman Pesan Ke ${res.length} Grup Chat`)
for (let i of res) {
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Fyzz.sendMessage(jid, {text: `Pesan Berhasil Dikirim ✅\nTotal Pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpm": {
if (!isCreator) return reply(mess.owner)
if (!q) return reply("teksnya")

const bannedGroups = global.bannedGroups;
let allgrup = await Fyzz.groupFetchAllParticipating();
let res = Object.keys(allgrup);
let count = 0;
const jid = m.chat;
const teks = q;
await reply(`Memproses Pengiriman Pesan Ke ${res.length} Grup Chat`);

for (let i of res) {
if (bannedGroups.includes(i)) {
console.log(`Grup ${i} diblokir, melewati...`);
continue;
}
try {
await Fyzz.sendMessage(i, { text: `${teks}` }, { quoted: qtext });
count += 1;
} catch (err) {
console.error(`Gagal mengirim ke grup ${i}:`, err);
}
await sleep(global.delayJpm);
}

await Fyzz.sendMessage(jid, { 
text: `Pesan Berhasil Dikirim ✅\nTotal Pesan : ${count}` 
}, { quoted: qlocJpm });
}
break;


//================================================================================

case "jpm": {
if (!isCreator) return reply(mess.owner)
if (!q) return reply("teksnya")
let allgrup = await Fyzz.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Fyzz.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Fyzz.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpm2": {
if (!isCreator) return reply(mess.owner)
if (!q) return reply("teks dengan mengirim foto")
if (!/image/.test(mime)) return reply("teks dengan mengirim foto")
const allgrup = await Fyzz.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Fyzz.downloadAndSaveMediaMessage(qmsg)
await reply(`Memproses *jpm* teks & foto Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Fyzz.sendMessage(i, {image: fs.readFileSync(rest), caption: teks}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Fyzz.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================
case "jpmtesti": {
if (!isCreator) return reply(mess.owner); // Hanya owner yang bisa
if (!q) return reply("Teks dengan mengirim foto"); // Validasi input teks
if (!/image/.test(mime)) return reply("Teks dengan mengirim foto"); // Validasi mime tipe

const bannedGroups = global.bannedGroups || []; // List grup yang diblokir
const allgrup = await Fyzz.groupFetchAllParticipating(); // Ambil semua grup
const res = Object.keys(allgrup); // ID grup
let count = 0; // Jumlah grup sukses
let failCount = 0; // Jumlah grup gagal
const teks = q; // Simpan teks tetap
const jid = m.chat;
const rest = await Fyzz.downloadAndSaveMediaMessage(qmsg); // Download media

await reply(`Memproses Pengiriman Pesan ke ${res.length} Grup Chat...`);

for (let i of res) {
 const group = allgrup[i];
 console.log(`Memeriksa grup: ${i}`, group);

 // Abaikan grup jika ada di daftar banned
 if (bannedGroups.includes(i)) {
console.log(`Grup ${i} diblokir, melewati.`);
failCount += 1;
continue;
 }

 // Tetap coba kirim walaupun bot bukan admin atau data grup tidak lengkap
 try {
const botParticipant = group.participants?.find(
(p) => p.id === `${global.botNumber}@s.whatsapp.net`
);

if (!group.participants || !botParticipant) {
console.log(`Grup ${i} data tidak lengkap, tetap mencoba kirim.`);
} else if (group.restrict || botParticipant.admin !== "admin") {
console.log(`Bot bukan admin di grup ${i}, tetap mencoba kirim.`);
}

// Kirim pesan ke grup
await Fyzz.sendMessage(
i,
{
 image: await fs.readFileSync(rest),
 caption: teks,
 contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: `${global.ownerUtama}@s.whatsapp.net`,
},
forwardedNewsletterMessageInfo: {
newsletterName: global.namaSaluran,
newsletterJid: global.idSaluran,
},
 },
},
{ quoted: qtoko }
);
count += 1;
console.log(`Pesan berhasil dikirim ke grup ${i}.`);
 } catch (err) {
console.error(`Gagal mengirim ke grup ${i}:`, err);
failCount += 1;
 }

 await sleep(global.delayJpm); // Delay sesuai konfigurasi
}

// Hapus file sementara
try {
 await fs.unlinkSync(rest);
} catch (err) {
 console.error("Gagal menghapus file sementara:", err);
}

// Kirim laporan hasil pengiriman
await Fyzz.sendMessage(
 jid,
 {
text: `Pengiriman selesai ✅\n- Sukses: ${count}\n- Gagal: ${failCount}\nTotal Grup: ${res.length}`,
 },
 { quoted: m }
);
}
//================================================================================

case "pay": case "payment": {
if (!isCreator) return reply(mess.owner)
let imgdana = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/dana.jpg")}, { upload: Fyzz.waUploadToServer })
let imgovo = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/ovo.jpg")}, { upload: Fyzz.waUploadToServer })
let imggopay = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/gopay.jpg")}, { upload: Fyzz.waUploadToServer })
let imgqris = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/qris.jpg")}, { upload: Fyzz.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "Pilih Payment Pembayaran"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgdana
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Dana Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.dana}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgovo
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"OVO Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.ovo}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imggopay
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Gopay Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.gopay}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgqris
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\" QRIS Payment\",\"url\":\"${global.qris}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}
]
})
})}
}}, {userJid: m.sender, quoted: qtoko})
await Fyzz.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break

//================================================================================

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA FyzzOffcial*

* *Nomor :* 085609092154
* *Atas Nama :* EDI SIS****

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Fyzz.sendMessage(m.chat, {text: teks}, {quoted: qtoko})
}
break
case "qris": {
if (!isCreator) return 
await Fyzz.sendMessage(m.chat, {image: {url: "https://img100.pixhost.to/images/155/533947790_Fyzz Silence.jpg"}, caption: "\n*PAYMENT QRIS FyzzOffcial📚*\n\n*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`"}, {quoted: qtoko})
}
break

//================================================================================

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
reply(jsonData)
} 
break

//================================================================================
case "done": {
 if (!isCreator) return reply("Khusus Owner");
 if (!text) return reply("barang,harga,payment\n\n*Contoh :* Panel Unlimited,2,OVO");
 
 const parts = text.split(",");
 if (parts.length < 3) return reply("barang,harga,payment\n\n*Contoh :* Panel Unlimited,2,OVO");
 
 const [barang, harga, payment] = parts;
 if (isNaN(harga)) return reply("Format Harga Tidak Valid");
 
 const total = `${harga}000000`;
 const total2 = Number(`${harga}000`);
 const teks = `TRANSAKSI BERHASIL✅
📦BARANG: ${barang}
💸NOMINAL: Rp${Number(total2)}
🧧PAYMENT: ${payment}
🗓️TANGGAL: ${tanggal(Date.now())}

📞WA REAL:6285835692106(LIM)

TERIMAKASIH SUDAH MEMPERCAYAI KAMI DAN JANGAN LUPA LANGGANAN 🗿`;

 Fyzz.relayMessage(m.chat, {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: Number(total),
requestFrom: m.sender,
noteMessage: {
 extendedTextMessage: {
text: teks,
contextInfo: {
externalAdReply: {
 showAdAttribution: true
}
}
 }
}
}
 }, {});
}
break

//================================================================================

case "proses": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply("`[ Contoh ]` *.proses* Teks")
const teks12 = `
*Transkasi Proses ⏰*
*📦 ${text}*

*_2025 - FyzzOffcial*
`
reply(teks12)
}
break
//================================================================================

case "developerbot": case "owner": {
await Fyzz.sendContact(m.chat, [global.ownerUtama], qtext)
}
break

//================================================================================

case "self": {
if (!isCreator) return
Fyzz.public = false
reply("Berhasil Beralih Ke Mode Self")
}
break

//================================================================================

case "getcase": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply("menu")
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./case.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
reply(`${getcase(q)}`)
} catch (e) {
return reply(`Case *${text}* Tidak Ditemukan`)
}
}
break

//================================================================================

case "ping": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*Informasi Server*
• OS: ${tio}
• IP Address: ${nou.os.ip()}
• Type OS: ${nou.os.type()}

*Ram Server*
• Total: ${formatp(os.totalmem())}
• Digunakan: ${formatp(os.totalmem() - os.freemem())}

*Penyimpanan*
• Total: ${tot.totalGb} GB
• Digunakan: ${tot.usedGb} GB > ${tot.usedPercentage}%
• Tersedia: ${tot.freeGb} GB > ${tot.freePercentage}%

• Respon: ${latensi.toFixed(4)} detik
`
await reply(respon)
}
break

//================================================================================

case "public": {
if (!isCreator) return
Fyzz.public = true
reply("Berhasil Beralih Ke Mode Public")
}
break

//================================================================================

case "scbot": case "sc": {
var teks = `
 *# Script Bot Vantaxz*
 
 *🌐 Donwload Script :* 
 YouTube : @FyzzDev
`
await Fyzz.relayMessage(m.chat,{requestPaymentMessage: {currencyCodeIso4217: 'IRP', amount1000: 99999000, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: teks, contextInfo: {
quotedMessage: m.message
}}}}}, {userJid: m.sender, quoted: m})
}
break


case 'tqto': {
    await Fyzz.sendMessage(m.chat, { react: { text: "🖐", key: m.key } });

    const teks = `
Terima kasih sebesar-besarnya kepada:

💠 *Allah SWT* — Atas segala Rahmat & Karunia-Nya  
💠 *Fyzz*, *Vantaxzz* — creator Vantaxzz
💠 *Terimakasih telah menggunakan sc ini*

💬 Tetap semangat dan jangan lupa berdoa 🙏
    `.trim();

    const preparedImage = await prepareWAMessageMedia({
        image: { url: 'https://img1.pixhost.to/images/8037/632576997_fixzzxcpanel.jpg' } 
    }, { upload: Fyzz.waUploadToServer });

    const interactiveMessage = {
        body: { text: teks },
        footer: { text: 'Vantaxzz Assistant - All Rights Reserved' },
        header: {
            title: "✨  Credits & Thanks ✨",
            hasMediaAttachment: true,
            imageMessage: preparedImage.imageMessage
        },
        nativeFlowMessage: {
            buttons: [{
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({
                    display_text: "COPY UCAPAN",
                    copy_code: teks
                })
            }]
        }
    };

    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage
            }
        }
    }, { quoted: m });

    await Fyzz.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;

//================================================================================

case "restart": case "rst": {
if (!isCreator) return reply(mess.owner)
await reply("Restarting bot . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//================================================================================

case "clearsession": case "clsesi": {
if (!isCreator) return reply(mess.owner)
var file = await fs.readdirSync("./session")
var anu = file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await reply("Sukses Clear Session ✅")
}
break

//================================================================================

case "autopromosi": {
if (!isCreator) return reply(mess.owner)
async function sendStatusGc() {
let teksnya = `
* *Autoread :* ${db.settings.autoread ? "✅" : "❌"}
* *Autoread Sw :* ${db.settings.readsw ? "✅" : "❌"}
* *Auto Typing :* ${db.settings.autotyping ? "✅" : "❌"}
* *Auto Promosi :* ${db.settings.autopromosi ? "✅" : "❌"}

Untuk mengubah status, gunakan perintah:
- .autopromosi on
- .autopromosi off`
await reply(teksnya)
}
if (!q) return sendStatusGc() 
if (q.toLowerCase() == "on") {
if (global.db.settings.autopromosi == true) return reply("Autopromosi Sudah Aktif!")
global.db.settings.autopromosi = true
await reply("Berhasil Menyalakan Autopromosi")
sendStatusGc() 
} else if (q.toLowerCase() == "off") {
if (global.db.settings.autopromosi == false) return reply("Autopromosi Sudah Tidak Aktif!")
global.db.settings.autopromosi = false
await reply("Berhasil Mematikan Autopromosi")
sendStatusGc() 
} else {
return sendStatusGc() 
}}
break

//================================================================================

case "autoread": {
if (!isCreator) return reply(mess.owner)
async function sendStatusGc() {
let teksnya = `
* *Autoread :* ${db.settings.autoread ? "✅" : "❌"}
* *Autoread Sw :* ${db.settings.readsw ? "✅" : "❌"}
* *Auto Typing :* ${db.settings.autotyping ? "✅" : "❌"}
* *Auto Promosi :* ${db.settings.autopromosi ? "✅" : "❌"}

Untuk mengubah status, gunakan perintah:
- .autoread on
- .autoread off`
await reply(teksnya)
}
if (!q) return sendStatusGc() 
if (q.toLowerCase() == "on") {
if (global.db.settings.autoread == true) return reply("Autoread Message Sudah Aktif!")
global.db.settings.autoread = true
await reply("Berhasil Menyalakan Autoread Message")
sendStatusGc() 
} else if (q.toLowerCase() == "off") {
if (global.db.settings.autoread == false) return reply("Autoread Message Sudah Tidak Aktif!")
global.db.settings.autoread = false
await reply("Berhasil Mematikan Autoread Message")
sendStatusGc() 
} else {
return sendStatusGc() 
}}
break

//================================================================================

case "autotyping": {
if (!isCreator) return reply(mess.owner)
async function sendStatusGc() {
let teksnya = `
* *Autoread :* ${db.settings.autoread ? "✅" : "❌"}
* *Autoread Sw :* ${db.settings.readsw ? "✅" : "❌"}
* *Auto Typing :* ${db.settings.autotyping ? "✅" : "❌"}
* *Auto Promosi :* ${db.settings.autopromosi ? "✅" : "❌"}

Untuk mengubah status, gunakan perintah:
- .autotyping on
- .autotyping off`
await reply(teksnya)
}
if (!q) return sendStatusGc() 
if (q.toLowerCase() == "on") {
if (global.db.settings.autotyping == true) return reply("Auto Typing Sudah Aktif!")
global.db.settings.autotyping = true
await reply("Berhasil Menyalakan Auto Typing")
sendStatusGc() 
} else if (q.toLowerCase() == "off") {
if (global.db.settings.autotyping == false) return reply("Auto Typing Sudah Tidak Aktif!")
global.db.settings.autotyping = false
await reply("Berhasil Mematikan Auto Typing")
sendStatusGc() 
} else {
return sendStatusGc() 
}}
break

//================================================================================

case "autoreadsw": {
if (!isCreator) return reply(mess.owner)
async function sendStatusGc() {
let teksnya = `
* *Autoread :* ${db.settings.autoread ? "✅" : "❌"}
* *Autoread Sw :* ${db.settings.readsw ? "✅" : "❌"}
* *Auto Typing :* ${db.settings.autotyping ? "✅" : "❌"}
* *Auto Promosi :* ${db.settings.autopromosi ? "✅" : "❌"}

Untuk mengubah status, gunakan perintah:
- .autoreadsw on
- .autoreadsw off`
await reply(teksnya)
}
if (!q) return sendStatusGc()
if (q.toLowerCase() == "on") {
if (global.db.settings.readsw == true) return reply("Autoread Story Sudah Aktif!")
global.db.settings.readsw = true
await reply("Berhasil Menyalakan Autoread Story")
await sendStatusGc()
} else if (q.toLowerCase() == "off") {
if (global.db.settings.readsw == false) return reply("Autoread Story Sudah Tidak Aktif!")
global.db.settings.readsw = false
await reply("Berhasil Mematikan Autoread Story")
await sendStatusGc()
} else {
return sendStatusGc()
}}
break

//================================================================================

case "jpmchteks": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply("teksnya")
await Fyzz.sendMessage(idSaluran, {text: text})
reply("Berhasil Mengirim Pesan Teks Ke Channel Whatsapp")
}
break

//================================================================================

case "jpmchfoto": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply("teksnya dengan mengirim foto")
if (!/image/.test(mime)) return reply("teksnya dengan mengirim foto")
let img = await Fyzz.downloadAndSaveMediaMessage(qmsg)
await Fyzz.sendMessage(idSaluran, {image: await fs.readFileSync(img), caption: text})
reply("Berhasil Mengirim Pesan Teks & Foto Ke Channel Whatsapp")
await fs.unlinkSync(img)
}
break

//================================================================================

/*case "getsc": {
if (!isCreator) return reply(mess.owner)
let dir = await fs.readdirSync("./database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./database/sampah/${i}`)
}}
await reply("Memproses Backup Script Bot")
var name = `Vantaxz`
const ls = (await execSync("ls")
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Fyzz.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return reply("Script Berhasil Dikirim Ke Private Chat")
}
break*/

//================================================================================

case "setppbot": {
if (!isCreator) return reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await Fyzz.downloadAndSaveMediaMessage(qmsg)
if (args[0] && args[0] == "panjang") {
const { img } = await generateProfilePicture(medis)
await Fyzz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
reply("*Berhasil Mengganti Profil Panjang ✅*")
} else {
await Fyzz.updateProfilePicture(botNumber, {content: medis})
await fs.unlinkSync(medis)
reply("*Berhasil Mengganti Profil ✅*")
}
} else return reply("dengan mengirim foto")
}
break

//================================================================================

case "setimgmenu": {
if (!isCreator) return reply(mess.owner)
if (!/image/.test(mime)) return reply("Kirim Foto Dengan Caption *.setimgmenu*")
await Fyzz.downloadAndSaveMediaMessage(qmsg, "./src/media/menu.jpg", false)
await reply("Berhasil Mengganti Thumbnail Menu ✅")
}
break

//================================================================================

case "clearchat": case "clc": {
if (!isCreator) return reply(mess.owner)
Fyzz.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//================================================================================

case "listowner": case "listown": {
if (owners.length < 1) return reply("Tidak ada owner tambahan")
let teks = `\n`
for (let i of owners) {
teks += `* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Fyzz.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//================================================================================

case "delowner": case "delown": {
if (!isCreator) return reply(mess.owner)
if (!m.quoted && !text) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (global.owner.includes(input2) || input2 === global.ownerUtama || input == botNumber) return reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
reply(`Sukses menghapus ${input2} sebagai owner bot ✅`)
}
break

//================================================================================

case "addowner": case "addown": {
if (!isCreator) return reply(mess.owner)
if (!m.quoted && !text) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (global.owner.includes(input2) || input2 === global.ownerUtama || owners.includes(input) || input === botNumber) return reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
reply(`Sukses menjadikan ${input2} sebagai owner bot ✅`)
}
break
case "settingmenu": {
const teks = `
*🚦Setting Group WhatsApp*
* *Antilink :* ${db.groups[m.chat].antilink ? "✅" : "❌"}
* *Antilink V2 :* ${db.groups[m.chat].antilink2 ? "✅" : "❌"}
* *Welcome :* ${db.groups[m.chat].welcome ? "✅" : "❌"}
* *Mute :* ${db.groups[m.chat].mute ? "✅" : "❌"}

*🚦Setting Bot WhatsApp*
* *Autoread :* ${db.settings.autoread ? "✅" : "❌"}
* *Autoread Sw :* ${db.settings.readsw ? "✅" : "❌"}
* *Auto Typing :* ${db.settings.autotyping ? "✅" : "❌"}
* *Auto Promosi :* ${db.settings.autopromosi ? "✅" : "❌"}
`
reply(teks);
}
break
case "listgc": case "listgrup": {
let teks = `\n *#- List all group chat*\n`
let a = await Fyzz.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return reply(teks)
}
break
//================================================================================

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}}

//================================================================================

if (m.text.toLowerCase() == "bot") {
reply("Bot Online ✅")
}

//================================================================================

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}}

//================================================================================

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}

//================================================================================

}} catch (err) {
console.log(util.format(err));
Fyzz.sendMessage("6282346841421@s.whatsapp.net", {text: '*Fitur Error Terdeteksi*\n\n*Log error :*\n' + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})
}}

//================================================================================

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});