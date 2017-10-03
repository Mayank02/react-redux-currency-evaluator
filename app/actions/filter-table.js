export default function filterTable(currency, cb) {
    const currentTime = Math.round(new Date().getTime() / 1000);
    const yesterdayTime = currentTime - (24 * 3600);
    const url = `https://poloniex.com/public?command=returnChartData&currencyPair=BTC_${currency}&start=${yesterdayTime}&end=${currentTime}&period=300`;
    fetch(url, {
        method: 'GET',
    }).then(response => response.json()).then((data) => {
        cb(data);
    });
}
