var dayjs = require("dayjs")
var isBetween = require("dayjs/plugin/isBetween")
var axios = require("axios")
dayjs.extend(isBetween)

function getNightReport(records) {
  const tomorrowMorningDay = dayjs().startOf("day").add(1, "day").add(10, "hour") // 明天早上10點
  // const tomorrowAfternoonDay = dayjs().startOf("day").add(1, "day").add(13, "hour") // 明天下午1點
  const tomorrowNightDay = dayjs().startOf("day").add(1, "day").add(19, "hour") // 明天晚上7點

  const taipei = records.location.find((el) => {
    return el.locationName === "臺北市"
  })

  function getTemperature(day) {
    const aa = taipei?.weatherElement
      .find((el) => {
        return el.elementName === "MinT"
      })
      .time.find((el) => {
        return day.isBetween(el.startTime, el.endTime)
      })?.parameter?.parameterName

    // 找到今晚7點的最高溫
    const bb = taipei?.weatherElement
      .find((el) => {
        return el.elementName === "MaxT"
      })
      .time.find((el) => {
        return day.isBetween(el.startTime, el.endTime)
      })?.parameter?.parameterName

    // 算出今晚7點的平均溫度
    const cc = (Number(aa) + Number(bb)) / 2 || undefined

    return cc
  }

  function getPoP(day) {
    const aa = taipei?.weatherElement
      .find((el) => {
        return el.elementName === "PoP"
      })
      .time.find((el) => {
        return day.isBetween(el.startTime, el.endTime)
      })?.parameter?.parameterName

    return aa ? Number(aa) : undefined
  }

  function getCI(temp) {
    if (temp <= 13) {
      return "超級冷"
    }
    if (temp > 13 && temp <= 17) {
      return "很冷"
    }
    if (temp > 17 && temp <= 21) {
      return "有一點冷"
    }
    if (temp > 21 && temp <= 25) {
      return "剛剛好"
    }
    if (temp > 25 && temp <= 30) {
      return "有一點熱"
    }
    if (temp > 30) {
      return "超熱"
    }
  }

  function getWearTalk(temp) {
    if (temp <= 13) {
      // 超級冷
      return "穿多一點，最厚的外套拿出來～ alasha 那種的，裡面要穿長袖哦"
    }
    if (temp > 13 && temp <= 17) {
      // 很冷
      return "要穿多一點，好看又實穿的 superdry 可以來一下～ 裡面要穿長袖的哦"
    }
    if (temp > 17 && temp <= 21) {
      // 有一點冷
      return "黃色白帽或牛仔AAPE這個等級的外套可以出動了～ 或者穿薄的外套，但是裡面就要穿很厚的衣。"
    }
    if (temp > 21 && temp <= 25) {
      // 剛剛好
      return "可以穿薄的外套+薄長T，或者厚長T不穿外套也可以，獨角獸是時候出動啦～"
    }
    if (temp > 25 && temp <= 30) {
      // 有一點熱
      return "如果會曬，穿個薄外套方便穿脫，穿個薄長袖或短袖都可以，不准穿太暴露"
    }
    if (temp > 30) {
      // 超熱
      return "會熱死掉，注意防曬哦"
    }
  }

  const tomorrowArr = [getTemperature(tomorrowMorningDay), getTemperature(tomorrowNightDay)].filter((el) => el !== undefined)
  const tomorrowTemp = tomorrowArr.reduce((acc, cur) => acc + cur, 0) / tomorrowArr.length

  return `明天天氣${getCI(tomorrowTemp)}～ ${getWearTalk(tomorrowTemp)}，啊~ 還有，早上的下雨機率是${getPoP(tomorrowMorningDay)}%，晚上是${getPoP(
    tomorrowNightDay
  )}%，要注意一下哦`
}

function getWeatherReportAsync() {
  return axios({
    method: "get",
    url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001",
    params: {
      Authorization: "CWB-1235C28A-7396-4DD3-9B08-5F955CCE1AB3"
    }
  }).then((res) => {
    if (res.status === 200 && res.data.success === "true") {
      const report = getNightReport(res.data.records)
      return report
    } else {
      return Promise.reject()
    }
  })
}

module.exports = getWeatherReportAsync
