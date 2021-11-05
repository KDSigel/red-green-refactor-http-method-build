const getMethod = (request) => {
  const [method] = request.split(' /');
  return method;
};
    
module.exports = getMethod;
