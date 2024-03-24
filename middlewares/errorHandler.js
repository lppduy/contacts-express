const { CONSTANTS } = require('../constants');

exports.errorHandler = async (err, req, res, next) => {
  // console.log(err.message);
  console.log('>>>>>>>>>>', res.statusCod)
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case CONSTANTS.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack
      });
      break;
    case CONSTANTS.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack
      });
      break;
    case CONSTANTS.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack
      });
      break;
    case CONSTANTS.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack
      });
      break;
    case CONSTANTS.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack
      });
    default:
      console.log('No error handler found')
      break;
  };

};