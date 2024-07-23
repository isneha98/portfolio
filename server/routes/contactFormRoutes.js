const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactFormController');

router.post('/submit', contactFormController.submitForm);

module.exports = router;
