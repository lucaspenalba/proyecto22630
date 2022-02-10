window.onload = init

let clientes = [];


function init(){
    document.getElementById('enviarForm').addEventListener('click', guardarFormulario);
}

function guardarFormulario (){
    
    let cliente = {};

    cliente.nombre = document.getElementById('nombre').value;
    cliente.apellido = document.getElementById('apellido').value;
    cliente.mail = document.getElementById('mail').value;
    cliente.motivo = document.getElementById('inlineFormSelectPref').value;
    cliente.comentario = document.getElementById('comentario').value; 
    
    console.log("envia")

   clientes.push(cliente)
   muestraClientes()

}

function muestraClientes(){
    let resultado = "";
    clientes.forEach(cliente => {
        resultado = resultado + `${cliente.nombre} ${cliente.apellido} ${cliente.mail} ${cliente.inlineFormSelectPref} ${cliente.comentario} <br/> `
    });
    document.getElementById('contenedor').innerHTML = resultado;
}