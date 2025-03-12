function btn(){
    return
}
function btn1(event){
    event.preventDefault()
    const numero1 = parseInt(document.getElementById('numero').value);
    if(numero1 == 0){
        document.body.style.backgroundColor= 'blue';
        document.getElementById('resultado').innerHTML = ' el número escogido es 0'
    }
    else if (numero1 < 0){
        document.body.style.backgroundColor= 'red';
        document.getElementById('resultado').innerHTML = ' el numero escogido es negativo'
    }
    else{
        document.body.style.backgroundColor= 'lime';
        document.getElementById('resultado').innerHTML = ' el número escogido es positivo'
    }
}