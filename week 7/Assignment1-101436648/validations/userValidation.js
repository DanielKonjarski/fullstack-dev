const { body, validationResult } = require('express-validator');

// Validation rules for signup
const signupValidation = [
  body('username')
    .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long')
    .not().isEmpty().withMessage('Username is required'),
  
  body('email')
    .isEmail().withMessage('Invalid email format')
    .not().isEmpty().withMessage('Email is required'),

  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    .not().isEmpty().withMessage('Password is required')
];

// Validation rules for login
const loginValidation = [
  body('username')
    .not().isEmpty().withMessage('Username is required'),

  body('password')
    .not().isEmpty().withMessage('Password is required')
];

// Error handling middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  signupValidation,
  loginValidation,
  validate
};
