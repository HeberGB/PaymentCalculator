var esquema = "";

function calcular() {
  var monto = parseFloat(document.getElementById("monto").value)
  var periodo = parseInt(document.getElementById("periodo").value)
  var tasa = parseFloat(document.getElementById("tasa-interes").value) / 100
  var esquema = document.getElementById("esquema").value
  switch (esquema) {
    case "decreciente":
      document.getElementById("resultado").innerHTML = decreciente()

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
          inicial = faltante
        }
        return `<table class="pagos" id="decreciente">
        ${encabezado}
        ${final}
        </table>`
      }
      break;
    case "creciente":
      document.getElementById("resultado").innerHTML = creciente()

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
          inicial = faltante
        }
        return `<table class="pagos" id="decreciente">
        ${encabezado}
        ${final}
        </table>`
      }
      break;
    case "bullet":
      document.getElementById("resultado").innerHTML = bullet()

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
          inicial = faltante
        }
        return `<table class="pagos" id="decreciente">
        ${encabezado}
        ${final}
        </table>`
      }
      break;
    case "igual":
      document.getElementById("resultado").innerHTML = igual()

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
          inicial = faltante
        }
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

function cambiarMain(info) {
  if (info == 'fundamentacion') {
    document.getElementById('portada').style.display = "none";
    document.getElementById("fundamentacion").style.display = "block";
  } else {
    document.getElementById('portada').style.display = "flex";
    document.getElementById('fundamentacion').style.display = "none";
  }
}