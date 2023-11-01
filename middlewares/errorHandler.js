const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  //Displaying error depending on error type and status code

  switch (statusCode) {
    case 400:
      res.json({
        title: 'Validation Failed!',
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case 404:
      res.json({
        title: 'Not Found',
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      break;
  }
};

module.exports = errorHandler;
