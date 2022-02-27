const cityName = document.querySelector("#inpt");

const btn = document.querySelector("button");
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(cityName.value);
    getData();
})

// console.log(cityName.value)/\;
//first api gives value of latitude and longitude to be used in second api that is weather api for 
//getting weather for the searched location

const getData = async () => {
    const resLatLon = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName.value}&appid=08f888211ef932f1ce1cd9e5d4123e5e`);
    // console.log(resLatLon);
    // console.log(resLatLon.data[0].lat, resLatLon.data[0].lon);
    // const lat = resLatLon.data[0].lat;
    // const lon = resLatLon.data[0].lon;
    const actualRes = await axios(`http://api.openweathermap.org/data/2.5/weather?lat=${resLatLon.data[0].lat}&lon=${resLatLon.data[0].lon``}&appid=08f888211ef932f1ce1cd9e5d4123e5e`);
    console.log(actualRes.data.weather[0].description);
}




