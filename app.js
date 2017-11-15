var esquema = "";

function calcular() {
  var monto = document.getElementById("monto").nodeValue
  var periodo = document.getElementById("periodo").nodeValue
  var interes = document.getElementById("tasa-interes").nodeValue
  switch (esquema) {
    case "decreciente":
      function decreciente() {
        var fila = 
        `<tr>
          <td>$${i}</td>
          <td>$${inicial}</td>
          <td>$${amortizacion}</td>
          <td>$${interes}</td>
          <td>$${pago}</td>
          <td>$${final}</td>
        </tr>`
      }
      break;
    case "creciente":
      function creciente() {

      }
      break;
    case "bullet":
      function bullet() {

      }
      break;
    case "igual":
      function igual() {

      }
      break;

    default:
      break;
  }
}

function cambiarMain(info){
  if(info=='fundamentacion'){
    document.getElementById('portada').style.display="none";
    document.getElementById("fundamentacion").style.display="block";
  } else {
    document.getElementById('portada').style.display="flex";
    document.getElementById('fundamentacion').style.display="none";
  }
}