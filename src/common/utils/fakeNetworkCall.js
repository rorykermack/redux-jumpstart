export function fakeNetworkCall(url, params, delay) {
  return {
    then: function(callback) {
      console.log('Fake Network call:', url, params);
      setTimeout(() => {
        callback('{"username": "fakeUser123","token": "123123123123123", "expires": "never"}')
      }, delay || 1000)
    }
  };
}
