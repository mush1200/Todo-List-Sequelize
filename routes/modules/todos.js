// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo

router.get('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return Todo.findOne({ where: { id, UserId }})
    .then(todo => res.render('detail', { todo: todo }))
    .catch(error => console.log(error))
})


// 匯出路由模組
module.exports = router