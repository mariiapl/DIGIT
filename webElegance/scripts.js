let carrito = [];
let carritoCount = document.getElementById('carrito-count');
let carritoList = document.getElementById('carrito-list');

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    carritoCount.textContent = carrito.length;
    carritoList.innerHTML = "";
    carrito.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        carritoList.appendChild(li);
    });
}

function mostrarCarrito() {
    document.getElementById('carrito-modal').style.display = "flex";
}

function cerrarCarrito() {
    document.getElementById('carrito-modal').style.display = "none";
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}
