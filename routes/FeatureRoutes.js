const express = require('express');

const app = express();

const router = express.Router();

const usercontroller = require('../controllers/FeaturesController');

router.post('/feature',usercontroller.featurecreate);

router.get('/feature',usercontroller.featureget);

router.get('/feature/:id',usercontroller.featureone);

router.put('/feature/:id',usercontroller.featureupdate);

router.delete('/feature/:id',usercontroller.featuredelete);

module.exports = router;