const {check, validationResult} = require('express-validator');

exports.validateClass = [
  check('subject')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Name can not be empty!'),

    check('teachername')
    .trim()
    .escape()
    .not()
    .isEmpty().withMessage('Name can not be empty!')
    .bail()
    .isLength({min: 3}).withMessage('Minimum 3 characters required!')
    .bail(),
    
    // check('duration')
    // .trim()
    // .isNumeric()
    // .isEmpty()
    // .withMessage('Must Specify'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];