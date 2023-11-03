const valorBase = 200;

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;



let nombre = document.getElementById("nombre");
let errorNombre = document.getElementById("errorNombre");
let apellido = document.getElementById("apellido");
let errorApellido = document.getElementById("errorApellido");
let email = document.getElementById("email");
let errorEmail = document.getElementById("errorEmail");
let cantidad = document.getElementById("cantidad");
let errorCantidad = document.getElementById("errorCantidad");
let categoria = document.getElementById("categoria") ;
let errorCategoria = document.getElementById("errorCategoria");


const quitarError = () => {
    let listaNodos = document.querySelectorAll(".form-control, .form-select");
    for(let i= 0; i < listaNodos.length; i ++){
        listaNodos[i].classList.remove("is-invalid");
    }
    let listaNodosDiv = document.querySelectorAll(".invalid-feedback");
    for(let i= 0; i < listaNodosDiv.length; i ++){
        listaNodosDiv[i].classList.remove("mostrar");
    }
}

const validarCampos = () => {

    quitarError();

    if (nombre.value === ""){
        nombre.classList.add("is-invalid");
        errorNombre.classList.add("mostrar");
        nombre.focus();
        return;
        
    }if (apellido.value=== ""){
        apellido.classList.add("is-invalid");
        errorApellido.classList.add("mostrar");
        apellido.focus();
        return;

    }if(email.value === ""){
        email.classList.add("is-invalid");
        errorEmail.classList.add("mostrar");
        email.focus();
        return;
    
    }
    const emailValido = mail =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }
    if (!emailValido(email.value)){
        email.classList.add("is-invalid");
        errorEmail.classList.add("mostrar");
        email.focus();
        return;
    }

    if ((cantidad.value == 0) || (isNaN(cantidad.value))) {
        cantidad.classList.add("is-invalid");
        errorCantidad.classList.add("mostrar");
        cantidad.focus();
        return;
    }

    if(categoria.value == ""){
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

//declaro una variable de tipo number

    let totalValorTickets = (cantidad.value) * valorBase;;

    switch(categoria.value){
        case "0":
            totalValorTickets = totalValorTickets;
            break;
        case "1":
            totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
            break;
        case "2":
            totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
            break;
        case "3":
            totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
            break;  
    }
    totalPago.innerHTML = totalValorTickets;
}

btnResumen.addEventListener("click", validarCampos);

const resetValidarCampos =() =>{
    quitarError();
    totalPago.innerHTML = "";
}

btnBorrar.addEventListener("click", resetValidarCampos);
/*
    }if (correo.value=== ""){
        alert("Ingrese un Correo electronico valido");
        correo.focus();

    }else if (cantidad.value=== ""){
        alert("Ingrese la cantidad de personas");
        cantidad.focus();

    }else if (categoria.value=== null){
        alert("Seleccione una categoria");
        categoria.focus();
    
    
    }else {
        document.getElementById('resultado').style.display = "block";
    
    }

    return true;
}
/*
function borrar(){
    document.getElementById("miFormulario").reset();
    document.getElementById("resultado").innerHTML = "Total a pagar: $";
    }
 

function resumen() {
    
    validarCampos()
    
            //let categoria = document.getElementById("categoria").value;
            //let cantidad = parseInt(document.getElementById("cantidad").value);
            let precioBase = 200; // Precio base sin descuento

            let precioFinal = 0;
            if (categoria === "1") {
                precioFinal = precioBase * cantidad * 0.8; // 80% de descuento para la categoría A
            } else if (categoria === "2") {
                precioFinal = precioBase * cantidad * 0.5; // 50% de descuento para la categoría B
            } else if (categoria === "3") {
                precioFinal = precioBase * cantidad * 0.15; // 15% de descuento para la categoría C
            }

            // Mostrar el resultado en la página
            
            document.getElementById("resultado").innerHTML = `Total a pagar: $ ${precioFinal}`;
        
        }
    */