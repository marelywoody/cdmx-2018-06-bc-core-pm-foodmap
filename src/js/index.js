let search1 = document.getElementById('search-food');

search1.addEventListener('click', event => {
  let search2 = search1.value;
});

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.4978, lng: -99.1269},
    zoom: 15
  });
};