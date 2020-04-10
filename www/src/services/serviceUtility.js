const AUTH_TOKEN = function() {
  const auth = localStorage.getItem('auth');
  return `Bearer ${auth.access_token}`
};

const URI = process.env['VUE_APP_API_ENPOINT'];

const parseResponse = (req) => {
  var response = req.response;

  if (response && typeof response === 'string') {
    response = JSON.parse(req.response);
  }

  return response;
}

const querifyParams = (params={}, path='') => {
  // Remove null values 
  params = Object.assign({}, params);
  
  let keys = Object.keys(params);

  if (!keys.length) {
    return path;
  }

  var queryString = keys.map(key => key + '=' + params[key]).join('&');
  return path.concat('?').concat(queryString);
}

const readyStates = {
  UNSENT: 0,
  OPENED: 1,
  HEADERS_RECEIVED: 2,
  LOADING: 3,
  DONE: 4
}

export default {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	PATCH: 'PATCH',
	DELETE: 'DELETE',
	/**
	 * Make an API call using this method.
	 * 
	 * @param method the request method to send ('GET', 'POST', etc), see METHOD object
	 * @param path the API endpoint path to request, url to api endpoint is auto configured using node env '/my/products/'
	 * @param eventListener eventListener key -> value pair object, where key is the event and value is the function to invoke ('load', 'error', 'abort', 'progress')
	 */
	callAPI: function(method, path, payload, options={}) {
      var req = new XMLHttpRequest();
      //default content type to application/json unless otherwise specified
      var contentType = options && options.contentType ? options.contentType : 'application/json';

      path = querifyParams(options.params, path);

      return new Promise((resolve, reject) => {

        req.onreadystatechange = function() {
          if (req.readyState === readyStates.DONE) {
            if (req.status >= 200 && req.status < 400) {
              resolve(parseResponse(req));
            } else {
              reject({
                status: req.status,
                message: req.response
              });
            }
          }
        }

        req.open(method, `${URI}${path}`, true);
        // req.setRequestHeader('Authorization', AUTH_TOKEN());

        switch(contentType) {
          case 'multipart/form-data':
            req.send(payload);
            break;
          default: 
            req.setRequestHeader('Content-Type', contentType)
            req.send(JSON.stringify(payload) || '');
        }
      });
	}
}