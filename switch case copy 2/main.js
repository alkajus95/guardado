let rol = prompt("Pon tu rol").toLowerCase();
switch (rol) {
    case "administrador":
        alert("Acceso completo como administrador");
        break;
    case "miembro": {
        let nivel = prompt("Inserta tu nivel de acceso").toLowerCase();
        switch (nivel) {
            case "basico":
                alert("Acceso básico para miembros");
                break;
            case "intermedio":
                alert("Acceso intermedio para miembros");
                break;
            case "avanzado":
                alert("Acceso avanzado para miembros");
                break;
            default:
                alert("Inserta un nivel de acceso válido");
        }
    }
    break;
    default:
        alert("Rol no conocido");
}
