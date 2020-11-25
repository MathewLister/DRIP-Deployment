var express = require('express')
var router = express.Router()
var path = require('path')
const methodOverride = require('method-override')

router.use(methodOverride('_method'))
router.use(express.static(__dirname + '/public/assets')) //Global variable so we can access stuff in /public
// var dir = "/public/assets"

router.get('/css/min', (req, res) => {
    res.sendFile(__dirname + '/bootstrap-4.4.1/dist/css/bootstrap.min.css')
})

router.get('/css/dash', (req, res) => {
    res.sendFile(__dirname + '/css/dashboard.css')
})

router.get('/js/popper', (req, res) => {
    res.sendFile(__dirname + '/js/popper.min.js')
})

router.get('/js/min', (req, res) => {
    res.sendFile(__dirname + '/bootstrap-4.4.1/dist/js/bootstrap.min.js')
})

router.get('/plant', (req, res) => {
    res.sendFile(__dirname + '../images/Icons/plantIcon.svg')
})

module.exports = router
