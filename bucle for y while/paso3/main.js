let numero = Number(prompt ("Ingrese un número"))
for (i=1; i<=10; i++){
document.getElementById("resultado").innerText+= numero * i+ " | "
document.getElementById("resultado").style.fontSize="40px"
}