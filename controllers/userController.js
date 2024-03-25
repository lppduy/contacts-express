//@desc Register a user
//@route POST /api/users/register
//@access Public
exports.registerUser = (req, res, next) => {
  res.json({ msg: 'Login user' });
}

//@desc Login a user
//@route POST /api/users/login
//@access Public
exports.loginUser = (req, res, next) => {
  res.json({ msg: 'Login user' });
}

//@desc Get current user
//@route POST /api/users/current

exports.getCurrentUser = (req, res, next) => {
  res.json({ msg: 'Current user information' });
}