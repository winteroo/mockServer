// 启动服务器，在浏览器中请求http://localhost:3300/test，会看到返回值
const test = {
  '/test': {
    method: 'get',
    res: {
      name: 'zhangsan',
      auth: 0,
      token: '123456qrerrwr'
    },
    hasErr: {
      errCode: 10023,
      msg: '账户名或密码错误',
      data: null
    }
  },
  '/alltest': {
    method: 'all',
    res: {
      apply: 1,
      output: 200,
      look: 300,
      send: 400,
      receive: 500,
      mobileVerify: {
        verifySucceed: 600,
        verifyError: 700
      },
      sentFew: {
        smsFew: 800,
        emailFew: 900
      }
    }
  },
  '/list': {
    res: {
      list: [{
          apply: 1,
          statisticalDate: '2019-01-02',
          output: 200,
          look: 300,
          send: 400,
          receive: 500,
          mobileVerify: {
            verifySucceed: 600,
            verifyError: 700
          },
          sentFew: {
            smsFew: 800,
            emailFew: 900
          }
        },
        {
          apply: 2,
          output: 2300,
          look: Math.random() * 3003,
          send: 4003,
          receive: 5300,
          statisticalDate: '2019-01-02',
          mobileVerify: {
            verifySucceed: 6300,
            verifyError: 7030
          },
          sentFew: {
            smsFew: 8003,
            emailFew: 9030
          }
        }
      ],
      totalRows: 200
    }

  }
};

module.exports = test;