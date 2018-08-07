let food = document.getElementById('search-food');
let search = document.getElementById('search');
let imag = document.getElementById('imagenes');
let win = document.getElementById('win');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.4978, lng: -99.1269},
    zoom: 15
  });
};
search.addEventListener('click', event => {
  let searchFood = food.value;
  if (searchFood === 'italiana' || searchFood === 'Italiana') {
    imag.innerHTML = `<a href="#win" id="myBtn"> <img src="../imagenes/italiana.jpg" alt="italiana" id="imag-food"> </a>`;

  } else if (searchFood === 'japonesa' || searchFood === 'Japonesa') {
    imag.innerHTML = `<a href="#win" id="myBtn"> <img src="../imagenes/japonesa.jpg" alt="italiana" id="imag-food"> </a>`;

  } else if (searchFood === 'argentina' || searchFood === 'Argentina') {
    imag.innerHTML = `<a href="#win" id="myBtn"> <img src="../imagenes/argentina.jpg" alt="italiana" id="imag-food"> </a>`;

  } else if (searchFood === 'china' || searchFood === 'China') {
    imag.innerHTML = `<a href="#win" id="myBtn"> <img src="../imagenes/china.jpg" alt="italiana" id="imag-food"> </a>`;

  } else if (searchFood === 'francesa' || searchFood === 'Francesa') {
    imag.innerHTML = `<a href="#win" id="myBtn"> <img src="../imagenes/francesa.jpg" alt="italiana" id="imag-food"> </a>`;

  } else if (searchFood === 'india' || searchFood === 'India') {
    imag.innerHTML = `<a href="#win" id="myBtn"> <img src="../imagenes/india.jpg" alt="italiana" id="imag-food"> </a>`;

  } else {
    alert('Comida no enontrada');
  }
});

btn.onclick = function (){
  win.style.display = "block";
}
span.onclick = function() {
  win.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == win) {
      win.style.display = "none";
  }
}

