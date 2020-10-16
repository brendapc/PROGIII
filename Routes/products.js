const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Products = require('../Modules/products')

router.get('/', (req, res)=>{
    Products.find().then((result) => {
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(404).json(err)
    })
})

router.post('/', (req, res) =>{
    const product = new Products({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })

    product.save().then(result =>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })

})

router.get('/:id', (req, res)=>{
    Products.findById(req.params.id).then(result =>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
})
module.exports = router