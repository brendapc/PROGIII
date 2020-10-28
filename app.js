const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const productsRoute = require('./Routes/products')
const ordersRoute = require('./Routes/orders')
 
const db = require('./mysqlconnection')
/* 
mongoose.connect('mongodb://localhost:27017/restapi').then(()=> console.log('MongoDB connected!')).catch((err)=>{
    console.log(err)
}) */

app.use(morgan('dev')) //Log de operações que chegam no servidor
app.use(bodyParser.urlencoded({extended: false})) // Recebe body requests, false significa um body simples (simplificado)
app.use(bodyParser.json()) //podemos receber body na requisição
app.use(cors()) //evitar erros de requisições locais

app.get('/', (req, res)=>{
    res.status(200).json({
        message: 'endereço não válido'
    })
})
app.post('/', (req, res)=>{
    res.status(200).json({
        message: 'endereço não válido'
    })
})

app.use('/products', productsRoute)
app.use('/orders', ordersRoute)

module.exports = app