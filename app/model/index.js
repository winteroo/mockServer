class BaseModel {
  constructor (data, msg) {
    this.data = null;
    this.msg = '';
    if (data) {
      this.data = data;
    }
    if (msg) {
      this.msg = msg;
    }
  }
}

class SuccessModel extends BaseModel {
  constructor (data, msg) {
    super(data, msg = '成功');
    this.errCode = 0;
  }
}

class ErrorModel extends BaseModel {
  constructor (data, msg, errCode) {
    super(data, msg);
    if (errCode) {
      this.errCode = errCode;
    } else {
      this.errCode = -1;
    }
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
};
