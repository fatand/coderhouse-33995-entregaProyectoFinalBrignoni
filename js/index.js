//index.js

let sectionProductsMen = document.getElementById("sectionProductsMen");
let sectionProductsWomen = document.getElementById("sectionProductsWomen");
/* 
console.log(sectionProductsMen);
console.log(sectionProductsWomen); */

const catalogo = [];
const catalogoHombres = [];
const catalogoMujeres = [];

function botonAgregar(producto) {
    const boton = document.getElementById(`agregar${producto.id}`);
       
    boton.addEventListener('click', ()=> {
        Swal.fire({ //Sweet alert con mensaje de que se ha agregado el producto al carrito.
            position: 'top-end',
            icon: 'success',
            text: `Se agrego el producto ${producto.nombre} al carrito de compras.`,
            imageUrl: `../img/${producto.img}`,
            imageWidth: 200,
            imageAlt: `${producto.id}`,
            showConfirmButton: true,
            timer: 1500
          })
        carritoIndex(producto.id);
    })
}

function renderizarProductoMujer(producto) {
    let div = document.createElement("div");
    div.innerHTML = `<img src="../img/${producto.img}" alt="${producto.id}">
                    <p> ${producto.nombre} </p>
                    <b> $ ${producto.precio} </b>
                    <button id="agregar${producto.id}">Agregar al carrito</button>`;
    div.className = "product-block";
    sectionProductsWomen.append(div);
}

function renderizarProductoHombre(producto) {
    let div = document.createElement("div");
    div.innerHTML = `<img src="../img/${producto.img}" alt="${producto.id}">
                    <p> ${producto.nombre} </p>
                    <b> $ ${producto.precio} </b>
                    <button id="agregar${producto.id}">Agregar al carrito</button>`;
    div.className = "product-block";
    sectionProductsMen.append(div);
}

function evaluarSexoYRenderizar(producto) {
    if (producto.sexo == "male") {
        catalogoHombres.push(producto);
        if (sectionProductsMen  != null) {
            renderizarProductoHombre(producto);
            botonAgregar(producto);
        }
    } else if (producto.sexo == "female") {
        catalogoMujeres.push(producto);
        if (sectionProductsWomen  != null) {
            renderizarProductoMujer(producto);
            botonAgregar(producto);
        }
    }
}

const renderizarCatalogo = async () => {
    const respuesta = await fetch("../json/stock.json"); //Fetch del .json
    const data = await respuesta.json();

    data.forEach (producto=> {
        evaluarSexoYRenderizar(producto)
        catalogo.push(producto); 
    })
}

renderizarCatalogo()

const filtrosLeftBar = [
    {id: "RecienLlegados", nombre: "Recien llegados"},
    {id: "CategoriaRemeras", nombre: "Remeras"},
    {id: "CategoriaShorts", nombre: "Shorts"},
    {id: "CategoriaBuzos", nombre: "Buzos"},
    {id: "CategoriaAccesorios", nombre: "Accesorios"},
    {id: "Sale", nombre: "Sale"},
];

//RENDERIZA LOS FILTROS EN LA LEFT BAR
for (const filtro of filtrosLeftBar) {
    let li = document.createElement("li");
    if (filtro.nombre === "Sale") {
        li.innerHTML = `<button id="btn${filtro.id}" class="left-bar-sale">${filtro.nombre}</button>`;
    }else{
        li.innerHTML = `<button id="btn${filtro.id}">${filtro.nombre}</button>`;
    }
    ulLeftBar.append(li);
};

// LIMPIAR HTML DE LA SECCION sectionProductsWomen y sectionProductsMen DEPENDIENDO EN CUAL ESTOY.

function limpiarHTMLSectionProducts() {
    if (sectionProductsWomen  != null) {
        sectionProductsWomen.innerHTML = "";
    } else if(sectionProductsMen  != null) {
        sectionProductsMen.innerHTML = "";
    }
}

// RENDERIZAR PRODUCTOS LUEGO DE APLICAR UN FILTRO

function renderizarFiltros() {
    limpiarHTMLSectionProducts();
    for (const producto of catalogo) {
        evaluarSexoYRenderizar(producto)
    }
}

//ORDENA EL CATALOGO DE MAYOR A MENOR PRECIO
function ordenarMayorMenor() {
    catalogo.sort((a, b) => {
        if(a.precio > b.precio){
           return -1;
        }
        if(a.precio < b.precio){
            return 1;
        }
        return 0;
    }); //ordena de Mayor a Menor
    renderizarFiltros()
}

