/*

© Credits By Fyzzz
#- YouTube : @FixzzDev

*/

require('./settings');
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const FileType = require('file-type');
const { exec } = require('child_process');
const { say } = require('cfonts')
const { Boom } = require('@hapi/boom');
const NodeCache = require('node-cache');
const PhoneNumber = require('awesome-phonenumber');
let groupBot = "https://whatsapp.com/channel/0029Vb1KZGfD38COcA6MQ3u"
const { default: WAConnection, generateWAMessageFromContent, 
prepareWAMessageMedia, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestWaWebVersion, proto, PHONENUMBER_MCC, getAggregateVotesInPollMessage } = require('@whiskeysockets/baileys');

const pairingCode = global.pairing_code || process.argv.includes('--pairing-code');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

const yangBacaHomo = [`
⠄⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄
⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄
⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄
⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄
⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰
⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤
⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗
⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄
⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄
⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄
⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄
⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄
⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴
⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿⣿
`, `
⣿⣿⣷⡁⢆⠈⠕⢕⢂⢕⢂⢕⢂⢔⢂⢕⢄⠂⣂⠂⠆⢂⢕⢂⢕⢂⢕⢂⢕⢂
⣿⣿⣿⡷⠊⡢⡹⣦⡑⢂⢕⢂⢕⢂⢕⢂⠕⠔⠌⠝⠛⠶⠶⢶⣦⣄⢂⢕⢂⢕
⣿⣿⠏⣠⣾⣦⡐⢌⢿⣷⣦⣅⡑⠕⠡⠐⢿⠿⣛⠟⠛⠛⠛⠛⠡⢷⡈⢂⢕⢂
⠟⣡⣾⣿⣿⣿⣿⣦⣑⠝⢿⣿⣿⣿⣿⣿⡵⢁⣤⣶⣶⣿⢿⢿⢿⡟⢻⣤⢑⢂
⣾⣿⣿⡿⢟⣛⣻⣿⣿⣿⣦⣬⣙⣻⣿⣿⣷⣿⣿⢟⢝⢕⢕⢕⢕⢽⣿⣿⣷⣔
⣿⣿⠵⠚⠉⢀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢕⢕⢕⢕⢕⢕⣽⣿⣿⣿⣿
⢷⣂⣠⣴⣾⡿⡿⡻⡻⣿⣿⣴⣿⣿⣿⣿⣿⣿⣷⣵⣵⣵⣷⣿⣿⣿⣿⣿⣿⡿
⢌⠻⣿⡿⡫⡪⡪⡪⡪⣺⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
⠣⡁⠹⡪⡪⡪⡪⣪⣾⣿⣿⣿⣿⠋⠐⢉⢍⢄⢌⠻⣿⣿⣿⣿⣿⣿⣿⣿⠏⠈
⡣⡘⢄⠙⣾⣾⣾⣿⣿⣿⣿⣿⣿⡀⢐⢕⢕⢕⢕⢕⡘⣿⣿⣿⣿⣿⣿⠏⠠⠈
⠌⢊⢂⢣⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢐⢕⢕⢕⢕⢕⢅⣿⣿⣿⣿⡿⢋⢜⠠⠈
⠄⠁⠕⢝⡢⠈⠻⣿⣿⣿⣿⣿⣿⣿⣷⣕⣑⣑⣑⣵⣿⣿⣿⡿⢋⢔⢕⣿⠠⠈
⠨⡂⡀⢑⢕⡅⠂⠄⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⢔⢕⢕⣿⣿⠠⠈
⠄⠪⣂⠁⢕⠆⠄⠂⠄⠁⡀⠂⡀⠄⢈⠉⢍⢛⢛⢛⢋⢔⢕⢕⢕⣽⣿⣿⠠⠈
`, `
⣿⡇⠘⡇⢀⣶⣶⠄⠈⣾⡟⢂⣿⣿⣿⣿⣿⣿⡿⢉⢾⢃⣿⣿⡟⣸⢸⣿⣿⣸
⣿⢸⣦⢧⢸⣿⣿⢱⠄⠄⣇⣼⣿⣿⣿⣿⣿⢟⣼⣿⡯⠸⣿⢳⢱⡏⣼⣿⢇⣿
⡏⣾⢽⣼⢸⣿⣿⡘⣆⢀⠛⣿⣿⣿⣿⡿⣫⣾⣿⣿⢇⣿⠂⢌⡾⡇⣿⡿⢸⣿
⢧⣿⠄⢹⢸⣿⣿⣷⣭⢸⡄⣿⣿⣿⢋⣵⣿⣿⡿⠟⡨⡡⠄⣾⣿⡆⣭⡇⣿⣿
⣼⡏⡀⠄⢀⢿⣿⣿⡟⣾⡇⣿⡿⣡⢁⣿⣿⣫⡶⢃⡵⣡⣿⣮⡻⡇⣿⢸⣮⢿
⣿⡇⣧⢠⠸⡎⡍⡭⢾⡏⣧⢋⢾⠏⣼⣿⣿⠿⣵⣾⣕⠿⣿⣿⣷⢡⠏⣾⣿⣿
⣿⠁⣿⠈⠄⠄⢃⢹⡀⠸⢸⢿⠸⢰⢻⢿⣟⢁⣀⠄⠄⠉⠒⢝⢿⠸⣴⣿⣿⣿
⡍⠇⣿⣷⢰⢰⢸⠄⡃⡆⠈⠈⡀⡌⠠⠸⠃⣿⣏⡳⢷⢄⡀⠄⠄⠰⣿⣿⣿⣿
⡇⠄⠸⣿⢸⣿⣶⡄⣇⠃⡇⡄⡇⠁⠃⠄⠈⢊⠻⠿⣿⣿⣿⣦⠄⠘⣿⣿⣿⣿
⡇⠄⠄⢻⣸⣿⣿⠏⡙⢸⣇⣡⢰⢀⠄⠄⠄⠈⡁⢱⢈⢿⣿⡿⡄⣰⣶⣿⣿⣿
⡇⠄⠄⠄⢻⣿⡿⢰⡇⠆⠲⠶⣝⠾⠸⢴⢠⠄⠇⢸⢸⠄⡶⡜⣽⣿⣿⣿⣿⢏
⠁⠄⠄⠄⠄⢿⡇⠧⢣⣸⣦⣄⣀⠁⠓⢸⣄⠸⢀⠄⡀⡀⡪⣽⣿⣿⢿⣿⢟⣬
⠄⠄⠄⠄⠄⠈⢧⠯⢸⣿⣿⣿⡿⠰⣷⠄⣿⣇⡿⠄⡀⠦⣰⣿⡿⣱⣿⡏⢾⣫
⠄⠄⠄⠄⠄⠄⠈⣌⢌⢿⣿⣿⠇⠼⢃⢠⢇⣻⣧⣿⡡⣸⣿⠿⢁⡟⢁⣳⣿⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠳⢝⣒⣒⠰⣘⣴⡧⠿⣿⣛⡯⣱⡿⣫⢎⣪⣎⣿⣧⢻⠿
`, `
⣿⣯⣿⣟⣟⡼⣿⡼⡿⣷⣿⣿⣿⠽⡟⢋⣿⣿⠘⣼⣷⡟⠻⡿⣷⡼⣝⡿⡾⣿
⣿⣿⣿⣿⢁⣵⡇⡟⠀⣿⣿⣿⠇⠀⡇⣴⣿⣿⣧⣿⣿⡇⠀⢣⣿⣷⣀⡏⢻⣿
⣿⣿⠿⣿⣿⣿⠷⠁⠀⠛⠛⠋⠀⠂⠹⠿⠿⠿⠿⠿⠉⠁⠀⠘⠛⠛⠛⠃⢸⣯
⣿⡇⠀⣄⣀⣀⣈⣁⠈⠉⠃⠀⠀⠀⠀⠀⠀⠀⠀⠠⠎⠈⠀⣀⣁⣀⣀⡠⠈⠉
⣿⣯⣽⡿⢟⡿⠿⠛⠛⠿⣶⣄⠀⠀⠀⠀⠀⠀⠈⢠⣴⣾⠛⠛⠿⠻⠛⠿⣷⣶
⣿⣿⣿⠀⠀⠀⣿⡿⣶⣿⣫⠉⠀⠀⠀⠀⠀⠀⠀⠈⠰⣿⠿⠾⣿⡇⠀⠀⢺⣿
⣿⣿⠻⡀⠀⠀⠙⠏⠒⡻⠃⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠐⡓⢚⠟⠁⠀⠀⡾⢫
⣿⣿⠀⠀⡀⠀⠀⡈⣉⡀⡠⣐⣅⣽⣺⣿⣯⡡⣴⣴⣔⣠⣀⣀⡀⢀⡀⡀⠀⣸
⣿⣿⣷⣿⣟⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⢾⣷⣿
⣿⣿⣟⠫⡾⠟⠫⢾⠯⡻⢟⡽⢶⢿⣿⣿⡛⠕⠎⠻⠝⠪⢖⠝⠟⢫⠾⠜⢿⣿
⣿⣿⣿⠉⠀⠀⠀⠀⠈⠀⠀⠀⠀⣰⣋⣀⣈⣢⠀⠀⠀⠀⠀⠀⠀⠀⠀⣐⢸⣿
⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿
⣿⣿⣿⣿⣦⡔⠀⠀⠀⠀⠀⠀⢻⣿⡿⣿⣿⢽⣿⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿
⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠘⠛⢅⣙⣙⠿⠉⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣄⣅⠀⠓⠀⠀⣀⣠⣴⣺⣿⣿⣿⣿⣿⣿⣿⣿
`, `
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣠⣤⣶⣶⣶⣤⣄⣀⣀⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⣀⣤⣤⣶⣿⣿⣿⣿⣿⣿⣿⣟⢿⣿⣿⣿⣶⣤⡀⠄
⠄⠄⠄⠄⠄⠄⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣜⠿⠿⣿⣿⣧⢓
⠄⠄⠄⠄⠄⡠⢛⣿⣿⣿⡟⣿⣿⣽⣋⠻⢻⣿⣿⣿⣿⡻⣧⡠⣭⣭⣿⡧
⠄⠄⠄⠄⠄⢠⣿⡟⣿⢻⠃⣻⣨⣻⠿⡀⣝⡿⣿⣿⣷⣜⣜⢿⣝⡿⡻⢔
⠄⠄⠄⠄⠄⢸⡟⣷⢿⢈⣚⣓⡡⣻⣿⣶⣬⣛⣓⣉⡻⢿⣎⠢⠻⣴⡾⠫
⠄⠄⠄⠄⠄⢸⠃⢹⡼⢸⣿⣿⣿⣦⣹⣿⣿⣿⠿⠿⠿⠷⣎⡼⠆⣿⠵⣫
⠄⠄⠄⠄⠄⠈⠄⠸⡟⡜⣩⡄⠄⣿⣿⣿⣿⣶⢀⢀⣿⣷⣿⣿⡐⡇⡄⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠁⢶⢻⣧⣖⣿⣿⣿⣿⣿⣿⣿⣿⡏⣿⣇⡟⣇⣷⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣆⣤⣽⣿⡿⠿⠿⣿⣿⣦⣴⡇⣿⢨⣾⣿⢹⢸
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⠊⡛⢿⣿⣿⣿⣿⡿⣫⢱⢺⡇⡏⣿⣿⣸⡼
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⡿⠄⣿⣷⣾⡍⣭⣶⣿⣿⡌⣼⣹⢱⠹⣿⣇⣧
⠄⠄⠄⠄⠄⠄⠄⠄⠄⣼⠁⣤⣭⣭⡌⢁⣼⣿⣿⣿⢹⡇⣭⣤⣶⣤⡝⡼
⠄⣀⠤⡀⠄⠄⠄⠄⠄⡏⣈⡻⡿⠃⢀⣾⣿⣿⣿⡿⡼⠁⣿⣿⣿⡿⢷⢸
⢰⣷⡧⡢⠄⠄⠄⠄⠠⢠⡛⠿⠄⠠⠬⠿⣿⠭⠭⢱⣇⣀⣭⡅⠶⣾⣷⣶
⠈⢿⣿⣧⠄⠄⠄⠄⢀⡛⠿⠄⠄⠄⠄⢠⠃⠄⠄⡜⠄⠄⣤⢀⣶⣮⡍⣴
⠄⠈⣿⣿⡀⠄⠄⠄⢩⣝⠃⠄⠄⢀⡄⡎⠄⠄⠄⠇⠄⠄⠅⣴⣶⣶⠄⣶
`, `
⡏⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠹
⡇⢸⣿⡟⠛⢿⣷⠀⢸⣿⡟⠛⢿⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡇⠀⢸⣿⡇⠀
⡇⢸⣿⣧⣤⣾⠿⠀⢸⣿⣇⣀⣸⡿⠃⢸⣿⡇⠀⢸⣿⡇⢸⣿⣇⣀⣸⣿⡇⠀
⡇⢸⣿⡏⠉⢹⣿⡆⢸⣿⡟⠛⢻⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡏⠉⢹⣿⡇⠀
⡇⢸⣿⣧⣤⣼⡿⠃⢸⣿⡇⠀⢸⣿⡇⠸⣿⣧⣤⣼⡿⠁⢸⣿⡇⠀⢸⣿⡇⠀
⣇⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣠⣀⡈⠉⣁⣀⣄⣀⣀⣀⣠⣀⣀⣀⣰
⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
`, `
⠄⣾⣿⡇⢸⣿⣿⣿⠄⠈⣿⣿⣿⣿⠈⣿⡇⢹⣿⣿⣿⡇⡇⢸⣿⣿⡇⣿⣿⣿
⢠⣿⣿⡇⢸⣿⣿⣿⡇⠄⢹⣿⣿⣿⡀⣿⣧⢸⣿⣿⣿⠁⡇⢸⣿⣿⠁⣿⣿⣿
⢸⣿⣿⡇⠸⣿⣿⣿⣿⡄⠈⢿⣿⣿⡇⢸⣿⡀⣿⣿⡿⠸⡇⣸⣿⣿⠄⣿⣿⣿
⢸⣿⡿⠷⠄⠿⠿⠿⠟⠓⠰⠘⠿⣿⣿⡈⣿⡇⢹⡟⠰⠦⠁⠈⠉⠋⠄⠻⢿⣿
⢨⡑⠶⡏⠛⠐⠋⠓⠲⠶⣭⣤⣴⣦⣭⣥⣮⣾⣬⣴⡮⠝⠒⠂⠂⠘⠉⠿⠖⣬
⠈⠉⠄⡀⠄⣀⣀⣀⣀⠈⢛⣿⣿⣿⣿⣿⣿⣿⣿⣟⠁⣀⣤⣤⣠⡀⠄⡀⠈⠁
⠄⠠⣾⡀⣾⣿⣧⣼⣿⡿⢠⣿⣿⣿⣿⣿⣿⣿⣿⣧⣼⣿⣧⣼⣿⣿⢀⣿⡇⠄
⡀⠄⠻⣷⡘⢿⣿⣿⡿⢣⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣜⢿⣿⣿⡿⢃⣾⠟⢁⠈
⢃⢻⣶⣬⣿⣶⣬⣥⣶⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣷⣶⣶⣾⣿⣷⣾⣾⢣
⡄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠘
⣿⡐⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢠⢃
⣿⣷⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⠆⣼
⣿⣿⣷⡀⠄⠈⠛⢿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⠿⠋⠠⠂⢀⣾⣿
⣿⣿⣿⣧⠄⠄⢵⢠⣈⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢋⡁⢰⠏⠄⠄⣼⣿⣿
⢻⣿⣿⣿⡄⢢⠨⠄⣯⠄⠄⣌⣉⠛⠻⠟⠛⢋⣉⣤⠄⢸⡇⣨⣤⠄⢸⣿⣿⣿
`];
const imageAscii = yangBacaHomo[Math.floor(Math.random() * yangBacaHomo.length)];
const listcolor = ['cyan', 'magenta', 'green', 'yellow', 'blue'];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];

