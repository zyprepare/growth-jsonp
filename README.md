# growth-jsonp
原生js实现的jsonp请求，支持promise。
## 使用方法
npm i jsonp-promise <br>
const jsonpPromise = require('jsonp-promise') or <br>
import jsonpPromise from 'jsonp-promise' <br>
jsonpPromise(url, params).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e)
})
