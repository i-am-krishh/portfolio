const express = require('express');
const { sendEmailController } = require('../controller/portfolioController');

// router object
const router = express.Router();

// routes
router.post("/sendEmail", sendEmailController);

// export router
module.exports = router;
