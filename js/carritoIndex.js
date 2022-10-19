//carritoIndex.js

let carritoStorage2 = localStorage.getItem("carritoDeCompras");
const carritoDeCompras = JSON.parse(carritoStorage2) || [];

const carritoIndex = (productoId)=>{    
  const agregarProductoACarrito = ()=> {
    let producto = carritoDeCompras.find( producto => producto.id == productoId ) || catalogo.find( producto => producto.id == productoId );
    if (carritoDeCompras.map(producto => producto.id).includes(producto.id)){
      producto.cant = producto.cant +1;        
    } else {
        if (producto.cant == 0) {
          producto.cant = producto.cant +1;
          carritoDeCompras.push(producto)
        }
      }
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
      Swal.fire({
        icon: 'info',
        text: 'Su carrito no se ha vaciado.',
        })
    }
  })
})

//ELIMINAR PRODUCTO DEL CARRITO.

const eliminarProducto = (productoId)=>{
  const eliminarProductoDelCarrito = ()=> {
    let producto  = carrito.find( producto => producto.id == productoId )
    const indexProductoAEliminar = carrito.map(producto => producto.id).indexOf(producto.id)
    carrito.splice(indexProductoAEliminar,1);
  }
  eliminarProductoDelCarrito()
  carritoContenedor.innerHTML = "";
  carritoSubtotal = 0;
  carritoEnvio = 0;
  carritoTotal = 0;

  for (const producto of carrito) {
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
    Swal.fire({ //Sweet alert con mensaje de que se ha eliminado el producto al carrito.
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
  })
}