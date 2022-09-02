let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let saweria = global.saweria
let owner = global.owner
let qr = fs.readFileSync('./src/qr.jpg')
let anu = `Hallo mypren 👋
ꕥ━━〔  *Sewa Bot*  〕━━ꕥ

┏━━━━━━━━━━━━━━━━━━ꕥ
⬡ *1 BULAN:* *2.000*
⬡ *2 BULAN:* *4.000*
⬡ *PERMANEN + PREMIUM* : *5.000*
┗━━━━━━━━━━━━━━━ꕥ
Untuk Payment, Bisa Di Scan Qris Diatas Untuk Sewa Bot, Jika Sudah di Scan Masukkan Nominal sewa, Lalu SS Kirim Ke Owner Untuk Bukti
`
  conn.send3ButtonImg(m.chat, qr, anu, 'Pilihan Store', '.pilihanstore', 'Owner', '.owner', 'Menu', '.menu', m) 
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa|sewakenn|sewa|sewabot)$/i

module.exports = handler
