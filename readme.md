# mock服务器

## 作用

模拟接口返回数据，支持

* 请求方法配置
* 自定义返回数据内容
* 自定义错误返回数据内容

## 配置文件说明

* **1、可以在apiconf文件夹下自由增加js文件，程序会自动扫描文件夹下的所有js文件内容**

* **2、每个配置文件需要导出一个对象，对象的key值为请求路径，value存在以下配置项**

| 字段名 | 含义 | 是否可为空 | 默认值 | 说明 |
| ------ | ------ | ------ | ------ |------ |
| method | 请求方法 | yes | 'all' | - |
| res | 返回值 | yes | ```{}``` | - |
| hasErr | 错误返回值 | yes | - | 当该值存在时，会触发错误返回逻辑，与res互斥，需提供{data:'',msg:'',errCode:''}数据结构作为返回值 |
| delay | 延迟返回时间 | yes | ```0``` | 设置次值则结果会延迟一定时间才会返回，便于测试加载状态效果 |