const DataBase = require('./src/database');
const database = new DataBase();
(async () => {
const loadData = await database.read()
if (loadData && Object.keys(loadData).length === 0) {
global.db = {
users: {},
game: {},
groups: {},
database: {},
settings : {}, 
...(loadData || {}),
}
await database.write(global.db)
} else {
global.db = loadData
}

setInterval(async () => {
if (global.db) await database.write(global.db)
}, 5000)
})();

const { MessagesUpsert, Solving } = require('./src/message')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/function');

async function startingBot() {
const { state, saveCreds } = await useMultiFileAuthState('session');
const { version, isLatest } = await fetchLatestWaWebVersion()
const msgRetryCounterCache = new NodeCache()

const Fyzz = WAConnection({
printQRInTerminal: !pairingCode, 
logger: pino({ level: "silent" }),
auth: state,
browser: ["Ubuntu","Chrome","20.0.04"],
generateHighQualityLinkPreview: true, 
getMessage: async (key) => {
 if (store) {
 const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
 return msg?.message || undefined
 }
 return {
conversation: 'WhatsApp Bot FyzzOffcial'
 }}
})

if (pairingCode && !

Fyzz.authState.creds.registered) {
say("Fyzz - Vantaxzz", {
font: 'tiny',
align: 'left',
gradient: [randomcolor, randomcolor]
});
say("### Bot By FyzzOffcial ###\n • Youtube : @FixzzDev", {
font: 'console',
align: 'left',
gradient: [randomcolor, randomcolor]
});
let phoneNumber;
async function getPhoneNumber() {
phoneNumber = await question(chalk.black(chalk.cyan.bold(`${imageAscii}\n\n[!] Masukan Nomor WhatsApp\n`)))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v)) && !phoneNumber.length < 6) {
console.log(chalk.cyan.bold(chalk.greenBright('Kode Negara Nomor Telepon Tidak Valid!') + chalk.whiteBright('\n') + chalk.greenBright('Contoh : 628xxx')));
await getPhoneNumber()
}
}

