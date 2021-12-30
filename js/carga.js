/**
 * @SegundaEntrega Este script contiene funcionalidades para la carga y modificacion de productos
 * 
 * @version: v2.0.0
 * @author: Lucas Peñalba
 * 
 *  
 */



document.getElementById("add-form").addEventListener("submit", saveForm); //selecciona el formulario

//funcion para almacenar los valores introducidos en el formulario
function saveForm(e){    

    const identificador = document.getElementById('inputId').value;

    const nombre = document.getElementById('inputName').value;
    
    const marca = document.getElementById('inputMarca').value;
    
    const precio = document.getElementById('inputPrecio').value;
    

    const perfume = {
        identificador,
        nombre,
        marca,
        precio

    };


    if (localStorage.getItem('perfumes') === null){
    
        let perfumes = [];
    
        perfumes.push(perfume);
    
        localStorage.setItem('perfumes', JSON.stringify(perfumes));

    }else {
    
        let perfumes = JSON.parse(localStorage.getItem('perfumes'));
    
        perfumes.push(perfume);
    
        localStorage.setItem('perfumes', JSON.stringify(perfumes));
    
    }

    getForm();

    document.getElementById('add-form').reset();

    e.preventDefault();

}

//funcion para extraer los valores almacenados 
function getForm() {

    let productos = JSON.parse(localStorage.getItem('perfumes'));

    let listaProductos = document.getElementById('listaPerfumes');

    let cardProductos = document.getElementById('cardProductos');
    

    listaProductos.innerHTML = '';

    for(let i = 0; i < productos.length; i++) {
    
        let identificador = productos[i].identificador;
    
        let nombre = productos[i].nombre;
    
        let marca = productos[i].marca;
    
        let precio = productos[i].precio;

        //listo los valores en pantalla
        listaProductos.innerHTML += `<div class="card mt-3">
                                        <div class="card-body">
                                            <p>${identificador} - ${nombre} - ${marca} - ${precio}</p>
                                            <a onclick="deleteForm('${identificador}')" class="btn articulo__btn">Delete</a>
                                        </div>
                                    </div>`;

        //armo las tarjetas en el index                                
        cardProductos.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3 mt-3 text-center">
                                        <div class="card articulo">             
                                            <img src="./img/perfumes/${identificador}.jpg" class="card-img-top">
                                                        
                                        <div class="card-body">
                                            <h5 class="card-title articulo__descripcion">${nombre}</h5>
                                            <p class="card-text articulo__descripcion articulo__descripcion--marca">${marca}</p>
                                            <p class="card-text articulo__descripcion articulo__descripcion--precio">${precio}</p>
                                            <a onclick="deleteForm('${identificador}')" class="btn articulo__btn">comprar</a>
                                            <button type="button" class="btn articulo__btn" data-bs-toggle="modal" data-bs-target="#generico">comprar</button>
                                        </div>
                                        </div>
                                    </div>`;

        
    }
}

//funcion para borrar un valor
function deleteForm(identificador){
    
    let productos = JSON.parse(localStorage.getItem('perfumes'));

    for(let i = 0; i < productos.length; i++) {

    if(productos[i].identificador == identificador) {

        productos.splice(i, 1);

    }

  }
  
  localStorage.setItem('perfumes', JSON.stringify(productos));

  getForm();
}
  
  getForm();


