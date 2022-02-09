
async function cargarUrl(url){
    let respuesta = await fetch(url);
    return respuesta.json();
}


async function cargarJson(){
    let json = await cargarUrl('https://raw.githubusercontent.com/lucaspenalba/JSON/main/perfumes.json');

    console.log(json);

    
    
    
    if (document.querySelector("#cardPerfumes")) {
        
        let cardPerfumes = document.querySelector('#cardPerfumes');
        
        insertarHtml(cardPerfumes, json, 0, 0);

    } 

    if (document.querySelector("#cardMasculino")) {
        
        let cardMasculino = document.querySelector('#cardMasculino');
        
        insertarHtml(cardMasculino, json, "Hombre", 0);

    } 

    if (document.querySelector("#cardCKM")) {
        
        let cardCKM = document.querySelector('#cardCKM');
        
        insertarHtml(cardCKM, json, "Hombre", "Calvin Klein");

    }

    if (document.querySelector("#cardCHM")) {
        
        let cardCHM = document.querySelector('#cardCHM');
        
        insertarHtml(cardCHM, json, "Hombre", "Carolina Herrera");

    }

    if (document.querySelector("#cardPRM")) {
        
        let cardPRM = document.querySelector('#cardPRM');
        
        insertarHtml(cardPRM, json, "Hombre", "Paco Rabanne");

    }


    if (document.querySelector("#cardFemenino")) {
        
        let cardFemenino = document.querySelector('#cardFemenino');
        
        insertarHtml(cardFemenino, json, "Mujer", 0);

    }

    if (document.querySelector("#cardPRF")) {
        
        let cardPRF = document.querySelector('#cardPRF');
        
        insertarHtml(cardPRF, json, "Mujer", "Paco Rabanne");

    }

    if (document.querySelector("#cardCKF")) {
        
        let cardCKF = document.querySelector('#cardCKF');
        
        insertarHtml(cardCKF, json, "Mujer", "Calvin Klein");

    }

    if (document.querySelector("#cardCHF")) {
        
        let cardCHF = document.querySelector('#cardCHF');
        
        insertarHtml(cardCHF, json, "Mujer", "Carolina Herrera");

    }

    if (document.querySelector("#CardLancomeF")) {
        
        let CardLancomeF = document.querySelector('#CardLancomeF');
        
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
                                <img src="https://raw.githubusercontent.com/lucaspenalba/imag/main/paginaPerfumes/img/perfumes/${item.img}.jpg" class="card-img-top">
                                            
                            <div class="card-body">
                                <h5 class="card-title articulo__descripcion">${item.nombre}</h5>
                                <p class="card-text articulo__descripcion articulo__descripcion--marca">${item.marca}</p>
                                <p class="card-text articulo__descripcion articulo__descripcion--precio">${item.precio}</p>
                                <button type="button" class="btn articulo__btn" data-bs-toggle="modal" id="${item.img}">comprar</button>
                            </div>
                            </div>
                        </div>       
                `
            

}








cargarJson()