setTimeout(async () => {
await getPhoneNumber()
await exec('rm -rf ./session/*')
let code = await 

Fyzz.requestPairingCode(phoneNumber);
code = code.match(/.{1,4}/g).join(" - ") || code
console.log(chalk.cyan.bold(`Kode Pairing Kamu :`), chalk.white.bold(code))
}, 3000)
}

await store.bind(Fyzz.ev)

await Solving(Fyzz, store)



Fyzz.ev.on('creds.update', saveCreds)

Fyzz.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect, receivedPendingNotifications } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.connectionLost) {
console.log('Connection to Server Lost, Attempting to Reconnect...');
startingBot()
} else if (reason === DisconnectReason.connectionClosed) {
console.log('Connection closed, Attempting to Reconnect...');
startingBot()
} else if (reason === DisconnectReason.restartRequired) {
console.log('Restart Required...');
startingBot()
} else if (reason === DisconnectReason.timedOut) {
console.log('Connection Timed Out, Attempting to Reconnect...');
startingBot()
} else if (reason === DisconnectReason.badSession) {
console.log('Delete Session and Scan again...');
startingBot()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log('Close current Session first...');
startingBot()
} else if (reason === DisconnectReason.loggedOut) {
console.log('Scan again and Run...');
exec('rm -rf ./session/*')
process.exit(1)
} else if (reason === DisconnectReason.Multidevicemismatch) {
console.log('Scan again...');
exec('rm -rf ./session/*')
process.exit(0)
} else {


Fyzz.end(`Unknown DisconnectReason : ${reason}|${connection}`)
}
}
if (connection == 'open') {
Fyzz.sendMessage(Fyzz.user.id.split(":")[0] + "@s.whatsapp.net", {text: "Vantaxzz Connect"})
console.log()
console.log(chalk.cyan.bold("Berhasil Tersambung ✓"))
} else if (receivedPendingNotifications == 'true') {
console.log('Please wait About 1 Minute...')
}
});

