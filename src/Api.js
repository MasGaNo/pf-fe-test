import '../polyfill/fetch.js';

class ApiBase {
  constructor(base) {
    this.base = base
  }
  
  request(endpoint, onSuccess, onFail) {
    console.log("Making Request to:", this.base + endpoint)

    fetch(endpoint)
      .then(response => response.json())
      .then(onSuccess, onFail);
  }
}

export default ApiBase
