const express = require('express')
const mongoose = require('mongoose');
const router = express.Router()

const Orders = require('../Modules/orders')

router.get('/', (req, res)=>{
    Orders.find().then(result =>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
})

router.get('/:id', (req,res)=>{
    Orders.findById(req.params.id).then(result=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
})

router.post('/', (req, res)=>{
    const order = new Orders({
        _id: new mongoose.Types.ObjectId,
        quantity: req.body.quantity,
        name: req.body.name
    })

    order.save().then(result =>{
        res.status(200).json(result)
    }).catch(err =>{
        res.status(404).json(err)
    })
})

router.delete('/:id', (req, res)=>{
    Orders.remove({_id: req.params.id}).then(result=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(404).json(err)
    })
})


module.exports = router;