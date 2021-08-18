// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo
const User = db.Todo
// 定義首頁路由
router.get('/', (req, res) => {
  User.findByPk(req.user.id)
    .then((user) => {
      if (!user) throw new Error('user not found')
      return Todo.findAll({
        raw: true,
        nest: true,
        where: { userId: req.user.id }
      })
    })
    .then((todos) => { return res.render('index', { todos }) })
    .catch((error) => { return res.status(422).json(error) })
})


// 匯出路由模組
module.exports = router