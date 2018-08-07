let food = document.getElementById('search-food');
let search = document.getElementById('search');
let imag = document.getElementById('imagenes');
let win = document.getElementById('win');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let info = document.getElementById('info');

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
    imag.innerHTML = `<a href="#win" id="myBtn"> <img src="../imagenes/italiana.jpg" alt="italiana" id="imag-food"> </a>`;
    info.innerHTML =  `<img src="../imagenes/italiana.jpg" alt="italiana" id="imag-food">
                       <p>Sitio:${datos.italiana.nombre}</p>
                       <p>Direccion:${datos.italiana.direccion}</p>
                       <p>Horario: ${datos.italiana.horario}</p>
                       <p>Telefono: ${datos.italiana.telefono}</p>
                       <p>Reserva: ${datos.italiana.reserva}</p>
                       <p>Precio: ${datos.italiana.precio}</p>`;
  } else if (searchFood === 'japonesa' || searchFood === 'Japonesa') {
    imag.innerHTML = `<a href="#win" id="myBtn"> <img src="../imagenes/japonesa.jpg" alt="japonesa" id="imag-food"> </a>`;
    info.innerHTML =  `<img src="../imagenes/japonesa.jpg" alt="japonesa" id="imag-food">
                       <p>Sitio:${datos.japonesa.nombre}</p>
                       <p>Direccion:${datos.japonesa.direccion}</p>
                       <p>Horario: ${datos.japonesa.horario}</p>
                       <p>Telefono: ${datos.japonesa.telefono}</p>
                       <p>Reserva: ${datos.japonesa.reserva}</p>
                       <p>Precio: ${datos.japonesa.precio}</p>`;

  } else if (searchFood === 'argentina' || searchFood === 'Argentina') {
    imag.innerHTML = `<a href="#win" id="myBtn"> <img src="../imagenes/argentina.jpg" alt="argentina" id="imag-food"> </a>`;
    info.innerHTML =  `<img src="../imagenes/argentina.jpg" alt="argentina" id="imag-food">
                       <p>Sitio:${datos.argentina.nombre}</p>
                       <p>Direccion:${datos.argentina.direccion}</p>
                       <p>Horario: ${datos.argentina.horario}</p>
                       <p>Telefono: ${datos.argentina.telefono}</p>
                       <p>Recervas: ${datos.argentina.reserva}</p>
                       <p>Horario: ${datos.argentina.precio}</p>`;
  } else if (searchFood === 'china' || searchFood === 'China') {
    imag.innerHTML = `<a href="#win" id="myBtn"> <img src="../imagenes/china.jpg" alt="china" id="imag-food"> </a>`;
    info.innerHTML =  `<img src="../imagenes/china.jpg" alt="china" id="imag-food">
                       <p>Sitio:${datos.china.nombre}</p>
                       <p>Direccion:${datos.china.direccion}</p>
                       <p>Horario: ${datos.china.horario}</p>
                       <p>Horario: ${datos.china.telefono}</p>
                       <p>Horario: ${datos.china.reserva}</p>
                       <p>Horario: ${datos.china.precio}</p>`;
  } else if (searchFood === 'francesa' || searchFood === 'Francesa') {
      imag.innerHTML = `<a href="#win" id="myBtn"> <img src="../imagenes/francesa.jpg" alt="francesa" id="imag-food"> </a>`;
      info.innerHTML =  `<img src="../imagenes/francesa.jpg" alt="francesa" id="imag-food">
                         <p>Sitio:${datos.francesa.nombre}</p>
                         <p>Direccion:${datos.francesa.direccion}</p>
    <p>Horario: ${datos.francesa.horario}</p>
    <p>Horario: ${datos.francesa.telefono}</p>
    <p>Horario: ${datos.francesa.reserva}</p>
    <p>Horario: ${datos.francesa.precio}</p>`;
  } else if (searchFood === 'india' || searchFood === 'India') {
    imag.innerHTML = `<a href="#win" id="myBtn"> <img src="../imagenes/india.jpg" alt="india" id="imag-food"> </a>`;

  } else if (searchFood === 'mexicana' || searchFood === 'Mexicana') {
    imag.innerHTML = `<a href="#win" id="myBtn"> <img src="../imagenes/mexicana.jpg" alt="mexicana" id="imag-food"> </a>`
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

