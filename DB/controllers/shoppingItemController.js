const router = require('express').Router()
const shoppingItemModel = require ('../models/shoppingItems/shoppingItemModel')
const auth = require ('../authentication/auth')

router.get('/', shoppingItemModel.getHomeItem)
router.get('/:id', shoppingItemModel.getOneHomeItem)

router.post('/new', auth.verifyToken, shoppingItemModel.createHomeItem) //auth.verifyToken kommer att köra next om allt går bra och gå vidare till nästa (man måste logga in för att göra ändringar)
router.patch('/:id', auth.verifyToken, shoppingItemModel.patchHomeItem)
router.delete('/:id', auth.verifyToken, shoppingItemModel.deleteHomeItem)

module.exports = router