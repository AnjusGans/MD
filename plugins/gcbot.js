let fetch = require('node-fetch')
let teks = 'gcbot'
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/c6d47e0aa9dca2263bee9.png'+ teks)).buffer(), `

*Halo Kak, Ini Adalah Group KennBot, kalian bsa join untuk mengetahui status KennBot, aktif atau mati*
╔═══════════════════
║ _*Group KennBot Official*_
╠═══════════════════
║➸ 𝐆𝐫𝐨𝐮𝐩 𝐁𝐨𝐭 1
║ https://chat.whatsapp.com/I936MlAcaKt9exRqdbVK2o
╚════════════════════

`.trim(), wm, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gc(bot|groupbot)$/i

module.exports = handler
