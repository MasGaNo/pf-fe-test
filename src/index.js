import "./styles.css"
import Api from "./Api.js"
import Item from "./item.js"

var startApp = function(rootElement) {
  var appApi = new Api("https://api.example.org/")
  var listItemElements = rootElement.querySelectorAll("ul li")

  for (var i = 0; i < listItemElements.length; i++) {
    var listItemElement = listItemElements[i]

    listItemElement.addEventListener("click", function(e) {
      appApi.request("v1/item/" + e.target.dataset.id, function(response) {
        var item = new Item(
          response.body.data.id,
          response.body.data.attributes.label,
          response.body.data.attributes.description,
          response.body.data.link
        )

        var contentContainer = rootElement.querySelector(
          '[data-id="contentContainer"]'
        )
        var contentContainerTitle = contentContainer.querySelector(
          '[data-id="contentContainerTitle"]'
        )
        var contentContainerSummary = contentContainer.querySelector(
          '[data-id="contentContainerSummary"]'
        )
        var contentContainerLink = contentContainer.querySelector(
          '[data-id="contentContainerLink"]'
        )

        contentContainerTitle.textContent = item.labelId
        contentContainerSummary.textContent = item.getSummary()
        contentContainerLink.href = item.link
      })
    })
  }
}

startApp(document.getElementById("app"))
