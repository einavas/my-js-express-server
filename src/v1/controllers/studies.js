// @desc Get all studies
// @route GET /api/v1/studies
// @access Public
exports.getStudies = (req, res, next) => {
    res.status(200).json({ success: true, msg: "studies API Success!"});
}

// @desc Get single studies
// @route GET /api/v1/studies/:id
// @access Public
exports.getStudy = (req, res, next) => {
    res.status(200).json({ success: true, msg: "study by id API Success!"});
}