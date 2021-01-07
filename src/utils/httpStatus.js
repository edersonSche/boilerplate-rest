module.exports = {
  // 200
  OK: { status: 200, message: 'OK' },
  CREATED: { status: 201, message: 'Created' },
  NO_CONTENT: { status: 204 },

  // 400
  BAD_REQUEST: { status: 400, message: 'Bad request' },
  UNAUTHORIZED: { status: 401, message: 'Unauthorized' },
  FORBIDDEN: { status: 403, message: 'Forbidden' },
  NOT_FOUND: { status: 404, message: 'Not found' },

  // 500
  SERVER_ERROR: { status: 500, message: 'Internal server error' }
};
