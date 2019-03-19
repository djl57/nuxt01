// passport 一个验证权限的类库
const passport = require('koa-passport')
const localStrategy = require('passport-local')
// import user from '../../dbs/models/users'
const DB = require('../../dbs/db')

passport.use(new localStrategy(async (username, password, done) => {
  let where = {
    username
  }
  let result = await DB.find('user', where)
  if (result != null) {
    if (result.password === password) {
      return done(null, result)
    } else {
      return done(null, false, '密码错误')
    }
  } else {
    return done(null, false, '用户不存在')
  }
}))

passport.serializeUser((user, done) => { // 序列化
  done(null, user)
})

passport.deserializeUser((user, done) => { // 反序列化
  return done(null, user)
})

module.exports = passport