/*

© Credits By Fyzzz
#- YouTube : @FixzzDev

*/

const fs = require('fs');
const chalk = require('chalk');

// Settings Bot 
global.owner = ['6285835692106']
global.ownerUtama = "6285835692106"
global.namaOwner = "FyzzOffcial"
global.versi = "2.5"
global.packname = 'FyzzOffcial'
global.botname = 'Vantaxz'
global.botname2 = 'FyzzOffcial'

global.tempatDB = 'database.json'
global.pairing_code = true

// Settings Link / Tautan
global.linkOwner = "https://wa.me/6285835692106"
global.linkGrup = "https://whatsapp.com/channel/0029Vb1KZGfD38COhc6MQ3u"
global.linkGrup2 = "https://whatsapp.com/channel/0029Vb1KZGfD38COhc6MQ3u"

// Delay Jpm || 1000 = 1detik
global.delayJpm = 1000
global.pushkontak = 6000

// Settings Channel / Saluran
global.linkSaluran = "https://whatsapp.com/channel/0029VbBFQNb17En3MAIHaU3R"
global.idSaluran = "120363402682879346@newsletter"
global.namaSaluran = "<-> Always Fixzz Official <->"


// Settings All Payment
global.dana = "081250431837"
global.ovo = "_"
global.gopay = "-"
global.qris = "https://img1.pixhost.to/images/8038/632584714_fixzzxcpanel.jpg"

// Ban Group Chatt
global.bannedGroups = "120363346043616797@g.us"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "-" //ptla
global.capikey = "-" //ptlc

// Settings Api Subdomain
global.subdomain = {
"skyzopedia.us.kg": {
"zone": "9e4e70b438a65c1d3e6d0e48b82d79de", 
"apitoken": "odilM9DpvLVPodbPyZwW7UcDKg1aIWsivJc0Vt_o"
}, 
"serverpanell.biz.id": {
"zone": "225512a558115605508656b7bdf29b28", 
"apitoken": "XasxSSnGp8M9QixvT6AAlh1vEm4icVgzDyz7KDiF"
}, 
"sincecraf.my.id": {
"zone": "a89500d3dcf7e531f5a6e25081c7c874", 
"apitoken": "aV-ilSaLRwfgIGz0c79ah6fbnpcLilDREvysdUsk"
}, 
"xyz-store.biz.id": {
"zone": "8ae812c35a94b7bd2da993a777b8b16d", 
"apitoken": "oqZafkd3mSt1bABD9MMTidpCtD9VZdiPTjElVKJB"
}
}
global.panel = {
  satu_gb: {
    name: "PANEL RAM 1",
    price: "2000"
  },
  dua_gb: {
    name: "PANEL RAM 2",
    price: "3000"
  },
  tiga_gb: {
    name: "PANEL RAM 3",
    price: "4000"
  },
  empat_gb: {
    name: "PANEL RAM 4",
    price: "5000"
  },
  lima_gb: {
    name: "PANEL RAM 5",
    price: "6000"
  },
  enam_gb: {
    name: "PANEL RAM 6",
    price: "7000"
  },
  tujuh_gb: {
    name: "PANEL RAM 7",
    price: "8000"
  },
  delapan_gb: {
    name: "PANEL RAM 8",
    price: "9000"
  },
  sembilan_gb: {
    name: "PANEL RAM 9",
    price: "10000"
  },
  unli: {
    name: "PANEL RAM UNLIMITED",
    price: "15000"
  }
}
global.host = "https://privatehosting.fahri4you.my.id"
global.application = {
  api_key: "ptla_PVHwe9LhZP1EFIqay9N3MXGHZs3SbyjyXcDRc6QT4hI",
  c_api_key: "ptlc_YJMG78EsZRU7WM2hpVKDjcIhJ0B17IpKhkVkQ3eZF6z",
  }
global.serverCreate = {
  nestId: "5", //Nest Id panel lu
    eggId: "15", //Egg Id panel lu
  limits: {
    db: "5", //Mending ga usah diganti
    backups: "5", //Mending ga usah diganti
    allocation: "1" //Mending ga usah diganti
  },
  eggs: {
    environment: {
      "CMD_RUN": "npm start", //Sesuaiin sama eggs lu
      "GIT_ADDRESS": "",
      "BRANCH": "",
      "USERNAME": "",
      "ACCESS_TOKEN": ""
    }
  }
}
// Message Command 
global.mess = {
	owner: "  \`</> [ Owner Only! ]\`\n- Fitur Ini Hanya Untuk Ownerbot!",
	admin: "  \`</> [ Admin Only! ]\`\n- Fitur Ini Hanya Untuk Admin!",
	botAdmin: "  \`</> [ Bot Admin! ]\`\n- Bot Bukan Admin!",
	group: "  \`</> [ Group Only! ]\`\n- Fitur Ini Hanya Untuk Dalam Grup!",
	private: "  \`</> [ Private Only! ]\`\n- Fitur Ini Hanya Untuk Private Chat!",
	prem: "  \`</> [ Premium Only! ]\`\n- Fitur Ini Hanya Untuk Pengguna Premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})