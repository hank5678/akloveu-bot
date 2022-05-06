var stickers = require("./stickers")

const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

module.exports = [
  [
    {
      type: "text",
      payload: "牙~~~ 超級大抱抱~~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "助跑+衝刺+跳躍抱抱~ (你要被我撞倒"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "大抱抱~! (離地"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "超用力~~ 大~~~ 抱抱~~~~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "大抱抱~~~~ 摸摸~~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "超級大抱抱~ 不給你呼吸~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "走開~ 沒有大抱抱~ 你去找主人，他想你了"
    }
  ],
  [
    {
      type: "text",
      payload: "大抱抱~ 抱起來摔到床上~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "大抱抱~ 抱起來摔到床上~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "我想你了，大抱抱~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "抱抱不夠嗎？要大抱抱呀"
    },
    {
      type: "text",
      payload: "大~~~! 抱抱~"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "用力抱住你~ 不放你走"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "好少大抱抱哦～你終於想了～我一直在等呀"
    },
    {
      type: "text",
      payload: "抱～～～～～～～～～～"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ],
  [
    {
      type: "text",
      payload: "大抱抱最舒服~"
    },
    {
      type: "text",
      payload: "抱～～～～～～"
    },
    {
      type: "sticker",
      payload: getRandomElement(stickers["抱抱"])
    }
  ]
]
