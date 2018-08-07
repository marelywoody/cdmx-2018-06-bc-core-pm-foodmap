let food = document.getElementById('search-food');
let search = document.getElementById('search');
let imag = document.getElementById('imagenes');
// search1.addEventListener('click', event => {
//   let search2 = search1.value;
// });
// let map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 19.4978, lng: -99.1269},
//     zoom: 15
//   });
// };
search.addEventListener('click', event => {
  let searchFood = food.value;
  if (searchFood === 'italiana' || searchFood === 'Italiana') {
    imag.innerHTML = `<img src="../imagenes/italiana.jpg" alt="italiana" id="imag-food">`;
  } else if (searchFood === 'japonesa' || searchFood === 'Japonesa') {
    imag.innerHTML = `<img src="../imagenes/japonesa.jpg" alt="italiana" id="imag-food">`;
  } else if (searchFood === 'argentina' || searchFood === 'Argentina') {
    imag.innerHTML = `<img src="../imagenes/argentina.jpg" alt="italiana" id="imag-food">`;
  } else if (searchFood === 'china' || searchFood === 'China') {
    imag.innerHTML = `<img src="../imagenes/china.jpg" alt="italiana" id="imag-food">`;
  } else if (searchFood === 'francesa' || searchFood === 'Francesa') {
    imag.innerHTML = `<img src="../imagenes/francesa.jpg" alt="italiana" id="imag-food">`;
  } else if (searchFood === 'india' || searchFood === 'India') {
    imag.innerHTML = `<img src="../imagenes/india.jpg" alt="italiana" id="imag-food">`;
  } else {
    alert('Comida no enontrada');
  }
});