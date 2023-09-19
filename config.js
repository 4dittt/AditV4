import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285213510153', 'Adit', true], 
] //Numeros de owner 

global.mods = ['6285213510153'] 
global.prems = ['6285213510153']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'Adit' 
global.author = '@AditV4' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/_adittt4u\n' 
global.dygp = 'https://chat.whatsapp.com/Lr7Oa7zY8E8F0ZmJLOTklX'
global.fgsc = 'https://github.com/4dittt' 
global.fgyt = 'http://info-nanzone.nans.tech/'
global.fgpyp = 'https://saweria.co/nansofficial'
global.fglog = 'https://i.ibb.co/tbHVZZ5/20230528-113117.png' 

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
