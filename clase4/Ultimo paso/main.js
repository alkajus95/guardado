//&& "and"
//|| "or"
//toLocaleLowerCase() ".lower"
//Evaluar si el usuario puede solicitar un préstamo
//1. Comprobar si el usuario es mayor de edad (18 años o más).
//Si no lo es, mostrar mensaje de rechazo y terminar el programa.
//2. Verificar si el usuario tiene ingresos mayores o iguales a $1500:
//• Si cumple este requisito, pasar a evaluar historial crediticio.
//° Si no cumple, verificar si tiene buen historial y empleo fijo para decidir si puede recibir un préstamo más pequeño.
//3. Evaluar el historial crediticio:
//• Si el usuario tiene un buen historial crediticio y sin deudas, aprobar el préstamo sin restricciones.
//• Si tiene historial bueno pero con deudas, aprobarlo con condiciones.
//4. Evaluar el empleo fijo:
//• Si el historial es malo, rechazar o aplicar condiciones más estrictas.
//• Si el usuario tiene empleo fijo, puede obtener mejores condiciones de crédito.
//Si no tiene empleo fijo, aplicar una tasa de interés más alta o rechazar el crédito según el
function modoOscuro(){
    document.body.classList.toggle("dark-mode");

}
function Preguntas(){edad = prompt("ingrese su edad")
edad = parseInt(edad)
if (edad < 18) {
    alert("no puede solicitar un préstamo")
    return
}
else if(edad >= 18) {
ingresos = prompt("ingrese sus ingresos mensuales")
ingresos = parseFloat(ingresos)
if (ingresos >= 1500) {
    empleo = prompt("tienes empleo fijo")
    empleo = empleo.toLocaleLowerCase()
    historial = prompt("tienes buen historial crediticio")
    historial = historial.toLocaleLowerCase()
    if (historial == "si"&& empleo=="si") {
        alert("aprobado con las mejores condiciones")
        }
        else if (historial == "si" && empleo != "si") {
            alert("aprobado con condiciones")
            }
            else if (historial != "si" && empleo == "si") {
                alert("aprobado con condiciones")
            }
              else {
                alert("prestamo rechazado")
              }
    }
    
else if (ingresos < 1500) {
  empleo = prompt("tienes empleo fijo")
    empleo = empleo.toLocaleLowerCase()
    
   historial = prompt("tienes buen historial crediticio")
  historial = historial.toLocaleLowerCase()
    
    if (empleo == "si" && historial == "si") {
       alert("prestamo aprobado con buenas condiciones")
        }
        else if (empleo == "si" && historial != "si") {
          alert("prestamo aprobado con condiciones")
          }
          else if (empleo != "si" && historial != "si") {
            alert("prestamo rechazado")
            }
} 
}   
}