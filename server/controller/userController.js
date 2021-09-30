exports.getUserProfile = (req, res, next) => {
  console.log(req.user);
  req.user.password = undefined;
  res.status(200).json({
    status: 'success',
    data: req.user,
  });
};
