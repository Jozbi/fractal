//Creacion de 2 clases de objetos.

//CLASE PRODUCTO
class Producto {
    static contadorProductos = 0;
    
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    get idProducto() {
        return this._idProducto;
    }

    toString() {
        return `Codigo-Producto: ${this.idProducto}; Nombre: ${this._nombre}; Precio: $${this._precio}\n `
    }
}
//CLASE CARRITO
class Carrito {
    static contadorCarrito = 0;

    static get MAX_PRODUCTOS() {
        return 3;
    }

    constructor(){
        this._idCarrito = ++Carrito.contadorCarrito;
        this._productos = [];
        this._productosEnCarrito = 0;
    }

    get idCarrito() {
        return this._idCarrito;
    }

    agregarProductos(producto) {
        if (this._productosEnCarrito < Carrito.MAX_PRODUCTOS){
            this._productos.push(producto);
            this._productosEnCarrito = this._productos.length;
        } else {
            alert('Carrito Lleno')
        }
    }

    calcularTotal() {
        let totalPresupuesto = 0;
        for(let producto of this._productos){
            totalPresupuesto += producto.precio;
        }
        return totalPresupuesto;
    }

    mostrarCarrito() {
        let carrito = '';
        for (let i = 0; i < this._productos.length; i++){
            carrito += this._productos[i].toString();
        }
        console.log(`Orden: ${this._idCarrito}. Total: $${this.calcularTotal()}. Productos: ${carrito}.`)
    }
}

//Carrito
let carritoActual = new Carrito;

//Lista de Productos Pre-Definida
let stockProductos = [
    new Producto('Lemon Pie', 1000),
    new Producto('Tarta Frutilla', 1000),
    new Producto('Cheesecake', 2000),
    new Producto('Drip Cake', 3000)
];

/**Primer Decision
 * Armar carrito O Modificar lista existente
 */
let primerDecision = comprobarIngreso('Si desea armar un carrito ingrese "COMPRAR". Si desea modificar la lista de productos ingrese "MODIFICAR".', 'comprar', 'modificar');

/**CAMINO SI ELIJE ARMAR UN CARRITO DE COMPRAS
 * Desea ver la lista completa o buscar un producto
 */

if (primerDecision === 'comprar'){
    let items = comprobarIngreso('Desea ver la lista completa de items?(SI o NO)', 'si', 'no');
    if (items === 'si'){
        alert(listaEnString(stockProductos));
        
    }
}