let botonMayorMenor = document.getElementById("btnMayorMenor");
botonMayorMenor.addEventListener("click", ordenarMayorMenor);

//ORDENA EL CATALOGO DE MENOR A MAYOR PRECIO

function ordenarMenorMayor() {
    catalogo.sort((a, b) => {
        if(a.precio < b.precio){
            return -1;
        }
        if(a.precio > b.precio){
            return 1;
        }
        return 0;
    }); //ordena de Menor a Mayor   
    renderizarFiltros()
}
        
let botonMenorMayor = document.getElementById("btnMenorMayor");
botonMenorMayor.addEventListener("click", ordenarMenorMayor); 

//ORDENA EL CATALOGO DE A-Z SEGUN NOMBRE DEL PRODUCTO

function ordenarAZ() {
    catalogo.sort((a, b) => {
        if(a.nombre < b.nombre){
            return -1;
        }
        if(a.nombre > b.nombre){
            return 1;
        }
        return 0;
    }); //ordena de A a Z 
    renderizarFiltros()
}
        
let botonAZ = document.getElementById("btnAZ");
botonAZ.addEventListener("click", ordenarAZ);   

//RESETEA FILTRO DE ORDEN

function resetearOrden() {
    catalogo.sort((a, b) => {
        if(a.id < b.id){
            return -1;
        }
        if(a.id > b.id){
            return 1;
        }
        return 0;
    }); //ordena de Menor a Mayor segun id.
    renderizarFiltros()
}
        
let botonResetear = document.getElementById("btnResetear");
botonResetear.addEventListener("click", resetearOrden);   

//FILTRO RECIEN LLEGADOS

function filtroRecienLlegados() {
    limpiarHTMLSectionProducts();
    for (const producto of catalogo) {
        if (producto.recienLlegado) {
            evaluarSexoYRenderizar(producto)
        }
    }
}

let botonRecienLlegados = document.getElementById("btnRecienLlegados");
botonRecienLlegados.addEventListener("click", filtroRecienLlegados);    

//FILTRO CATEGORIA REMERAS

function filtroCategoriaRemeras() {
    limpiarHTMLSectionProducts();
    for (const producto of catalogo) {
        if (producto.categoria === "Remeras") {
            evaluarSexoYRenderizar(producto)
        };
    } 
}
        
let botonCategoriaRemeras = document.getElementById("btnCategoriaRemeras");
botonCategoriaRemeras.addEventListener("click", filtroCategoriaRemeras);    

//FILTRO CATEGORIA SHORTS

function filtroCategoriaShorts() {
    limpiarHTMLSectionProducts();
    for (const producto of catalogo) {
        if (producto.categoria === "Shorts") {
            evaluarSexoYRenderizar(producto)
        };
    }
}
        
let botonCategoriaShorts = document.getElementById("btnCategoriaShorts");
botonCategoriaShorts.addEventListener("click", filtroCategoriaShorts);    

//FILTRO CATEGORIA BUZOS

function filtroCategoriaBuzos() {
    limpiarHTMLSectionProducts();
    for (const producto of catalogo) {
        if (producto.categoria === "Buzos") {
            evaluarSexoYRenderizar(producto)
        };
    }
}
        
let botonCategoriaBuzos = document.getElementById("btnCategoriaBuzos");
botonCategoriaBuzos.addEventListener("click", filtroCategoriaBuzos);    

//FILTRO CATEGORIA ACCESORIOS

function filtroCategoriaAccesorios() {
    limpiarHTMLSectionProducts();
    for (const producto of catalogo) {
        if (producto.categoria === "Accesorios") {
            evaluarSexoYRenderizar(producto)
        };
    }
}
        
let botonCategoriaAccesorios = document.getElementById("btnCategoriaAccesorios");
botonCategoriaAccesorios.addEventListener("click", filtroCategoriaAccesorios);    

//FILTRO SALE

function filtroSale() {
    limpiarHTMLSectionProducts();
    for (const producto of catalogo) {
        if (producto.sale) {
            evaluarSexoYRenderizar(producto)
        };
    }
}
        
let botonSale = document.getElementById("btnSale");
botonSale.addEventListener("click", filtroSale);  