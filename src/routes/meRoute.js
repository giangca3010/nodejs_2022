const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// meontroller.index
router.get('/stored/course', meController.storedCourse);

module.exports = router;
