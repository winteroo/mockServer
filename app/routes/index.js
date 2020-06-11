const router = require('koa-router')()
const path = require('path')
const requireAll = require('../util/requireAll');
const {
  SuccessModel,
  ErrorModel
} = require('../model/index')

const apiDirName = 'apiConfig'

const apiConf = requireAll({
  dirname: path.join(__dirname, '..', apiDirName) 
})

const apis = merge(apiConf);

initRouter(apis);

function merge (obj) {
  let keys = Object.keys(obj);
  let newObj = {};
  for (let i = 0; i < keys.length; i++) {
    Object.assign(newObj, obj[keys[i]]);
  }
  return newObj;
}

function initRouter (routerConf) {
  let keys = Object.keys(routerConf);
  for (let i = 0; i < keys.length; i++) {
    let method = routerConf[keys[i]].method || 'all';
    let url = keys[i];
    let res = routerConf[keys[i]].res || {};
    let delay = routerConf[keys[i]].delay || 0;
    // 触发错误机制
    let hasErr = routerConf[keys[i]].hasErr;
    router[method](url, async (ctx, next) => {
      if (hasErr) {
        let {
          data,
          msg,
          errCode
        } = hasErr;
        ctx.body = new ErrorModel(data, msg, errCode);
      } else {
        let ans = res;
        if (delay) {
          ans = await initPromise(res, delay);
        }
        ctx.body = new SuccessModel(ans);
      }
    })
  }
}

function initPromise (data, delay) {
  let num = parseInt(delay) ? parseInt(delay) : 1000;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, num);
  })
}

router.get('/', async (ctx, next) => {
  ctx.body = '你好，欢迎访问mockServer！'
})


module.exports = router
