const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 5.47
const bitcoin = 147462.25
const libraEsterlina = 6.30
const francoSuiço = 5.65

const convertValues = () => {
  const inputReais = document.getElementById("input-real").value
  const realValueText = document.getElementById("real-value-test")
  const currencyValueText = document.getElementById("currency-value-test")

  realValueText.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais)

  if (select.value === "US$ Dólar Americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar)
  }

  if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro)
  }
  if (select.value === "₿ Bitcoin") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(inputReais / bitcoin)
  }
  if (select.value === "£ Libra Esterlina") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputReais / libraEsterlina)
  }
  if (select.value === "CHF Franco Suiço") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-CH", {
      style: "currency",
      currency: "CHF",
    }).format(inputReais / francoSuiço)
  }
}

changecurrency = () => {
  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.getElementById("currency-img")

  if (select.value === "US$ Dólar Americano") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImg.src = "./images/dolar.png"
  }
  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./images/euro.png"
  }
  if(select.value === "₿ Bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "./images/bitcoin.png"
  }
  if(select.value === "£ Libra Esterlina") {
    currencyName.innerHTML = "Libra Esterlina"
    currencyImg.src = "./images/libra-esterlina.png"
    currencyImg.width = 44;
    currencyImg.height = 44;
  }
  if(select.value === "CHF Franco Suiço") {
    currencyName.innerHTML = "Franco Suiço"
    currencyImg.src = "./images/franco-suiço.png"
    currencyImg.width = 44;
    currencyImg.height = 44;
  }
  if(select.value === "¥ Iene Japonês") {
    currencyName.innerHTML = "Iene Japonês"
    currencyImg.src = "./images/japao.png"
    currencyImg.width = 44;
    currencyImg.height = 44;
  }
  convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changecurrency)
