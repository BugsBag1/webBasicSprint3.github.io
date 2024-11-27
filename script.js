function select_currency(){
    const buyUSD = 429
    const sellUSD = 431
    const buyEUR = 507
    const sellEUR = 509
    let selectElement = document.getElementById("select_currency")
    let selectValue = selectElement.value;
    let convertPrice = parseFloat(document.getElementById("convertPrice").value) || 0;
    let input_kzt = document.getElementById("input_kzt")
    let input_usd = document.getElementById("input_usd")
    let input_eur = document.getElementById("input_eur")
    if(selectValue == "USD"){
        let priceKZT = convertPrice * buyUSD
        let priceEUR = (convertPrice * buyUSD) / sellEUR
        input_kzt.value = priceKZT.toFixed(2)
        input_eur.value = priceEUR.toFixed(2)
        input_usd.value = 0
    } else if (selectValue == "KZT") {
        let priceUSD = convertPrice / sellUSD
        let priceEUR = convertPrice / sellEUR
        input_kzt.value = 0
        input_eur.value = priceEUR.toFixed(2)
        input_usd.value = priceUSD.toFixed(2)
    } else if (selectValue == "EUR") {
        let priceKZT = convertPrice * buyEUR
        let priceUSD = (convertPrice * buyEUR) / sellUSD
        input_kzt.value = priceKZT.toFixed(2)
        input_usd.value = priceUSD.toFixed(2)
        input_eur.value = 0
    }
        
}