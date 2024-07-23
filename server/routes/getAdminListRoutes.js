const express = require('express');
const router = express.Router();

const listController = require('../controllers/getAdminList');


router.get('/getadmins', listController);

module.exports = router;