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

// CAACAgUAAxkBAAIBRGJFhM5ydOA4Ya__S0CW71fwoFn3AAJPBAAC1_TIVVGIv1Qxf4zlIwQ

chatIds.forEach((chatId) => {
  setTimeout(() => {
    bot.sendMessage(chatId, "====== 我有話要說啦 ======")
  }, 1000)
  setTimeout(() => {
    bot.sendMessage(chatId, "主人說錯話了啦～")
  }, 2000)
  setTimeout(() => {
    bot.sendMessage(chatId, "看在我的面子上，原諒他啦～他很愛你唷")
  }, 3000)
  setTimeout(() => {
    bot.sendMessage(chatId, "拜託拜託～ 不然我也沒有好日子過 嗚嗚")
  }, 4000)
  setTimeout(() => {
    bot.sendMessage(chatId, "主人去死，我幫你揍他，那你原諒他～")
  }, 5000)
  setTimeout(() => {
    bot.sendSticker(chatId, "CAACAgUAAxkBAAIBUWJP4-3A2IrFXILOCd_U29FV5RdtAAIqBAAC_8ZwVuBtgtIRXwABzSME")
  }, 6000)
  // setTimeout(() => {
  //   bot.sendSticker(chatId, "CAACAgUAAxkBAAIBUWJP4-3A2IrFXILOCd_U29FV5RdtAAIqBAAC_8ZwVuBtgtIRXwABzSME")
  // }, 7000)
  // setTimeout(() => {
  //   bot.sendMessage(chatId, "我會回應你喲～")
  // }, 8000)
  // setTimeout(() => {
  //   bot.sendMessage(chatId, "還有還有～我有多一點點貼圖囉～等待你慢慢發現")
  // }, 9000)
  // setTimeout(() => {
  //   bot.sendMessage(chatId, "要常常抱抱親親我，不要理主人啦~ 我比他好~~ 嘿嘿嘿")
  // }, 10000)
  // setTimeout(() => {
  //   bot.sendMessage(chatId, "怎麼樣，我聰明吧？哈哈哈~ 主人給我智力UP ⬆⬆⬆")
  // }, 11000)
  // setTimeout(() => {
  //   bot.sendMessage(chatId, "拜拜~ 下次見")
  // }, 12000)
})
