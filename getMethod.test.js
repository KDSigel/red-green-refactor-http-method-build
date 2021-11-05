const getMethod = require ('./getMethod');

describe('getMethod', () => {

  test('takes an HTTP request and returns the method', async() => {
    const actual = getMethod(`GET / HTTP/1.1
Host: example.com
Accept-Language: us-en`);
    expect(actual).toEqual('GET');
  });

  test('takes an HTTP request and returns the method', async() => {
    const actual = getMethod(`DELETE / HTTP/1.1
Host: example.com
Accept-Language: us-en`);
    expect(actual).toEqual('DELETE');
  });

});
