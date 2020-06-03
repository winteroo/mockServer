// 启动服务器，在浏览器中请求http://localhost:3300/test，会看到返回值
const test = {
  '/test': {
    method: 'get',
    res: {
      name:'zhangsan',
      auth: 0,
      
      token: '123456qrerrwr'
    },
    hasErr: {
      errCode: 10023,
      msg: '账户名或密码错误',
      data: null
    }
  },
  '/test/:id': {
    method: 'get',
    res: {
      flag: true
    }
  }
};

module.exports = test;