var stickers = require("./stickers")

const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

module.exports = [
  [
    {
      type: "text",
      payload: "寶貝，啵啵~ 我想你了"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "三連啵~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "啵啵啵啵啵啵啵啵啵啵啵啵啵啵啵啵~ 不要逃跑"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "啵啵~ 我愛你，我很想你"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "不啵，去找主人～ 他在想你～！"
    }
  ],
  [
    {
      type: "text",
      payload: "啵啵~~~~~"
    },
    {
      type: "text",
      payload: "順便偷偷摸你屁屁~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "啵啵~ 要開心哦，我在的，寶貝"
    },
    {
      type: "text",
      payload: "啵啵+抱抱~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "要親臉臉還是親嘴嘴？"
    },
    {
      type: "text",
      payload: "不管都要啦~ 屁屁也要"
    },
    {
      type: "text",
      payload: "啵啵啵啵啵啵~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ],
  [
    {
      type: "text",
      payload: "你只可以跟我啵啵... 知道嗎"
    },
    {
      type: "text",
      payload: "我想你，寶貝，啵啵~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["啵啵"])
    }
  ]
]
