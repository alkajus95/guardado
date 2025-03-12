
function sumar() {
    const numero1 = parseInt(document.getElementById('num1').value);
const numero2 = parseInt(document.getElementById('num2').value);

    document.getElementById('resultado').innerHTML = `la suma de ambos numeros es  ${numero1 + numero2}` 
}
function restar() {
    const numero1 = parseInt(document.getElementById('num1').value);
    const numero2 = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = `la resta de ambos numeros es  ${numero1 - numero2}` 
}
function multiplicar() {
    const numero1 = parseInt(document.getElementById('num1').value);
const numero2 = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = `la multiplicacion de ambos numeros es  ${numero1 * numero2}` 
}
function dividir() {
    const numero1 = parseInt(document.getElementById('num1').value);
const numero2 = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = `la division de ambos numeros es  ${numero1 / numero2}` 
}

