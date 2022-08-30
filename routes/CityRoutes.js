const express = require('express');
const app = express();

const router = express.Router();

const usercontroller = require('../controllers/CityController');

router.post('/city',usercontroller.create);

router.get('/city',usercontroller.findAll);

router.get('/city/:id',usercontroller.findById);

router.put('/city/:id',usercontroller.update);

router.delete('/city/:id',usercontroller.delete);

module.exports = router;