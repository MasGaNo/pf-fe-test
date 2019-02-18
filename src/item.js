var Item = function(id, label, description, link) {
  this.id = id
  this.label = label
  this.description = description
  this.link = link
}

module.exports = Item

Item.prototype.getDescription = function() {
  return "<p>" + this.description + "</p>"
}

Object.defineProperties(Item.prototype, {
  labelId: {
    enumerable: false,
    get: () => {
      return this.id + " " + this.label.toUpperCase()
    }
  },
  id: {
    enumerable: false,
    set: function(value) {
      if (typeof value != "number") {
        throw new TypeError("Expect a number. Received a " + typeof value)
        this.id = value
      }
    }
  }
})
