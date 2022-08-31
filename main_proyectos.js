document.getElementById('Opciones').onclick = function () {
    let radios = document.getElementsByClassName("btn_scn");
    let selected = Array.from(radios).find(radio => radio.checked);

    const Chose = document.getElementById("sel_pyt")
    console.log(Chose);
    switch (selected.value) {
        case "0": {
            document.getElementById("sel_pyt").innerHTML = '<option value="PD">Selecciona el proyecto</option><option value="aki">¿Quien es este animal?</option><option value="tienda">Gestor de tienda</option><option value="carros">Análisis de automoviles</option><option value="consultorio">Base de datos de consultorio</option><option value="videojuegos">Metodologia IDEA</option><option value="CV">Pagina Web personal</option>';
            
            break;
        }
        case "1": {
            document.getElementById("sel_pyt").innerHTML = '<option value="PD">Selecciona el proyecto</option><option value="aki">¿Quien es este animal?</option><option value="tienda">Gestor de tienda</option>'
            break;
        }
        case "2": {
            document.getElementById("sel_pyt").innerHTML = '<option value="PD">Selecciona el proyecto</option><option value="CV">Pagina Web personal</option>'
            break;
        }
        case "3": {
            document.getElementById("sel_pyt").innerHTML = '<option value="PD">Selecciona el proyecto</option><option value="consultorio">Base de datos de consultorio</option>'
            break;
        }
        case "4": {
            document.getElementById("sel_pyt").innerHTML = '<option value="404">En un futuro proximo</option>'
            break;
        }
        case "5": {
            document.getElementById("sel_pyt").innerHTML = '<option value="PD">Selecciona el proyecto</option><option value="carros">Análisis de automoviles</option>'
            break;
        }
        case "6": {
            document.getElementById("sel_pyt").innerHTML = '<option value="PD">Selecciona el proyecto</option><option value="videojuegos">Metodología IDEA</option>'
            break;
        }
        case "7": {
            document.getElementById("sel_pyt").innerHTML = '<option value="PD">Selecciona el proyecto</option><option value="videojuegos">Metodología IDEA</option>'
            break;
        }
        case "8": {
            document.getElementById("sel_pyt").innerHTML = '<option value="404">En un futuro proximo</option>'
            break;
        }
        default:
            document.getElementById("sel_pyt").innerHTML = '<option value="404">En un futuro proximo</option>'
            break;
    }
}
function despliega() {
    let muestrapantalla = document.getElementById("sel_pyt").value;
    console.log(muestrapantalla)//Variable de control.
    switch (muestrapantalla) {
        case "aki": {
            document.getElementById("scn").src="Proyectos/pyt_back_aki.html";
            break;
        }
        case "tienda": {
            document.getElementById("scn").src="Proyectos/pyt_back_tienda.html";
            break;
        }
        case "carros": {
            document.getElementById("scn").src="Proyectos/pyt_data_carros.html";
            break;
        }
        case "consultorio": {
            document.getElementById("scn").src="Proyectos/pyt_database_consultorio.html";
            break;
        }
        case "videojuegos": {
            document.getElementById("scn").src="Proyectos/pyt_pm_videojuegos.html";
            break;
        }
        case "CV": {
            document.getElementById("scn").src="Proyectos/pyt_front_CV.html";
            break;
        }
        default:{
            document.getElementById("scn").src="Proyectos/pyt_error.html";
            break;}
    }
    //document.getElementById("demo").innerHTML = "You selected: " + x;

  }