const express = require('express');
const router = express.Router();
const marcasController = require('../controller/marcasController')

router.get('/',marcasController.marcas);
router.get('/:marca',marcasController.idAuto);

module.exports = router;