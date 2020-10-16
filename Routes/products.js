const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Products = require('../Modules/products')

router.get('/products', (req, res)=>{
    Products.find().then((result) => {
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(404).json(err)
    })
})

module.exports = router