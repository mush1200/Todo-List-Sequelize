// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo


router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})


// 匯出路由模組
module.exports = router