Fyzz.ev.on('messages.upsert', async (message) => {
await MessagesUpsert(Fyzz, message, store);
});

Fyzz.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = 

Fyzz.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
});



Fyzz.ev.on('call', async (call) => {
console.log(call)
});



Fyzz.ev.on('group-participants.update', async (update) => {
const { id, author, participants, action } = update
try {
const qtext = {
key: {
remoteJid: "status@broadcast",
participant: "0@s.whatsapp.net"
},
message: {
"extendedTextMessage": {
"text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]"
}
}
}
if (global.db.groups[id] && global.db.groups[id].welcome == true) {
const metadata = await Fyzz.groupMetadata(id)
let teks
for(let n of participants) {
let profile;
try {
profile = await Fyzz.profilePictureUrl(n, 'image');
} catch {
profile = 'https://telegra.ph/file/95670d63378f7f4210f03.png';
}
let imguser = await prepareWAMessageMedia({
image: {
url: profile
}
}, {
upload: Fyzz.waUploadToServer
})
if(action == 'add') {
teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup` : ``
let asu = await Fyzz.sendMessage(id, {
text: `${teks}`,
mentions: [author, n]
}, {
quoted: qtext
})
await Fyzz.relayMessage(id, {
"productMessage": {
"product": {
"productImage": imguser.imageMessage, 
"productId": "343056591714248",
"title": "Welcome To Group",
"description": `Selamat datang @${Fyzz.getName(n)}`,
"productImageCount": 1
},
"businessOwnerJid": "6285835692106@s.whatsapp.net",
"contextInfo": {
mentionedJid: [n]
}
}
}, {})
} else if(action == 'remove') {
teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup` : ""
let asu = await Fyzz.sendMessage(id, {
text: `${teks}`,
mentions: [author, n]
}, {
quoted: qtext
})
await Fyzz.relayMessage(id, {
"productMessage": {
"product": {
"productImage": imguser.imageMessage, 
"productId": "343056591714248",
"title": "Leaving To Group",
"description": `Selamat tinggal @${Fyzz.getName(n)}`,
"productImageCount": 1
},
"businessOwnerJid": "6285835692106@s.whatsapp.net",
"contextInfo": {
mentionedJid: [n]
}
}
}, {})
} else if(action == 'promote') {
teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let asu = await Fyzz.sendMessage(id, {
text: `${teks}`,
mentions: [author, n]
}, {
quoted: qtext
})
await Fyzz.relayMessage(id, {
"productMessage": {
"product": {
"productImage": imguser.imageMessage, 
"productId": "343056591714248",
"title": "Promote Member",
"description": `Promote member @${Fyzz.getName(n)}`,
"productImageCount": 1
},
"businessOwnerJid": "6285835692106@s.whatsapp.net",
"contextInfo": {
mentionedJid: [n]
}
}
}, {})
} else if(action == 'demote') {
teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let asu = await Fyzz.sendMessage(id, {
text: `${teks}`,
mentions: [author, n]
}, {
quoted: qtext
})
await Fyzz.relayMessage(id, {
"productMessage": {
"product": {
"productImage": imguser.imageMessage, 
"productId": "343056591714248",
"title": "Demote Member",
"description": `Demote member @${Fyzz.getName(n)}`,
"productImageCount": 1
},
"businessOwnerJid": "6285835692106@s.whatsapp.net",
"contextInfo": {
mentionedJid: [n]
}
}
}, {})
}
}
}
} catch (e) {}
});

//================================================================================

Fyzz.ev.on('groups.update', async (update) => {
try {
const data = update[0]
const qtext = {
key: {
remoteJid: "status@broadcast",
participant: "0@s.whatsapp.net"
},
message: {
"extendedTextMessage": {
"text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]"
}
}
}
if (data?.inviteCode) {
let botNumber = Fyzz.user.id.split(":")[0]
let participant = data.author
if (participant.split("@")[0] === botNumber) return
await Fyzz.sendMessage(data.id, {text: `@${participant.split("@")[0]} telah *mereset* link grup`, mentions: [participant]}, {quoted: qtext})
}

if (data?.desc) {
let botNumber = Fyzz.user.id.split(":")[0]
let participant = data.author
if (participant.split("@")[0] === botNumber) return
await Fyzz.sendMessage(data.id, {text: `@${participant.split("@")[0]} telah *memperbarui* deskripsi grup`, mentions: [participant]}, {quoted: qtext})
}


} catch (e) {
}
});

return Fyzz
}

startingBot()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
});