// 配置

const app = {
  dbUrl: "mongodb://127.0.0.1:27017", // 数据库地址
  dbName: 'meit', // 数据库名称
  // redis: {
  //   get host() {
  //     return '127.0.0.1'
  //   },
  //   set port() {
  //     return 6379
  //   }
  // },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '916030623@qq.com'
    },
    get pass() {
      return 'cwntbeuotqszbehf'
    }
  },
  get code () {
    return () => Math.random().toString(16).slice(2, 6).toUpperCase()
  },
  get expire() {
    return () => new Date().getTime() + 60*60*1000
  }
}

module.exports = app