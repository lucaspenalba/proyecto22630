let cardPerfumes = document.querySelector('#cardPerfumes');

let cardMasculino = document.querySelector('#cardMasculino');

let cardCKM = document.querySelector('#cardCKM');

let cardCHM = document.querySelector('#cardCHM');

let cardPRM = document.querySelector('#cardPRM');

let cardFemenino = document.querySelector('#cardFemenino');

let cardPRF = document.querySelector('#cardPRF');

let cardCHF = document.querySelector('#cardCHF');

let CardLancomeF = document.querySelector('#CardLancomeF');

let cardCKF = document.querySelector('#cardCKF');


let listaCompra = [];

let totalCarrito = 0;

let totalCantidad = 0;

let contenedorLista = document.querySelector('.itemCart');

let precioTotal = document.querySelector('.precio-total')




async function cargarUrl(url){
    let respuesta = await fetch(url);
    return respuesta.json();
}


async function cargarJson(){
    let json = await cargarUrl('https://raw.githubusercontent.com/lucaspenalba/JSON/main/perfumes.json');

    console.log(json);

    
    
    
    if (cardPerfumes) {
        insertarHtml(cardPerfumes, json, 0, 0);
    } 

    if (cardMasculino) {
        insertarHtml(cardMasculino, json, "Hombre", 0);
    } 

    if (cardCKM) {
        insertarHtml(cardCKM, json, "Hombre", "Calvin Klein");
    }

    if (cardCHM) {
        insertarHtml(cardCHM, json, "Hombre", "Carolina Herrera");
    }

    if (cardPRM) {
        insertarHtml(cardPRM, json, "Hombre", "Paco Rabanne");
    }


    if (cardFemenino) {
        insertarHtml(cardFemenino, json, "Mujer", 0);
    }

    if (cardPRF) {
        insertarHtml(cardPRF, json, "Mujer", "Paco Rabanne");
    }

    if (cardCKF) {
        insertarHtml(cardCKF, json, "Mujer", "Calvin Klein");
    }

    if (cardCHF) {
        insertarHtml(cardCHF, json, "Mujer", "Carolina Herrera");
    }

    if (CardLancomeF) {
        insertarHtml(CardLancomeF, json, "Mujer", "Lancome");
    }
    

}



function insertarHtml(res, json, x, y){

    res.innerHTML = '';

    let variable = x;

    let variableMarca = y;

    

    for(let item of json){        
        if((item.genero === variable || item.genero === "Unisex" ) && variableMarca == 0 && variable != 0 ){
            card(res, item);
            
        }
    }

    for(let item of json){        
        if((item.genero === variable || item.genero === "Unisex" ) && item.marca === variableMarca){
            card(res, item);
            
        }
    }

    for(let item of json){        
        if(variable == 0 && variableMarca == 0){
            card(res, item);
            
        }
    }



}



function card (res, item){

    res.innerHTML += `
                <div class="col-sm-6 col-md-4 col-lg-3 mt-3 text-center">
                            <div class="card articulo">             
                                <img id="imgProducto" src="https://raw.githubusercontent.com/lucaspenalba/imag/main/paginaPerfumes/img/perfumes/${item.img}.jpg" class="card-img-top">
                                            
                            <div class="card-body">
                                <h5 class="card-title articulo__descripcion" id="cardTitulo">${item.nombre}</h5>
                                <p class="card-text articulo__descripcion articulo__descripcion--marca" id="cardMarca">${item.marca}</p>
                                <p class="card-text articulo__descripcion articulo__descripcion--marca" id="cardId">Cod.: ${item.id}</p>
                                <p class="card-text articulo__descripcion articulo__descripcion--precio" id="cardPrecio">${item.precio}</p>
                                <a type="button" class="btn articulo__btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">comprar</a>
                            </div>
                            </div>
                        </div>       
                `
            

}

cargarJson()

loadEvent();


//Carrito
function loadEvent(){
    cardPerfumes.addEventListener('click', addProducto);
    cardMasculino.addEventListener('click', addProducto);
    cardCKM.addEventListener('click', addProducto);
    cardCHM.addEventListener('click', addProducto);
    cardPRM.addEventListener('click', addProducto);
    cardFemenino.addEventListener('click', addProducto);
    cardPRF.addEventListener('click', addProducto);
    CardLancomeF.addEventListener('click', addProducto);
    cardCKF.addEventListener('click', addProducto);

    contenedorLista.addEventListener('click', deleteProducto);


}

function addProducto(e){

    e.preventDefault();
    
    if (e.target.classList.contains('articulo__btn')){
        
        const selecionarProducto = e.target.parentElement;

        readContenido(selecionarProducto)
        
        console.log(e.target.parentElement);
    }
    
}

function deleteProducto(e){

    if (e.target.classList.contains('delete-productos')){
        const deleteId = e.target.getAttribute('data-id');
        listaCompra.forEach(value => {
            if (value.codigo == deleteId){
                let reducirPrecio = parseInt(value.precio)  * parent(value.cantidad);
                totalCarrito = totalCarrito - reducirPrecio;
            }
        }); 
        listaCompra = listaCompra.filter(producto => producto.codigo !== deleteId);

        totalCantidad--;
        
    }
    cargaCarrito();

}

function readContenido(producto){
    const infoProducto = { 
        codigo: producto.querySelector('#cardId').textContent,
        imagen: producto.querySelector('#imgProducto'),
        nombre: producto.querySelector('#cardTitulo').textContent,
        marca: producto.querySelector('#cardMarca').textContent,
        precio: producto.querySelector('#cardPrecio').textContent,
        identificador: producto.querySelector('#cardTitulo').textContent,
        cantidad: 1

    }

    totalCarrito = totalCarrito + parseInt(infoProducto.precio);
    

    const existe = listaCompra.some(producto => producto.codigo ===  infoProducto.codigo)

    if(existe){
        const product = listaCompra.map(producto =>{
            if (producto.codigo === infoProducto.codigo){
                producto.cantidad++;
                return producto
            } else{
                return producto
            }

        });

        listaCompra = [...product];
    }else{
        listaCompra = [...listaCompra, infoProducto]
        totalCantidad++;
    }

    cargaCarrito();
    console.log(infoProducto);
}

function cargaCarrito(){
    
    limpiarHtml();

    listaCompra.forEach(producto =>{
        
        const {codigo, imagen, nombre, marca, precio, cantidad} = producto;
        const row = document.createElement('div');
        row.classList.add('itemCart');
        row.innerHTML = `
        <img src="${imagen}" alt="">        
        <div class="item-content">
            <h5>${nombre}</h5>
            <h5>${marca}</h5>
            <h5 class="cart-price">${precio}$</h5>
            <h6>Amount: ${cantidad}</h6>
        </div>        
        <button class="delete-productos articulo__btn" data-id="${codigo}">eliminar</button>
        `;

        contenedorLista.appendChild(row);
        precioTotal.innerHTML = totalCarrito;
        
    })
}

function limpiarHtml(){
    
    contenedorLista.innerHTML = '';
}




