function repeat(what = String, times = Number) {
    for (let REPEAT_FUNCTION_FOR_I = 0; REPEAT_FUNCTION_FOR_I < times; REPEAT_FUNCTION_FOR_I++) {
        eval(what);
    };
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://json.geoiplookup.io/").then(fetchResponse=>{fetchResponse.blob().then(body=>{body.text().then(data => {
        data = JSON.parse(data);
        document.querySelector("#IPv6 > code").textContent = data.ip;
        document.querySelector("#ISP > code").textContent = data.isp;
        document.querySelector("#ORG > code").textContent = data.org;
        document.querySelector("#continent > #name").textContent = data.continent_name;
        document.querySelector("#continent > #code").textContent = data.continent_code;
        document.querySelector("#country > #name").textContent = data.country_name;
        document.querySelector("#country > #code").textContent = data.country_code;
        document.querySelector("#region > code").textContent = data.region;
        document.querySelector("#city > code").textContent = data.district;
        document.querySelector("#currency > #name").textContent = data.currency_name;
        document.querySelector("#currency > #code").textContent = data.currency_code;
        document.querySelector("#currency > #converter").title = `Converter (USD to ${data.currency_code})`;
    });});});
    fetch("https://www.geoplugin.net/json.gp").then(fetchResponse=>{fetchResponse.blob().then(body=>{body.text().then(data => {
        data = JSON.parse(data);
        document.querySelector("#IPv4 > code").textContent = data.geoplugin_request;
        document.querySelector("#currency > #symbol").textContent = data.geoplugin_currencySymbol;
        document.querySelector("#currency > #symbol").title = `Symbol (${data.geoplugin_currencySymbol_UTF8})`;
        document.querySelector("#currency > #converter").textContent = data.geoplugin_currencyConverter;
    });});});
    
    document.querySelector("div#alt > details#theme button").onclick = () => {
        if (document.body.className == "theme_dark") document.body.className = "";
        else document.body.className = "theme_dark";
    };
});
