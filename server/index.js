const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
//start
// const DB = require('../module/db')
const bodyParser = require('koa-bodyparser')
const session = require('koa-generic-session')
// const redis = require('koa-redis')
const json = require('koa-json')
const passport = require('./interface/utils/passport')
const user = require('./interface/users')
//end
const app = new Koa()

//start
app.keys = ["mt", "keyskeys"]
app.proxy = true
app.use(session({
  key: "mt",
  prefix: "mt:uid",
  // store: new redis()
}))

app.use(bodyParser({
  extendTypes: ["json", "form", "text"]
}))
app.use(json())
app.use(passport.initialize())
app.use(passport.session())
//end

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // start
  app.use(user.routes()).use(user.allowedMethods())
  // app.use(geo.routes()).use(geo.allowedMethods())
  // app.use(search.routes()).use(search.allowedMethods())
  // app.use(ctx => {
  //   ctx.status = 200 // koa defaults to 404 when it sees that status is unset

  //   return new Promise((resolve, reject) => {
  //     ctx.res.on('close', resolve)
  //     ctx.res.on('finish', resolve)
  //     nuxt.render(ctx.req, ctx.res, promise => {
  //       // nuxt.render passes a rejected promise into callback on error.
  //       promise.then(resolve).catch(reject)
  //     })
  //   })
  // })
  // end

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
