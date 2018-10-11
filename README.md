# growth-jsonp
原生js实现的jsonp请求，支持promise。
## 使用方法
npm i growth-jsonp <br>
const jsonpPromise = require('growth-jsonp') or <br>
import jsonpPromise from 'growth-jsonp' <br>
jsonpPromise(url, params).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e)
})
