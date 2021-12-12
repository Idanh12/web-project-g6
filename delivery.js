var clientLatitude;
var clientLongitude;


// get coordinates from the client
function getClientsCoordinates() {
  if ("geolocation" in navigator) {
    // check if geolocation is supported/enabled on current browser
    navigator.geolocation.getCurrentPosition(
      function success(position) {
        // for when getting location is a success
        clientLatitude = position.coords.latitude;
        clientLongitude = position.coords.longitude;
        calcCrow();
      }
      ,
      function error(error_message) {
        // for when getting location results in an error
        console.error('An error has occured while retrieving location', error_message);
      }
    );
  }
  else {
    // geolocation is not supported
    console.log('geolocation is not enabled on this browser');
  }
}

// activate getClientsCoordinates() function
getClientsCoordinates();


//Where OR is living
var sellerLatitude = 32.080628098620025;
var sellerLongitude = 34.81254417393666;


//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrow() {
  var R = 6371; // Radius of the earth in km
  var dLat = toRad(sellerLatitude - clientLatitude);
  var dLon = toRad(sellerLongitude - clientLongitude);
  var lat1 = toRad(clientLatitude);
  var lat2 = toRad(sellerLatitude);

  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  console.log(d);
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
  return Value * Math.PI / 180;
}


function priceByDistance() { // calculates price according to the distance
  let distance = calcCrow();
  var price;
  if (distance <= 2) {
    price = 15;
  }
  else if (distance > 2 & distance <= 5) {
    price = 25;
  }
  else if (distance > 5 & distance <= 10) {
    price = 35;
  }
  else if (distance > 10 & distance <= 15) {
    price = 45;
  }
  else {
    price = "המשלוח אינו זמין לאזור מגוריך, ביכולתך לבחור באפשרות של איסוף עצמי";
  }
  window.alert(price);
  return price;
}