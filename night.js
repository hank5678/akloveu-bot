var stickers = require("./stickers")

const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

module.exports = [
  [
    {
      type: "text",
      payload: "寶貝，很晚囉，蠑螈在等你了，乖乖上床睡覺，晚安~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["晚安"])
    }
  ],
  [
    {
      type: "text",
      payload: "寶貝要乖乖睡覺喔~ 抱抱，我很想你，晚安"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["晚安"])
    }
  ],
  [
    {
      type: "text",
      payload: "寶貝~ 快去睡覺!!!! 再不睡要賴床了 晚安~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["晚安"])
    }
  ],
  [
    {
      type: "text",
      payload: "蠑螈在召喚你了~ 快去捲好 晚安 寶貝~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["晚安"])
    }
  ],
  [
    {
      type: "text",
      payload: "親親~ 抱抱~ 寶貝，乖乖睡，想你哦，晚安"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["晚安"])
    }
  ],
  [
    {
      type: "text",
      payload: "寶貝，晚安時間到了"
    },
    {
      type: "text",
      payload: "希望你好好的，不要失眠"
    },
    {
      type: "text",
      payload: "我很想你，真希望現在你在我旁邊"
    },
    {
      type: "text",
      payload: "抱抱，寶貝晚安"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["晚安"])
    }
  ]
]
