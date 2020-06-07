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
        ctx.body = new SuccessModel(res);
      }
    })
  }
}

router.get('/', async (ctx, next) => {
  ctx.body = '你好，欢迎访问mockServer！'
})


module.exports = router
