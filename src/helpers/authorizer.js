module.exports = ({ permission, message = '' }) => (req, res, next) => {
  const { permissions } = req;

  if (!permissions || (permissions && permissions.includes(permission))) {
    return next();
  }
  return next({ status: 403, message });
};
