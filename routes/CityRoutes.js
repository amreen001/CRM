const express = require('express');
const app = express();

const router = express.Router();

const usercontroller = require('../controllers/CityController');

router.post('/city',usercontroller.citycreate);

router.get('/city',usercontroller.cityget);

router.get('/city/:id',usercontroller.cityone);

router.put('/city/:id',usercontroller.cityupdate);

router.delete('/city/:id',usercontroller.citydelete);

module.exports = router;