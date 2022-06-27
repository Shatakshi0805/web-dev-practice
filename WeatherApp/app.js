

let lati, lon;
const weatherDisplayBox = document.querySelector('.weather-display');
const cityName = document.querySelector("#inputVal");

let map, infoWindow;

// navigator.geolocation.getCurrentPosition

const btn = document.querySelector("button");
// console.log(btn);
btn.addEventListener('click', (e) => {
    e.preventDefault();
    getData();
});

// console.log(cityName.value)/\;
//first api gives value of latitude and longitude to be used in second api that is weather api for 
//getting weather for the searched location

const getData = async () => {
    const resLatLon = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName.value}&appid=08f888211ef932f1ce1cd9e5d4123e5e`)
    .then(response => response.json())
    .then(data => {
      const latitude = data[0].lat;
      const longitude = data[0].lon;
      
      console.log(latitude, longitude);
      return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=08f888211ef932f1ce1cd9e5d4123e5e`)

    })
    .then(response => response.json())
    .then(r => {
      console.log(r);
      console.log(r.weather[0].description);
      const iconCode = r.weather[0].icon;

      weatherDisplayBox.innerHTML = `<h3>
      ${cityName.value} has ${r.weather[0].description} weather today
      <img src = "${"http://openweathermap.org/img/w/" + iconCode + ".png"}" />
      </h3>`;

    //   if (r.weather[0].description.includes("clear sky")) {
    //     document.body.style.backgroundImage = "url('clearSky.jpg')";
    //   } else if (r.weather[0].description.includes("haze")) {
    //     document.body.style.backgroundImage = "url('haze.jpg')";
    //   } else if (r.weather[0].description.includes("rain")) {
    //     document.body.style.backgroundImage = "url('rain2.jpg')";
    //   } else if (r.weather[0].description.includes("clouds")) {
    //     document.body.style.backgroundImage = "url('Scattered-clouds.gif')";
    //   }
    });
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



