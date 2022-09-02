//Jangan Di ganti!! 
// Jika ada yang Jual sc langsung Di hapus!!

let fetch = require('node-fetch')
let github = fs.readFileSync('./src/github.jpg')
let handler = async (m, { conn }) => conn.sendButtonImg(m.chat, 'https://telegra.ph/file/239f046a928370340401f.jpg',
`Hi Kak @${m.sender.split('@')[0]}, Untuk Sc Bot Belum Di Public Nih, Tapi Bisa Dibeli Di Owner Saya

◪ 📮 *SCRIPT BOT*
│ *Script :* 
│ ╰ https://github.com/AnjusGans
╰──────────═┅═──────────
`, 'Pemilik Bot', '#owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
