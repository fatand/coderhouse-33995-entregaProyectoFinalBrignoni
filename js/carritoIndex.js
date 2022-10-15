
// const carritoDeCompras = JSON.parse(carritoStorage) || [];

// console.log(carritoDeCompras);

let carritoStorage2 = localStorage.getItem("carritoDeCompras");
const carritoDeCompras = JSON.parse(carritoStorage2) || [];
console.log(`INICIO carritoDeCompras`);
console.log(carritoDeCompras);
console.log(`FIN carritoDeCompras`);

// const carritoDeCompras = [];
// console.log(`carritoDeCompras = ${carritoDeCompras}`);

const carritoIndex = (productoId)=>{
    const contenedorCarrito = document.getElementById("carrito-contenedor")
    
     const agregarProductoACarrito = ()=> {
      let producto = carritoDeCompras.find( producto => producto.id == productoId ) || catalogoHombres.find( producto => producto.id == productoId );
      console.log(producto);
      console.log(carritoDeCompras);
      console.log(`producto.cant = ${producto.cant}`);

      console.log(carritoDeCompras.map(producto => producto.id).includes(producto.id));
      if (carritoDeCompras.map(producto => producto.id).includes(producto.id)){
        producto.cant = producto.cant +1;        
        console.log("FUNCIONA");
        console.log(`producto.cant = ${producto.cant}`);
      } else {
      if (producto.cant == 0) {
        producto.cant = producto.cant +1;
        carritoDeCompras.push(producto)
      }
    }
      console.log("CONSOLE LOG DE carrito");
      console.log(carritoDeCompras);
      localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras))
    }

    agregarProductoACarrito()

}

let carritoContenedor = document.getElementById("carritoContenedor");
let carritoStorage = localStorage.getItem("carritoDeCompras");

let carrito = JSON.parse(carritoStorage) || [];

let carritoSubtotal = 0;
let carritoEnvio = 0;
let carritoTotal = 0;

function renderizarProductoEnCarrito(producto) {
  let div = document.createElement("div");
  div.innerHTML = `<div>
                      <img src="../img/${producto.img}" alt="${producto.id}">
                  </div>
                  <div class="product1-details">
                      <b>${producto.nombre} </b>
                      <p>Cantidad: ${producto.cant} </p>
                      <p>Precio unitario: $ ${producto.precio} </p>
                      <button id="eliminar${producto.id}" class="btn btn-primary justify-content-center" id="Eliminar${producto.id}">Eliminar</button>
                  </div>`;
  div.className = "cart-product1";
  div.id="carritoProduct";
  carritoContenedor.append(div);
}

function renderizarCarrito() {
  for (const producto of carrito) {
    renderizarProductoEnCarrito(producto);
    carritoSubtotal = carritoSubtotal + producto.precio * producto.cant;
    carritoEnvio = carritoEnvio + producto.cant * 50;
    carritoTotal = carritoSubtotal + carritoEnvio;
    botonEliminar(producto)
  }
};

renderizarCarrito();

//RENDERIZA RESUMEN DE CARRITO
function renderizarResumenCompra() {
  const totalValue = document.getElementById("totalValue")
  let div = document.createElement("div");
    div.innerHTML = `<p>$${carritoSubtotal} </p>
                    <p>$${carritoEnvio} </p>
                    <p class="p-total-value">$${carritoTotal}</p>`;
    totalValue.append(div);
}

renderizarResumenCompra()

//BOTON PARA VACIAR CARRITO
  let botonVaciarCarrito = document.getElementById("btnVaciarCarrito");
  botonVaciarCarrito.addEventListener("click", () => {
    localStorage.clear();

    Swal.fire({
        text: '¿Estas seguro que quieres vaciar el carrito?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Sí',
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                text: 'Su carrito se ha vaciado.',
              });
            
            carritoContenedor.innerHTML=""; //Lo borra pero luego no se renderiza ningun item en el carrito
            //Resetea resumen de carrito
            totalValue.innerHTML="";
            carritoSubtotal = 0;
            carritoEnvio = 0;
            carritoTotal = carritoSubtotal + carritoEnvio;
            let div = document.createElement("div");
            div.innerHTML = `<p>$${carritoSubtotal} </p>
                    <p>$${carritoEnvio} </p>
                    <p class="p-total-value">$${carritoTotal}</p>`;
            totalValue.append(div);

        } else if (result.isDenied) {
        //   Swal.fire({'Su carrito no se ha vaciado', '', 'info'})
          Swal.fire({
            icon: 'info',
            text: 'Su carrito no se ha vaciado.',
          })
        }
      })
  })


  const eliminarProducto = (productoId)=>{
    // const contenedorCarrito = document.getElementById("carrito-contenedor")


     const eliminarProductoDelCarrito = ()=> {
      let producto  = carrito.find( producto => producto.id == productoId )
      // if (producto.cant == 0) {
      //   producto.cant = producto.cant +1;
      //   carritoDeCompras.push(producto)
      // } else {
      //   producto.cant = producto.cant +1;
      // }
      console.log(`producto.id: ${producto.id}`);
      const indexProductoAEliminar = carrito.map(producto => producto.id).indexOf(producto.id)
      console.log(`indexProductoAEliminar ${indexProductoAEliminar}`);
      carrito.splice(indexProductoAEliminar,1);

      console.log(carrito);
      // localStorage.setItem("carritoDeCompras", JSON.stringify(carritoDeCompras))

    }
    eliminarProductoDelCarrito()
    carritoContenedor.innerHTML = "";
    carritoSubtotal = 0;
    carritoEnvio = 0;
    carritoTotal = 0;

    for (const producto of carrito) {
      console.log(`carrito: ${carrito}`);
      renderizarProductoEnCarrito(producto);
      carritoSubtotal = carritoSubtotal + producto.precio * producto.cant;
      carritoEnvio = carritoEnvio + producto.cant * 50;
      carritoTotal = carritoSubtotal + carritoEnvio;
      botonEliminar(producto)
    }
    totalValue.innerHTML = "";

    renderizarResumenCompra()
    localStorage.setItem("carritoDeCompras", JSON.stringify(carrito))


}

function botonEliminar(producto) {
  const boton = document.getElementById(`eliminar${producto.id}`);
  boton.addEventListener('click', ()=> {
      Swal.fire({ //Sweet alert con mensaje de que se ha agregado el producto al carrito.
          position: 'top-end',
          icon: 'success',
          text: `Se eliminó el producto ${producto.nombre} del carrito de compras.`,
          imageUrl: `../img/${producto.img}`,
          imageWidth: 200,
          imageAlt: `${producto.id}`,
          showConfirmButton: true,
          // timer: 1500
        })
      eliminarProducto(producto.id);
  console.log("se apreto el boton eliminar");

})
}