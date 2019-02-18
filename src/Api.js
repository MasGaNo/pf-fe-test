import {getItem} from "../mock/api-item"

class ApiBase {
  constructor(base) {
    this.base = base
  }

  request(endpoint, onSuccess, onFail) {
    console.log("Making Request to:", this.base + endpoint)

    setTimeout(function() {
      var item = getItem(endpoint)

      onSuccess(item)
    }, 1000)
  }
}

export default ApiBase
