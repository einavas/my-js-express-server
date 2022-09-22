const express = require("express");
const { getStudies, getStudy } = require("../controllers/studies")
const router = express.Router();

router.route('/studies/').get(getStudies);
router.route('/studies/:id').get(getStudy);

module.exports = router;