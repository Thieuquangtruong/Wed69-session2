const router = require('express').Router()
const {getCustomer,createCustomer,deleteCustomer} = require('../controller/customer')

router.get('/', getCustomer)

router.post('/', createCustomer)

router.delete('/:id', deleteCustomer)

module.exports = router