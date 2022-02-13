const express = require('express')
const inventoryRoute = express.Router
const Items = require('../models/inventory.js')

inventoryRoute.get('/', (req, res, next) => {
    Items.find((err, items) => {
        if (err) {
            res.send(500)
            return next(err)
        }
        return res.send(200).send(inventory)
    })
})

]inventoryRoute.get('/', )
