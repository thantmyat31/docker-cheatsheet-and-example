const { check } = require('express-validator');

exports.createEmployeeValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('The \'name\' field is required.'),
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Must be a valid email address.'),
    check('position')
        .not()
        .isEmpty()
        .withMessage('The \'nrc_number\' field is required'),
    check('address')
        .not()
        .isEmpty()
        .withMessage('The \'father_name\' field is required.'),
    check('phone')
        .not()
        .isEmpty()
        .withMessage('The \'birthday\' field is required.')
];

exports.updateEmployeeValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('The \'name\' field is required.'),
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Must be a valid email address.'),
    check('position')
        .not()
        .isEmpty()
        .withMessage('The \'nrc_number\' field is required'),
    check('address')
        .not()
        .isEmpty()
        .withMessage('The \'father_name\' field is required.'),
    check('phone')
        .not()
        .isEmpty()
        .withMessage('The \'birthday\' field is required.')
]