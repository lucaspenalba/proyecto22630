/**
 * @SegundaEntrega Este script contiene funcionalidades para la carga y modificacion de productos
 * 
 * @version: v2.0.0
 * @author: Lucas Peñalba
 * 
 *  
 */



$(document).ready(function(){ 


    
    $('#add-form').submit(function(){ //selecciona el formulario
        
        let perfumes = localStorage.info==null?[]:JSON.parse(localStorage.info);
        let identificador= $("#inputId").val();
        let nombre= $("#inputName").val();
        let marca= $("#inputMarca").val();
        let precio= $("#inputPrecio").val();
        


        perfumes.push({
            'identificador' : identificador,
            'nombre' : nombre,
            'marca' : marca,
            'precio' : precio
    
        });  
        
        localStorage.info = JSON.stringify(perfumes);
        
        getForm();

        alert("Se guardo");


    });

    
        
    //funcion para extraer los valores almacenados 
    let getForm = () => {
        let perfumes = localStorage.info==null?[]:JSON.parse(localStorage.info);

        let listaProductos = $("#listaPerfumes");

        let cardProductos = $("#cardPerfumes");

        

        perfumes.forEach(element => {

            listaProductos.append(`
                <div class="card mt-3">
                    <div class="card-body">
                        <p>${element.identificador} - ${element.nombre} - ${element.marca} - ${element.precio}</p>
                        <button onclick="eliminar(${element.identificador})" class="btn articulo__btn">Delete</button>
                    </div>
                </div>
            `);            

            cardProductos.append(`
                <div class="col-sm-6 col-md-4 col-lg-3 mt-3 text-center">
                    <div class="card articulo">             
                        <img src="./img/perfumes/${element.identificador}.jpg" class="card-img-top">
                                    
                    <div class="card-body">
                        <h5 class="card-title articulo__descripcion">${element.nombre}</h5>
                        <p class="card-text articulo__descripcion articulo__descripcion--marca">${element.marca}</p>
                        <p class="card-text articulo__descripcion articulo__descripcion--precio">${element.precio}</p>
                        <button type="button" class="btn articulo__btn" data-bs-toggle="modal" data-bs-target="#generico">comprar</button>
                    </div>
                    </div>
                </div>
            `);

        });

    }



    let eliminar = (id) => {

        let perfumes = localStorage.info==null?[]:JSON.parse(localStorage.info);
    
        let resultadoIndex = perfumes.findIndex(e => e.identificador == id);
    
        if(resultadoIndex != -1){
    
            perfumes.splice(resultadoIndex, 1);
    
            localStorage.info = JSON.stringify(perfumes);
    
            getForm();
        }else{
            alert("No lo encontro");
        }
    }


    $("#Toggle").click(() => $("#listaPerfumes").toggle(1000))









}); 