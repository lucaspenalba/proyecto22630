async function cargarUrl(url){
    let respuesta = await fetch(url);
    return respuesta.json();
}


async function cargarJson(){
    let json = await cargarUrl('https://raw.githubusercontent.com/lucaspenalba/JSON/main/perfumes.json');

    let modalArticulos = document.querySelector('#modalArticulos');
    

    modalArticulos.innerHTML = '';

    for(let item of json){


        modalArticulos.innerHTML += `<div class="modal fade modalArt" id="${item.img}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header modalArt__header">
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>                
                <div class="modal-body">
                  <div class="container-fluid">
                    <div class="row item">
                      <div class="col-6">
                        <a href="./secciones/producto/212VipBlack.html"><img src="https://raw.githubusercontent.com/lucaspenalba/imag/main/paginaPerfumes/img/perfumes/${item.img}.jpg" class="img-fluid itemImg" alt=""></a>              
                      </div>  
                      <div class="col-6">
                        <h2 class="h2 modalArt__detalle">
                          <strong class="itemNombre">${item.nombre}</strong>
                        </h2>
                        <h3 class="h4 modalArt__detalle modalArt__detalle--marca">
                          <strong class="itemMarca">${item.marca}</strong>
                      </h3>  
                        <h4 class="h4 modalArt__detalle modalArt__detalle--precio">
                            <strong class="itemPrecio">${item.precio}</strong>
                        </h4> 
                        <select class="form-select" aria-label="Default select example">
                          <option selected>100 ML</option>
                          <option value="1">50 ML</option>
                          <option value="2">100 ML</option>                          
                        </select> 
                        <div class="row mt-3 mb-4">
                          <div class="col-4">
                            <div class="modalArt__detalle modalArt__detalle--cantidad"><p>cantidad</p></div>
                          </div>
                          <div class="col-5">
                            <select class="form-select" aria-label="Default select example">
                              <option selected>1</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="2">3</option>  
                              <option value="2">4</option>  
                              <option value="2">5</option>                            
                            </select>
                          </div>
                        </div>
                        <button type="button" class="btn articulo__btn agregarCarrito" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Agregar a carrito</button>
                      </div>          
                    </div>
                  </div>                  
                </div>
              </div>
            </div>
          </div> `
    }

}


cargarJson()