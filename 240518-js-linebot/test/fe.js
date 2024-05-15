// 對網頁資訊發請求
// 寫一個簡單的測試 JS 語法是否有用
import axios from 'axios'
import * as cheerio from 'cheerio'

const main = async () => {
  try {
    const { data } = await axios.get('https://wdaweb.github.io/')
    const $ = cheerio.load(data)
    const courses = []
    // 多個元素很難抓
    $('#fe .card-title').each(function () {
      courses.push($(this).text().trim())
    })
    console.log(courses)
  } catch (error) {
    console.log(error)
  }
}

main()
