const { validationResult } = require('express-validator');
const validate = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (err) {
        return res.status(400).json({
            status: 400,
            message: err.array()[0].msg,
        });
    }
}

module.exports = { validate };