const productos = [
  //Camperas
  {
    id:"camperas",
    titulo: "Campera",
    imagen: "campera.img",
    categoria: {
          nombre: "Camperas",
          id: "camperas"
    },
    precio: 2000
  },
  {
    id:"campera2",
    titulo: "Campera2",
    imagen: "campera2.img",
    categoria: {
          nombre: "Camperas",
          id: "camperas"
    },
    precio: 2000
  },
  {
    id:"remeras",
    titulo:"Remera",
    imagen:"remera.img",
    categoria:{
      nombre: "Remera",
      id: "remeras"
    },
    precio: 2000
  },
  {
    id:"remeras2",
    titulo:"Remera2",
    imagen:"remera2.img",
    categoria:{
      nombre: "Remeras",
      id: "remeras"
    },
    precio: 2000
  },
  {
    id:"pantalones",
    titulo:"Pantalon",
    imagen:"pantalon.img",
    categoria:{
      nombre: "Pantalones",
      id: "pantalones"
    },
    precio: 2000
  },
  {
    id:"pantalones2",
    titulo:"Pantalones2",
    imagen:"pantalon2.img",
    categoria:{
      nombre: "Pantalon",
      id: "pantalones"
    },
    precio: 2000
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");


function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto =>{

      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
          <h3 class="producto-titulo">${producto.titulo}</h3>
          <p class="producto-precio">${producto.precio}}</p>
          <button class="producto-agregar" id"${producto.id}">Agregar</button>
        </div>
      `;

      contenedorProductos.append(div);
    
    });
}

cargarProductos(productos);

botonesCategorias.forEach(boton  => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active");

      if (e.currentTarget.id !="todos") {
        const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
        tituloPrincipal.innerText = "Todos los productos";

        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
      cargarProductos(productosBoton);
      } else{
        tituloPrincipal.innerText = "Todos los productos";
        cargarProductos(productos);
      }

    })

})