const express = require('express')
const { models } = require('mongoose')
const { type } = require('os')
const inventoryRoute = express.Router
const Item = require('../models/inventory.js')


// Get All
inventoryRoute.get('/', (req, res, next) => {
    Item.find((err, items) => {
        if (err) {
            res.send(500)
            return next(err)
        }
        return res.send(200).send(inventory)
    })
})

// Get By Type
inventoryRoute.get('/search/type', (req, res, next) => {
    Item.find({ category: req.query.type })
    if (err) {
        res.status(500)
        return next(err)
    }
    return res.status(200).send(type)
})

// Add One Entry
inventoryRoute.post('/', (req, res, next) => {
    const newEntry = new Item(req.body)
    newEntry.save((err, saved) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(saved)
    })
})

// Delete An Entry
inventoryRoute.delete('/:entryId', (req, res, next) =>
    Item.findOneAndDelete({ _id: req.params.entryId }, (err, deleted) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send("Item has been deleted from the database")
    })
})

// Edit An Entry
inventoryRoute.put('/:entryId', (req, res, next) => {
    Item.findOneAndUpdate({ _id: req.params.entryId }, (err, edited) => {
        { _id: req.parmas.entryId },
        req.body,
            { new: true },
            (err, entryUpdated) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(entryUpdated)
            }
    })
})

models.exports = inventoryRoute
