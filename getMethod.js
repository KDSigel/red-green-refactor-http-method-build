const getMethod = (request) => {
const requestRows = request.split('\r\n');
const [method] = requestRows[0].split(' /');
      return method;
    };
    
    module.exports = getMethod;