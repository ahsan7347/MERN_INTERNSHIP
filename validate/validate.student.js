const {check, validationResult} = require('express-validator');

exports.validateStudent = [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty().withMessage('Name can not be empty!')
    .bail()
    .isLength({min: 3}).withMessage('Minimum 3 characters required!')
    .bail(),

    check('email')
    .isEmail()
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage('Invalid email address!')
    .bail(),
    
    check('facebookurl')
    .isURL({ protocols: ['facebook'] })
    .withMessage('Invalid URL'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];