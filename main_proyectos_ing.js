let URLactual = window.location.href;
console.log(URLactual);
switch (URLactual) {
    case "https://yairvalde096.github.io/Pagina-presentacion/Proyectos_ing.html#1": {
        document.getElementById("scn").src = "Proyectos/pyt_back_aki_ing.html";
        break;
    }
    case "https://yairvalde096.github.io/Pagina-presentacion/Proyectos_ing.html#2": {
        document.getElementById("scn").src = "Proyectos/pyt_data_carros_ing.html";;
        break;
    }
    case "https://yairvalde096.github.io/Pagina-presentacion/Proyectos_ing.html#3": {
        document.getElementById("scn").src = "Proyectos/pyt_back_tienda_ing.html";
        break;
    }
    case "https://yairvalde096.github.io/Pagina-presentacion/Proyectos_ing.html#3": {
        document.getElementById("scn").src = "Proyectos/pyt_database_consultorio_ing.html";
        break;
    }
}
document.getElementById('Opciones').onclick = function () {
    let radios = document.getElementsByClassName("btn_scn");
    let selected = Array.from(radios).find(radio => radio.checked);

    const Chose = document.getElementById("sel_pyt")
    console.log(Chose);
    switch (selected.value) {
        case "0": {
            document.getElementById("sel_pyt").innerHTML = '<option value="PD_ing"selected="true" disabled="disabled">Select the project</option><option value="aki_ing">Who is this animal?</option><option value="tienda_ing">Store management</option><option value="carros_ing">Car data analysis</option><option value="consultorio_ing">Medical office database</option><option value="videojuegos_ing">IDEA Methodology</option><option value="CV_ing">Personal website</option>';
            
            break;
        }
        case "1": {
            document.getElementById("sel_pyt").innerHTML = '<option value="PD_ing"selected="true" disabled="disabled">Select the project</option><option value="aki_ing">Who is this animal?</option><option value="tienda_ing">Store management</option>'
            break;
        }
        case "2": {
            document.getElementById("sel_pyt").innerHTML = '<option value="PD_ing"selected="true" disabled="disabled">Select the project</option><option value="CV_ing">Personal website</option>'
            break;
        }
        case "3": {
            document.getElementById("sel_pyt").innerHTML = '<option value="PD_ing"selected="true" disabled="disabled">Select the project</option><option value="consultorio_ing">Medical office database</option>'
            break;
        }
        case "4": {
            document.getElementById("sel_pyt").innerHTML = '<option value="404">Coming soon</option>'
            break;
        }
        case "5": {
            document.getElementById("sel_pyt").innerHTML = '<option value="PD_ing"selected="true" disabled="disabled">Select the project</option><option value="carros_ing">Car data analysis</option>'
            break;
        }
        case "6": {
            document.getElementById("sel_pyt").innerHTML = '<option value="PD_ing"selected="true" disabled="disabled">Select the project</option><option value="videojuegos_ing">IDEA Methodology</option>'
            break;
        }
        case "7": {
            document.getElementById("sel_pyt").innerHTML = '<option value="PD_ing"selected="true" disabled="disabled">Select the project</option><option value="videojuegos_ing">IDEA Methodology</option>'
            break;
        }
        case "8": {
            document.getElementById("sel_pyt").innerHTML = '<option value="404">Coming soon</option>'
            break;
        }
        default:
            document.getElementById("sel_pyt").innerHTML = '<option value="404">Coming soon</option>'
            break;
    }
}
function despliega() {
    let muestrapantalla = document.getElementById("sel_pyt").value;
    console.log(muestrapantalla)//Variable de control.
    switch (muestrapantalla) {
        case "aki_ing": {
            document.getElementById("scn").src="Proyectos/pyt_back_aki_ing.html";
            break;
        }
        case "tienda_ing": {
            document.getElementById("scn").src="Proyectos/pyt_back_tienda_ing.html";
            break;
        }
        case "carros_ing": {
            document.getElementById("scn").src="Proyectos/pyt_data_carros_ing.html";
            break;
        }
        case "consultorio_ing": {
            document.getElementById("scn").src="Proyectos/pyt_database_consultorio_ing.html";
            break;
        }
        case "videojuegos_ing": {
            document.getElementById("scn").src="Proyectos/pyt_pm_videojuegos_ing.html";
            break;
        }
        case "CV_ing": {
            document.getElementById("scn").src="Proyectos/pyt_front_CV_ing.html";
            break;
        }
        default:{
            document.getElementById("scn").src="Proyectos/pyt_error.html";
            break;}
    }
    //document.getElementById("demo").innerHTML = "You selected: " + x;

  }