let map;

function initMap() {
  const location = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }; // Replace with the latitude and longitude of your location
  map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 8, // Adjust the zoom level as needed
  });

  new google.maps.Marker({
    position: location,
    map,
    title: "Your Location",
  });
}
