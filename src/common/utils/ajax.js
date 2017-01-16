/* Libs */
import q from 'q';
/* --- Libs */


function httpPost(url, params, authHeaders) {
  var deferred = q.defer();

  var httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', url, true);
  httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  if(typeof authHeaders !== 'undefined') {
    httpRequest.setRequestHeader("authorization", authHeaders.token);
  }
  httpRequest.onload = function () {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
          deferred.resolve(httpRequest.responseText);
      } else if (httpRequest.status === 403) {
          deferred.reject(new Error(httpRequest.responseText));
      }
  };

  var parsedParams  = Object.keys(params).map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
    }).join('&');

  httpRequest.send(parsedParams);

  return deferred.promise;
}

function httpGetAsync(theUrl, params, authHeaders) {
    var deferred = q.defer();
    var httpRequest = new XMLHttpRequest();

    httpRequest.open("GET", theUrl, true); // true for asynchronous
    httpRequest.setRequestHeader("authorization", authHeaders.token || '', false);

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
          deferred.resolve(httpRequest.responseText);
        } else if (httpRequest.status === 403) {
          deferred.reject(httpRequest.responseText);
        }
    }

    httpRequest.send(null);

    return deferred.promise;
}

export default {
  post: httpPost,
  get:  httpGetAsync
}
