//USING FETCH() FUNCTION

// const weatherApi = async () => {
//     try {
//         const res = await fetch("https://api.weatherapi.com/v1/forecast.json?key=a2dd90c2154c446abb2171555221502&q=LA&days=1&aqi=no&alerts=no");
//         console.log(res);
//         const data = await res.json();//res.json() returns a promise as well so awaiting till resolved
//         console.log(data.location.name + " has " + data.current.condition.text +  "weather today.");
//     } catch(e) {
//         console.log("ERROR!", e);
//     }
    
// }


//USING AXIOS METHOD -> DOESN'T REQUIRE ADDITION res.json() STEP

const weatherForecastApi = async () => {
    try {
        const res = await axios.get("https://api.weatherapi.com/v1/forecast.json?key=a2dd90c2154c446abb2171555221502&q=LA&days=1&aqi=no&alerts=no");
        console.log(res.data.location.name + " has " + res.data.current.condition.text +  "weather today.");
    } catch(e) {
        console.log("ERROR!!!", e);
    }
}