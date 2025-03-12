let rol=prompt("pon tu rol").toLowerCase()
switch(rol){
    case "administrador":
    alert ("acceso como administrador");
    break;
    case "miembro":
        let (tiempo)=prompt("cuanto tiempo llevas (años)")
        switch(tiempo){
            case ">1":
                alert("miembros con mas antiguedad")
                break;
                default:
                    alert("miembro nuevo")
        }
        break;
            case"invitado":{
                let (tiempo)=prompt("cuanto tiempo llevas (años)")
        switch(tiempo){
            case ">1":
                alert("invitado recurrente")
                break;
                default:
                    alert("invitado nuevo")
                    }
            }
            break;
            default:
                alert("persona desconocida")
        
        }
