//lado1=prompt("inserte el primer lado del triangulo")
//lado2=prompt("inserte el segundo lado del triangulo")
//lado3=prompt("inserte el tercer lado del triangulo")
//if (lado1==lado2&&lado3==lado1){
//    alert("El triangulo es equilatero")
//}
//else if(lado1==lado2||lado1==lado3||lado3==lado2){
//    alert("El triangulo es isosceles")
//}
//else{
//    alert("el triangulo es escaleno")
//}

const lado1Input = document.getElementById('lado1');
const lado2Input = document.getElementById('lado2');
const lado3Input = document.getElementById('lado3');
const submitButton = document.getElementById('btn');
const resultado = document.getElementById('resultado');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const lado1 = Number(lado1Input.value);
    const lado2 = Number(lado2Input.value);
    const lado3 = Number(lado3Input.value);
    if (lado1 === lado2 && lado3 === lado1) {
        resultado.textContent = 'El triangulo es equilatero';
    } else if (lado1 === lado2 || lado1 === lado3 || lado3 === lado2) {
        resultado.textContent = 'El triangulo es isosceles';
    } else {
        resultado.textContent = 'El triangulo es escaleno';
    }
});
