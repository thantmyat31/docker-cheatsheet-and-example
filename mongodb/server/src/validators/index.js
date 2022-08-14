const { validationResult } = require('express-validator');

exports.runValidation = (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ message: errors.array()[0].msg });
    } 

    next();
}