var modelVape = require('../models/productModel')

var vapeCreate = function(req, res){
  vape = new modelVape();
  vape.name = req.body.name
  vape.description = req.body.description
  vape.category = req.body.category
  vape.stock = req.body.stock
  vape.price = req.body.price
  vape.createdAt = new Date()
  vape.updatedAt = new Date()

  vape.save(function(err){
    if(!err){
      res.send(vape)
    }
    else {
      res.send(err)
    }
  })
}


var vapeShow = function(req, res){
  modelVape.find(function(err, data){
    if(!err){
      res.send(data)
    }else {
      res.send(err)
    }
  })
}


var vapeUpdate = function(req, res){
  modelVape.findByIdAndUpdate({
    _id:req.params.id
  },{
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    stock: req.body.stock,
    price: req.body.price,
    updatedAt: new Date()
  })
  .then((data)=>{
    res.send(data)
  })
  .catch((err)=>{
    res.send(err)
  })
}

var vapeDelete = function(req, res){
  modelVape.findByIdAndRemove({
    _id:req.params.id
  })
  .then(()=>{
    res.send('deleted')
  })
  .catch((err)=>{
    res.send(err)
  })
}

var vapeCart = function(req, res){
  modelVape.findById({
    _id: req.params.id
  })
  .then((data)=>{
    res.send(data)
  })
  .catch((err)=>{
    res.send(err)
  })
}

module.exports = {
  vapeCreate,
  vapeShow,
  vapeUpdate,
  vapeDelete,
  vapeCart
}
