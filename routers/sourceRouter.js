var express = require('express')
var router = express.Router()
var path = require('path')
const methodOverride = require('method-override')

router.use(methodOverride('_method'))
// var dir = "/public/assets"

router.get('/css/min', (req, res) => {
    res.sendFile(__dirname + '/assets/bootstrap-4.4.1/dist/css/bootstrap.min.css')
})

router.get('/css/dash', (req, res) => {
    res.sendFile(__dirname + '/assets/css/dashboard.css')
})

router.get('/js/popper', (req, res) => {
    res.sendFile(__dirname + '/assets/js/popper.min.js')
})

router.get('/js/min', (req, res) => {
    res.sendFile(__dirname + '/assets/bootstrap-4.4.1/dist/js/bootstrap.min.js')
})

router.get('/plant', (req, res) => {
    res.sendFile('/home/bettagj/GMS/Website/public/images/Icons/plantIcon.svg')
})

module.exports = router
