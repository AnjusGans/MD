let fetch = require('node-fetch')
let teks = 'Donasi'
let handler = async (m, { conn }) => conn.send2ButtonImg(m.chat, await (await fetch('https://telegra.ph/file/c6d47e0aa9dca2263bee9.png'+ teks)).buffer(), `

*Halo User, Mari Berdonasi Dengan KennBot untuk meningkatkan kualitas KennBot*
╔═══════════════════
║ _*DONASI UNTUK*_ *KennBot*
╠═══════════════════
║        ❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉
║➸ *DANA / OVO / GOPAY* : 
║➸ 081238142144
║➸ *PULSA
║➸ 081238142144
║ 
╚════════════════════

`.trim(), wm, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
