const express = require('express')
const next = require('next')
const url = require('url')
const passport = require('passport')
const morgan = require('morgan')
const compression = require('compression')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const db = require('./database')
const { User } = require('./database/models')
const sessionStore = new SequelizeStore({ db })

const dev = process.env.NODE_ENV !== 'production'

const port = process.env.PORT || 3000

const nextApp = next({ dir: '.', dev })
const nextHandler = nextApp.getRequestHandler()

const sessionConfig = {
  secret: process.env.SESSION_SECRET || 'devlopmentSecretPhrase',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  maxAge: null,
}

passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

sessionStore.sync()
db.sync()

nextApp.prepare().then(() => {
  const app = express()

  app.use(morgan('dev'))
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(compression())
  app.use(session(sessionConfig))

  app.use(passport.initialize())
  app.use(passport.session())

  app.use('/api', require('./api'))

  // Default catch-all renders Next app
  app.get('*', (req, res) => {
    const parsedUrl = url.parse(req.url, true)
    nextHandler(req, res, parsedUrl)
  })

  app.use((error, req, res, next) => {
    console.error(error)
    res
      .status(error.status || 500)
      .send(error.message || 'Internal server error')
  })

  app.listen(port, (err) => {
    if (err) throw err
    console.log(`Server is listening on port ${port}`)
  })
})
