const express = require('express');
const router = express.Router();
const {
  submitApplication,
  getAllApplications
} = require('../controllers/applicationController');

router.post('/apply', submitApplication);
router.get('/applications', getAllApplications);

module.exports = router;