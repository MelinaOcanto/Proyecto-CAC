var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");
var cantidad = document.getElementById("cantidad");
var categoria = document.getElementById("categoria") ;
var error = "";



function validarCampos(){
    var error = "";

    if (nombre.value=== ""){
        error = "Escriba su nombre";
        nombre.focus();
        
    }else if (apellido.value=== ""){
        error = "Escriba su Apellido";
        apellido.focus();
        

    }else if (correo.value=== ""){
        error = "Ingrese un Correo electronico valido";
        correo.focus();

    }else if (cantidad.value=== ""){
        error= "Ingrese la cantidad de personas";
        cantidad.focus();

    }else if (categoria.value=== null){
        error = "Seleccione una categoria";
        categoria.focus();
    
    }
    if (error !== ""){
        alert(error);
        return false;
    }else {
        document.getElementById('resultado').style.display = "block";
    
    }

    return true;
}

function borrar(){
    document.getElementById("miFormulario").reset();
    document.getElementById("resultado").innerHTML = "Total a pagar: $";
    }
 
 function resumen() {
    
    validarCampos()
    

            let categoria = document.getElementById("categoria").value;
            let cantidad = parseInt(document.getElementById("cantidad").value);
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



