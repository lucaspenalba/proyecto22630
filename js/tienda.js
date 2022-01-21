const addCartButton = document.querySelectorAll('.agregarCarrito');
addCartButton.forEach(addCart =>{
    addCart.addEventListener('click', agregaClick );


});

//funcion global 
const perfumesCarrito = document.querySelector('.perfumesCarrito'); 




function agregaClick(event){

    const button = event.target;

    const item = button.closest('.item');


    console.log(button);

    const itemImg = item.querySelector('.itemImg').src;

    const itemNombre = item.querySelector('.itemNombre').textContent;

    const itemMarca = item.querySelector('.itemMarca').textContent;
    
    const itemPrecio = item.querySelector('.itemPrecio').textContent;

    

    agregarItems(itemImg, itemNombre, itemMarca, itemPrecio);

}


function agregarItems (itemImg, itemNombre, itemMarca, itemPrecio){

    console.log(itemImg, itemNombre, itemMarca, itemPrecio);    

    const elementoNombre = perfumesCarrito.getElementsByClassName(
        'nombreItemCarrito'
    );
    for (let i = 0; i < elementoNombre.length; i++) {
        if (elementoNombre[i].innerText === itemNombre) {
        let cantidadItemCarrito = elementoNombre[
            i
        ].parentElement.parentElement.parentElement.querySelector(
            '.cantidadItemCarrito'
        );
        cantidadItemCarrito.value++;
        
        actualizacionTotal();
        return;
        }
    }

    const elementoCarrito = document.createElement('div');

    const contenidoCarrito = `
            <div class="row carritotItem">
                <div class="col-3">
                    <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                        <img src=${itemImg} class="img-fluid shopping-cart-image">
                        <h6 class="shopping-cart-item-title nombreItemCarrito text-truncate ml-3 mb-0">${itemNombre}</h6>
                    </div>
                </div>
                <div class="col-2">
                    <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                        <p class="item-price mb-0 precioItemCarrito">${itemPrecio}</p>
                    </div>
                </div>
                <div class="col-2">
                    <div
                        class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                        <input class="shopping-cart-quantity-input cantidadItemCarrito" type="number"
                            value="1">
                        <button class="btn btn-danger buttonDeleteItem" type="button">X</button>
                    </div>
                </div>
            </div>`;

    elementoCarrito.innerHTML = contenidoCarrito;

    perfumesCarrito.append(elementoCarrito);

    elementoCarrito.querySelector('.buttonDeleteItem').addEventListener('click', removerItemCarrito);

    elementoCarrito.querySelector('.cantidadItemCarrito').addEventListener('change', cambiarCantidad);
    
    
    actualizacionTotal();

}

function actualizacionTotal(){

    let total = 0;


    const carritoTotal = document.querySelector('.carritoTotal');

    const carritotItems = document.querySelectorAll('.carritotItem');

    carritotItems.forEach(carritotItem =>{
        
        const listaPrecioItem = carritotItem.querySelector('.precioItemCarrito');

        const precioItemCarrito = listaPrecioItem.textContent.replace('$','');

        console.log(precioItemCarrito)

        const listaCAntidadItem = carritotItem.querySelector('.cantidadItemCarrito');

        const cantidadItemCarrito = Number(listaCAntidadItem.value);

        console.log(cantidadItemCarrito)

        total = total + precioItemCarrito * cantidadItemCarrito;

        console.log(total)
        
    });

    carritoTotal.innerHTML = `$ ${total.toFixed(2)}`

}



function removerItemCarrito(event){

    const buttonClickDelete = event.target;

    buttonClickDelete.closest('.carritotItem').remove();

    console.log(buttonClickDelete);

    actualizacionTotal();
}

function cambiarCantidad (event){

    const inputCantidad = event.target;

    inputCantidad.value <=0 ? (inputCantidad.value = 1) : null;

    console.log(inputCantidad);

    actualizacionTotal()

}