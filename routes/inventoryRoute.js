const express = require('express')
const { type } = require('os')
const inventoryRoute = express.Router
const Items = require('../models/inventory.js')


// Get All
inventoryRoute.get('/', (req, res, next) => {
    Items.find((err, items) => {
        if (err) {
            res.send(500)
            return next(err)
        }
        return res.send(200).send(inventory)
    })
})

// Get By Type
inventoryRoute.get('/search/type', (req, res, next) => {
    Items.find({ category: req.query.type })
    if (err) {
        res.status(500)
        return next(err)
    }
    return res.status(200).send(type)
})
