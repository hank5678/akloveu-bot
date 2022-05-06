var stickers = require("./stickers")

const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

module.exports = [
  [
    {
      type: "text",
      payload: "寶貝，新的一天開始囉，不要再賴床啦~ 早安~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["早安"])
    }
  ],
  [
    {
      type: "text",
      payload: "天亮囉~~~~ 早安寶貝，今天要快快樂樂哦"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["早安"])
    }
  ],
  [
    {
      type: "text",
      payload: "不要賴床啦~! 不然要打屁屁了，寶貝早安~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["早安"])
    }
  ],
  [
    {
      type: "text",
      payload: "早安，寶貝，我很想你，真希望一睜開眼睛我看到的是你。"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["早安"])
    }
  ],
  [
    {
      type: "text",
      payload: "早安大抱抱~ 寶貝，抱完可以再賴一下~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["早安"])
    }
  ],
  [
    {
      type: "text",
      payload: "寶貝，天亮了"
    },
    {
      type: "text",
      payload: "今天不知道能不能見到你"
    },
    {
      type: "text",
      payload: "我很想你，真想跟你一起賴床"
    },
    {
      type: "text",
      payload: "祝你今天有一個好日子，快快樂樂"
    },
    {
      type: "text",
      payload: "親親，寶貝早安"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["早安"])
    }
  ],
  [
    {
      type: "text",
      payload: "早安，寶貝，如果我們沒有聯繫，打個卡讓我知道你起床了，我會放心的"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["早安"])
    }
  ],
  [
    {
      type: "text",
      payload: "新的一天，早安，寶貝"
    },
    {
      type: "text",
      payload: "希望今天可以是有你的一天"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["早安"])
    }
  ],
  [
    {
      type: "text",
      payload: "早安~ 寶貝，今天會想我嗎？"
    },
    {
      type: "text",
      payload: "想我的話 跟我說唷"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["早安"])
    }
  ]
]
