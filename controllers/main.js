const getTableData = (req, res, db) => {
  console.log(req, res, db)
  db.select('*').from('paintings')
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => console.log(err))
}

const putTableData = (req, res, db) => {
  const {id, likes} = req.body
  db('paintings').where({id}).update({likes})
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => console.log(err))
}

module.exports = {
  getTableData,
  putTableData
}