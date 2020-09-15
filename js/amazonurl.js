var hiduke=new Date(); 

//年・月・日・曜日を取得する
var year = hiduke.getFullYear();
var month = ("00" + (hiduke.getMonth()+1)).slice(-2)
var day = ("00" + hiduke.getDate()).slice(-2)

today=String(year)+String(month)+String(day)
var url = 'https://www.amazon.co.jp/s?i=digital-text&rh=n%3A2250738051%2Cn%3A2250739051%2Cn%3A2275256051%2Cp_n_date%3A'+today+'&s=date-desc-rank&page=1&qid=1588652675&ref=sr_pg_2'

// https://www.amazon.co.jp/s?i=digital-text&rh=n%3A2250738051%2Cn%3A2250739051%2Cn%3A2275256051%2Cp_n_date%3A15&s=date-desc-rank&page=1&qid=1588652675&ref=sr_pg_2