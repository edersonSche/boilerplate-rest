module.exports = {
  // 200
  OK: { status: 200, message: 'OK' },
  CREATED: { status: 201, message: 'Created' },
  NO_CONTENT: { status: 204 },

  // 400
  NOT_FOUND: { status: 400, message: 'Not found' },
  UNAUTHORIZED: { status: 401, message: 'Unauthorized' },
  FORBIDDEN: { status: 403, message: 'Forbidden' },
  ACCESS_DENIED: { status: 403, message: 'Access denied' },

  // 500
  SERVER_ERROR: { status: 500, message: 'Internal server error' }
}
;
