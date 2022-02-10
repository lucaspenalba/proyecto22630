window.onload = iniciar;

let clientes = [];


function iniciar(){
    let btnAgregar = document.getElementById('enviarForm');
    btnAgregar.addEventListener('click', guardarFormulario);
   
}

function guardarFormulario (){
    
    let cliente = {};

    cliente.nombre = document.getElementById('nombre').value;
    cliente.apellido = document.getElementById('apellido').value;
    cliente.mail = document.getElementById('mail').value;
    cliente.motivo = document.getElementById('inlineFormSelectPref').value;
    cliente.comentario = document.getElementById('comentario').value; 
    
    console.log("envia")


   localStorage.setItem("Clientes", JSON.stringify(cliente));
  

}

