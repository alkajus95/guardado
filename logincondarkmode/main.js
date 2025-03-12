function mostrarDatos(){
    event.preventDefault()
    let nombre=document.getElementById("nombre").value
    let Apellido=document.getElementById("apellido").value
    let username=document.getElementById("username").value
    let mail=document.getElementById("mail").value
    let password=document.getElementById("password").value
    document.getElementById("parrafo").innerText = `
        nombre: ${nombre}
        Apellido: ${Apellido}
        username: ${username}
        mail: ${mail}
        password: ${password}`;
}
function modoOscuro(){
    document.body.classList.toggle("dark-mode");

}
