var Item = function(id, label, description, link) {
  this.id = id
  this.label = label
  this.description = description
  this.link = link
}

module.exports = Item

Item.prototype.getSummary = function() {
  var description = this.description;
  if (description.length > 30) {
    description = description.substr(0, 30);
  }
  var output = "<i>" + description + "</i>"
  return output
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
