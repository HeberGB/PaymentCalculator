var esquema = "";
var resultados = []

function calcular(esquema = document.getElementById("esquema").value) {
  console.log(esquema)
  var monto = parseFloat(document.getElementById("monto").value)
  var periodo = parseInt(document.getElementById("periodo").value)
  var tasa = ((parseFloat(document.getElementById("tasa-interes").value) / 100)*30)/360
  switch (esquema) {
    case "decreciente":
      var resultadoD = [0,0,0]
      return decreciente()

      function decreciente() {
        var final = ""
        var inicial = monto
        var amortizacion = monto / periodo
        var tabla = ''
        var encabezado =
        `<tr class="none">
          <th>No. de<br>Pagos</th>
          <th>Capital Inicial</th>
          <th>Amortización</th>
          <th>Interes</th>
          <th>Pago</th>
          <th>Capital Final</th>
        </tr>`
        for (let i = 0; i < periodo; i++) {
          var interes = inicial * tasa
          var pago = amortizacion + interes
          var faltante = inicial - amortizacion
          if (faltante <= 0) faltante = 0
          var fila =
            `<tr>
            <td>${i+1}</td>
            <td>$${inicial.toFixed(2)}</td>
            <td>$${amortizacion.toFixed(2)}</td>
            <td>$${interes.toFixed(2)}</td>
            <td>$${pago.toFixed(2)}</td>
            <td>$${faltante.toFixed(2)}</td>
          </tr>`
          final =
            `${final}
          ${fila}`
          resultadoD[0]+=interes;
          resultadoD[1]+=amortizacion;
          resultadoD[2]+=pago;
          inicial = faltante
        }
        resultados.push(resultadoD)
        return `<table class="pagos" id="decreciente">
        ${encabezado}
        ${final}
        </table>`
      }
      break;
    case "creciente":
      var resultadoC = [0,0,0]
      return creciente()

      function creciente() {
        var final = ""
        var inicial = monto
        var tabla = ''
        var encabezado =
        `<tr class="none">
          <th>No. de<br>Pagos</th>
          <th>Capital Inicial</th>
          <th>Amortización</th>
          <th>Interes</th>
          <th>Pago</th>
          <th>Capital Final</th>
        </tr>`
        for (let i = 0; i < periodo; i++) {
          var interes = inicial * tasa
          var pago = (monto / periodo) * Math.pow((1 + tasa), (i + 1))
          var amortizacion = pago - interes
          var faltante = inicial - amortizacion
          if (faltante <= 0) faltante = 0
          var fila =
          `<tr>
          <td>${i+1}</td>
          <td>$${inicial.toFixed(2)}</td>
          <td>$${amortizacion.toFixed(2)}</td>
          <td>$${interes.toFixed(2)}</td>
          <td>$${pago.toFixed(2)}</td>
          <td>$${faltante.toFixed(2)}</td>
          </tr>`
          final =
          `${final}
          ${fila}`
          resultadoC[0]+=interes
          resultadoC[1]+=amortizacion
          resultadoC[2]+=pago
          inicial = faltante
        }
        resultados.push(resultadoC)
        return `<table class="pagos" id="decreciente">
        ${encabezado}
        ${final}
        </table>`
      }
      break;
    case "bullet":
      var resultadoB = [0, 0, 0]
      return bullet()

      function bullet() {
        var final = ""
        var inicial = monto
        var amortizacion = 0
        var tabla = ''
        var encabezado =
        `<tr class="none">
          <th>No. de<br>Pagos</th>
          <th>Capital Inicial</th>
          <th>Amortización</th>
          <th>Interes</th>
          <th>Pago</th>
          <th>Capital Final</th>
        </tr>`
        for (let i = 0; i < periodo; i++) {
          if (i == periodo - 1) amortizacion = inicial
          var interes = inicial * tasa
          var pago = amortizacion + interes
          var faltante = inicial - amortizacion
          if (faltante <= 0) faltante = 0
          var fila =
          `<tr>
          <td>${i+1}</td>
          <td>$${inicial.toFixed(2)}</td>
          <td>$${amortizacion.toFixed(2)}</td>
          <td>$${interes.toFixed(2)}</td>
          <td>$${pago.toFixed(2)}</td>
          <td>$${faltante.toFixed(2)}</td>
          </tr>`
          final =
          `${final}
          ${fila}`
          resultadoB[0]+=interes
          resultadoB[1]+=amortizacion
          resultadoB[2]+=pago
          inicial = faltante
        }
        resultados.push(resultadoB)
        return `<table class="pagos" id="decreciente">
        ${encabezado}
        ${final}
        </table>`
      }
      break;
    case "igual":
      var resultadoI = [0, 0, 0]
      return igual()

      function igual() {
        var final = ""
        var inicial = monto
        var tabla = ''
        var pago = monto*(tasa/(1-Math.pow((1+tasa),-periodo)))
        var encabezado =
        `<tr class="none">
          <th>No. de<br>Pagos</th>
          <th>Capital Inicial</th>
          <th>Amortización</th>
          <th>Interes</th>
          <th>Pago</th>
          <th>Capital Final</th>
        </tr>`
        for (let i = 0; i < periodo; i++) {
          var interes = inicial * tasa
          var amortizacion = pago - interes
          var faltante = inicial - amortizacion
          if (faltante <= 0) faltante = 0
          var fila =
          `<tr>
          <td>${i+1}</td>
          <td>$${inicial.toFixed(2)}</td>
          <td>$${amortizacion.toFixed(2)}</td>
          <td>$${interes.toFixed(2)}</td>
          <td>$${pago.toFixed(2)}</td>
          <td>$${faltante.toFixed(2)}</td>
          </tr>`
          final =
          `${final}
          ${fila}`
          resultadoI[0]+=interes
          resultadoI[1]+=amortizacion
          resultadoI[2]+=pago
          inicial = faltante
        }
        resultados.push(resultadoI)
        return `<table class="pagos" id="decreciente">
            ${encabezado}
            ${final}
            </table>`
      }

      break;

    default:
      break;
  }
}

function resumen() {
  resultados = []
  calcular('decreciente')
  calcular('creciente')
  calcular('bullet')
  calcular('igual')
  var nombres = [
    'Esquema de amortizaciones <br>iguales a pagos decrecientes',
    'Esquema de pagos crecientes',
    'Esquema tipo bullet',
    'Pagos iguales'
  ]
  var encabezado = `<tr class="none">
  <th>Esquema</th>
  <th>Pago interes</th>
  <th>Pago a capital</th>
  <th>Total a pagar</th>
  <th>Plazo</th>
  </tr>`
  var filas = ''
  for(let i = 0 ; i<4 ; i++){
    filas += `<tr>
    <td>${nombres[i]}</td>
    <td>$${resultados[i][0].toFixed(2)}</td>
    <td>$${resultados[i][1].toFixed(2)}</td>
    <td>$${resultados[i][2].toFixed(2)}</td>
    <td>${parseInt(document.getElementById("periodo").value)}</td>
  </tr>`
  }
  console.log(resultados[0])
  document.getElementById('resumen').innerHTML = `<table>
  ${encabezado}
  ${filas}
  </table>`
}

function construir() {
  document.getElementById('resultado').innerHTML = calcular()
}

function cambiarMain(info) {
  if (info == 'fundamentacion') {
    document.getElementById('portada').style.display = "none";
    document.getElementById("fundamentacion").style.display = "block";
  } else {
    document.getElementById('portada').style.display = "flex";
    document.getElementById('fundamentacion').style.display = "none";
  }
}