const axios = require('axios');


// const div = document.querySelector('#weather-display');

let lati, lon;
const weatherDisplayBox = document.querySelector('.weather-display');
const cityName = document.querySelector("#inputVal");

let map, infoWindow;

// navigator.geolocation.getCurrentPosition

const btn = document.querySelector("button");
// console.log(btn);
btn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(cityName.value);
    // let ele = document.createElement('h3');
    // let locationWeather = ele.append(cityName.value);
    // document.body.appendChild(locationWeather)
    
    // let ele = document.createElement('h3');
    // ele.innerText = locationWeatherData;
    const cityName = document.querySelector("#inputVal");
    let locationWeatherData = getData();
    let weatherDisplayBox = document.querySelector('#weather-display');
    weatherDisplayBox.append(locationWeatherData);
});

// console.log(cityName.value)/\;
//first api gives value of latitude and longitude to be used in second api that is weather api for 
//getting weather for the searched location

const getData = async () => {
    const resLatLon = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName.value}&appid=08f888211ef932f1ce1cd9e5d4123e5e`);
    
     lati = resLatLon.data[0].lat;//initialized already at top
     lon = resLatLon.data[0].lon;//initialized already at top
    console.log(lati, lon);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${lon}&appid=08f888211ef932f1ce1cd9e5d4123e5e`)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (e) {
      console.log(e)
    })
    
    console.log(actualRes.data.weather[0].description);
}


// console.log(lati, lon);
// function initMap() {
    
//     const location = { lat: lati, lng: lon };
//     console.log(location);
    
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,  
//       center: location,
//     });
//     console.log(map);
    
//     const marker = new google.maps.Marker({
//       position: location,
//       map: map,
//     });
//   }

//   initMap();

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lati, lng: lon },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}



