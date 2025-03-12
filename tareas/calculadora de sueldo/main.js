
document.getElementById('calcular').addEventListener('click', function() {
    var horasTrabajadas = document.getElementById('horas').value;
    var sueldoHora = document.getElementById('sueldo').value;
    var horasExtra = document.getElementById('hextra').value;
    var sueldoExtra = document.getElementById('sextra').value;
    var bonosExtra = document.getElementById('bono').value;
    var sueldoNormal = horasTrabajadas * sueldoHora;
    var sueldoMas = horasExtra * sueldoExtra;
    var bonosMas = bonosExtra * 50000;
    var sueldoTotal = parseInt(sueldoNormal + sueldoMas + bonosMas);

    document.getElementById('plata').innerHTML = 'Su sueldo total es: $' + sueldoTotal;
})