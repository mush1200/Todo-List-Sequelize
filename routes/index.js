// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()


// 引入模組程式碼
const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')

router.use('/todos', todos)
router.use('/users', users)
router.use('/', home)


// 匯出路由器
module.exports = router