//funcion principal
function main() {
  let opcion;
  let opcionValida = false;
  while (!opcionValida) {
    opcion = parseInt(
      prompt(
        "BIENVENIDX A DANZARÉ\n¿Que es lo que desea hacer?:\n1 Ver Zapatillas\n2 Ver Faldas\n3 Ver Leotardos\n4 Salir"
      )
    );
    console.log(opcion);
    //valido quela opcion sea u numero y entre en el rango del numero de opciones
    if (!isNaN(opcion) && opcion >= 1 && opcion <= 4) {
      opcionValida = true;
    } else {
      alert("Opción Inválida.\nIngrese una opción correcta para continuar");
    }
  }
  if (opcion === 4) {
    alert("Gracias por visitarnos, esperamos que vuelva pronto");
  } else {
    carrito(opcion);
  }
}
//se llama la funcion para que se ejecute
main();

function carrito(idCategoria) {
  let opcionProductoValida = false;
  let categoria = categorias.filter((c) => c.id == idCategoria)[0];
  let text = `¿Que ${categoria.descripcion} deseas llevarte?\n`;
  let productosFiltrados = productosFiltradosConDescripcion(idCategoria);
  let cantidadValida = false;
  let cantidad;
  let precioTotal = 0;
  let descuento = 0;
  let precioFinal = 0;
  let opcionProducto;
  text += productosFiltrados.text;

  //se valida si es correcta la opcion ingresada, si es un numero y si se encuentra en el rango de numero
  while (!opcionProductoValida) {
    opcionProducto = parseInt(prompt(text));
    if (
      !isNaN(opcionProducto) &&
      opcionProducto >= 1 &&
      opcionProducto <= productosFiltrados.posicion
    ) {
      opcionProductoValida = true;
    } else {
      alert("Opción Inválida.\nIngrese una opción correcta para continuar");
    }
  }

  console.log("Se ingresó una opción correcta");
  if (opcionProducto === productosFiltrados.posicion) {
    main();
  } else {
    let producto = productosFiltrados.productos[opcionProducto - 1];
    let confimarProducto = confirm(
      `Usted seleccionó el producto: ${producto.nombre}\n¿Desea continuar?\nDe lo contrario será redirigido al menú anterior`
    );
    if (!confimarProducto) carrito(idCategoria);

    if (producto.tienePromocion) {
      alert(
        `EL PRODUCTO ${producto.nombre} TIENE UN DESCUENTO DE ${producto.porcentajePromocion}% EN LA COMPRA DE ${producto.cantidadPromocion} O MAS PIEZAS`
      );
    }
    console.log(producto);

    while (!cantidadValida) {
      cantidad = parseInt(prompt(`Ingrese la cantidad del ${producto.nombre}`));
      if (!isNaN(cantidad) && cantidad > 0) {
        cantidadValida = true;
      } else {
        alert("La cantidad ingresada no es un número válido");
      }
    }
    precioTotal = cantidad * producto.precio;
    if (producto.tienePromocion && cantidad >= producto.cantidadPromocion) {
      descuento = (precioTotal / 100) * producto.porcentajePromocion;
    }
    precioFinal = precioTotal - descuento;
    let confirmarCompra = confirm(
      `Danzaré\nProducto:\t\t${producto.nombre}\nPrecio Total:....................$${precioTotal}\nDescuento:....................-$${descuento}\nPrecio Final:....................$${precioFinal}\n¿Desea confirmar su compra?\nDe lo contrario será regresado al menú anterior`
    );
    if (!confirmarCompra) carrito(idCategoria);
    alert("Gracias por su compra, será redirigido al menú principal");
    main();
  }
}

//funcion para realizar el filtrado por categoria
function productosFiltradosConDescripcion(idCategoria) {
  let productosFiltrados = productos.filter(
    (p) => p.idCategoria === idCategoria
  );
  let text = "";
  let posicion = 1;
  //se filtra por moneda
  productosFiltrados.forEach((producto) => {
    let tempMoneda = monedas.filter((m) => m.id === producto.idMoneda)[0];
    //se concatena todo el texto con las propiedades de los arrays
    let item = `${posicion} ${producto.nombre} (${tempMoneda.simbolo}${producto.precio} ${tempMoneda.nombre})`;
    if (producto.tienePromocion) {
      item += ` - EN LA COMPRA DE ${producto.cantidadPromocion} O MÁS PIEZAS OBTÉN EL ${producto.porcentajePromocion}% DE DESCUENTO`;
    }
    item += "\n";
    text += item;
    posicion++;
  });
  text += `${posicion} Regresar al menú anterior`;
  return {
    productos: productosFiltrados,
    text: text,
    posicion: posicion,
  };
}
