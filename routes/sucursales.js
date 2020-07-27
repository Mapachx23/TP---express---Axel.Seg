const express = require('express');
const router = express.Router();
const sucursalesController = require('../controller/sucursalesController')

router.get('/',sucursalesController.diretel);
router.get('/:sucursal',sucursalesController.idSucursal);

module.exports = router;