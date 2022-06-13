// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 59.334591, lng: 18.06324 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    // icon: "../icons/buttonx32.png",
  });
}
