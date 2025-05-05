let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoDiv = document.getElementById('carrito');
  const totalSpan = document.getElementById('total');
  
  if (carritoDiv) {
    carritoDiv.innerHTML = "";
    carrito.forEach((producto, index) => {
      const productoDiv = document.createElement("div");
      productoDiv.innerHTML = `
        <span>${producto.nombre}</span>
        <span>$${producto.precio.toLocaleString()} COP</span>
        <button onclick="eliminarDelCarrito(${index})">X</button>
      `;
      carritoDiv.appendChild(productoDiv);
    });
  }
  
  if (totalSpan) {
    totalSpan.textContent = `$${total.toLocaleString()} COP`;
  }
}

function eliminarDelCarrito(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();
}

function toggleCarrito() {
  const carritoLateral = document.getElementById("carrito-lateral");
  if (carritoLateral) {
    carritoLateral.classList.toggle("active");
  }
}