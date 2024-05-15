import axios from 'axios'
// 設定匯率是32
export let exrate = 32

export const update = async () => {
  try {
    // 更新的 function
    const { data } = await axios.get('https://tw.rter.info/capi.php')
    // 得到的匯率更新到變數裡面
    exrate = data.USDTWD.Exrate
  } catch (error) {
    console.log(error)
  }
}
