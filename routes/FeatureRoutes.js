const express = require('express');

const app = express();

const router = express.Router();

const usercontroller = require('../controllers/FeaturesController');

router.post('/feature',usercontroller.create);

router.get('/feature',usercontroller.findAll);

router.get('/feature/:id',usercontroller.findById);

router.put('/feature/:id',usercontroller.update);

router.delete('/feature/:id',usercontroller.delete);

module.exports = router;