var TelegramBot = require("node-telegram-bot-api")

var token = "5231899144:AAFiLdn3dA54HXUOiGsoI36jx6WO0I1ZGYI"
// var token = "5026027683:AAGsSpHsUATaee2ld6vda5kNixNg_tDE6FQ" // 測試
//括號裡面的內容需要改為在第5步獲得的Token
var bot = new TelegramBot(token, { polling: true })
//使用Long Polling的方式與Telegram伺服器建立連線

const chatIds = [591309041] // 456371558 591309041

//收到Start訊息時會觸發這段程式
// bot.onText(/\/start/, function (msg) {
//   var chatId = msg.chat.id //用戶的ID
//   var resp = "你好" //括號裡面的為回應內容，可以隨意更改
//   bot.sendMessage(chatId, resp) //發送訊息的function
// })

bot.sendMessage(591309041, "測試公告~")
