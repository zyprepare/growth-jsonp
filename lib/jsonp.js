import jsonp from 'jsonp'

const config = {
  timeout: 5000
}

/**
 * jsonp请求返回promise对象
 * @param {String} url 请求URL
 * @param {Object} params 查询参数json对象
 * @param {Object} opts 配置对象
 * @return {Promise}
 */
let jsonpPromise = (url, params, opts) => {
  url = setUrl(url, params)
  return new Promise((resolve, reject) => { // eslint-disable-line
    jsonp(url, opts = opts || config, (error, success) => {
      if (error) {
        console.log('jsonp -> reject: ', error)
        reject(error)
      } else {
        console.log('jsonp -> resolve: ', success)
        resolve(success)
      }
    })
  })
}

/**
 * 设置请求url
 * @param {String} url
 * @param {Object} params
 * @return {String}
 */
function setUrl(url, params) {
  // 判断url是否存在以及是否为字符串
  if (!url || typeof url != 'string') {
    throw new Error('必须传入字符串类型的url地址')
  }

  params = Object.assign({}, params, { _: new Date().getTime() })

  let param = function (data) {
    let url = ''
    for (var k in data) {
      let value = data[k] !== undefined ? data[k] : ''
      url += '&' + k + '=' + encodeURIComponent(value)
    }
    return url ? url.substring(1) : ''
  }
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(params)
  return url
}

export default jsonpPromise;
