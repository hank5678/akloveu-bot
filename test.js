var TelegramBot = require("node-telegram-bot-api")

var token = "5231899144:AAFiLdn3dA54HXUOiGsoI36jx6WO0I1ZGYI"
// var token = "5026027683:AAGsSpHsUATaee2ld6vda5kNixNg_tDE6FQ" // 測試
//括號裡面的內容需要改為在第5步獲得的Token
var bot = new TelegramBot(token, { polling: true })
//使用Long Polling的方式與Telegram伺服器建立連線

const chatIds = [591309041, 456371558] // 456371558 591309041

//收到Start訊息時會觸發這段程式
// bot.onText(/\/start/, function (msg) {
//   var chatId = msg.chat.id //用戶的ID
//   var resp = "你好" //括號裡面的為回應內容，可以隨意更改
//   bot.sendMessage(chatId, resp) //發送訊息的function
// })

// chatIds.forEach((chatId) => {
//   bot.sendMessage(
//     chatId,
//     "號外～號外～大會公告～我被更新啦～～～就在剛剛，我變聰明囉～主人給我加上新的更多詞彙，我比以前更會抱抱了～然後減少廢話時間，撩妹變少了嗚嗚。還有晚安時間會有明日天氣預測BETA版～我會告訴妳明天天氣好不好哦，我很厲害把！哈哈哈！！！我還會繼續成長哦，敬請期待～"
//   )
// })

chatIds.forEach((chatId) => {
  setTimeout(() => {
    bot.sendMessage(chatId, "====== 重來，我耍笨了 ======")
  }, 1000)
  setTimeout(() => {
    bot.sendMessage(chatId, "嗚嗚～我剛剛有BUG啦，好險主人馬上發現，把我推進急診室搶救成功～我繽紛復活啦！")
  }, 2000)
  setTimeout(() => {
    bot.sendMessage(chatId, "現在我又多一個新功能囉～ 跟你介紹一下呀")
  }, 3000)
  setTimeout(() => {
    bot.sendMessage(chatId, "我變聰明了，我會玩剪刀石頭布~")
  }, 4000)
  setTimeout(() => {
    bot.sendMessage(chatId, "指令的格式是：剪刀石頭布~[你要出的拳]")
  }, 5000)
  setTimeout(() => {
    bot.sendMessage(chatId, "舉例：剪刀石頭布~石頭")
  }, 6000)
  setTimeout(() => {
    bot.sendMessage(chatId, "遇事不決，需要二選一的時候，歡迎找我切磋商量～")
  }, 7000)
  setTimeout(() => {
    bot.sendMessage(chatId, "我發誓不會作弊也不會晚出～ 君子之戰～")
  }, 8000)
  setTimeout(() => {
    bot.sendMessage(chatId, "拜拜~ 今天要快快樂樂哦")
  }, 9000)
})
