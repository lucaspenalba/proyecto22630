
async function cargarUrl(url){
    let respuesta = await fetch(url);
    return respuesta.json();
}

async function cargarJson(){
    let json = await cargarUrl('https://raw.githubusercontent.com/lucaspenalba/JSON/main/perfumes.json');

    console.log(json);

    let res = document.querySelector('#cardPerfumes');

    res.innerHTML = '';

    for(let item of json){
        console.log(item.nombre)
        res.innerHTML += `
        <div class="col-sm-6 col-md-4 col-lg-3 mt-3 text-center">
                    <div class="card articulo">             
                        <img src="./img/perfumes/${item.img}.jpg" class="card-img-top">
                                    
                    <div class="card-body">
                        <h5 class="card-title articulo__descripcion">${item.nombre}</h5>
                        <p class="card-text articulo__descripcion articulo__descripcion--marca">${item.marca}</p>
                        <p class="card-text articulo__descripcion articulo__descripcion--precio">${item.precio}</p>
                        <button type="button" class="btn articulo__btn" data-bs-toggle="modal" data-bs-target="#generico">comprar</button>
                    </div>
                    </div>
                </div>       
        `
    }

}

cargarJson()


