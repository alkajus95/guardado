function btn1(event){
    event.preventDefault()
    const numero1 = parseInt(document.getElementById('numero').value);
    if(numero1 >= 18){
        document.body.style.backgroundColor= 'lime';
        document.getElementById('resultado').innerHTML = ' usted es mayor de edad'
        
    }
    else{
        document.body.style.backgroundColor= 'red';
        document.getElementById('resultado').innerHTML = ' usted es menor de edad'
    }
}