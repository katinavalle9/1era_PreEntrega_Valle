alert("BIENVENIDX A DANZARÉ, ESPERO SEA DE TU AGRADO 😉");

let toDo;
let election;

let unitPrice = 2150;
total = 0;
percentage = 25;

//función para aplicar el descuento de las zapatillas bloch europea
function offer(amount) {
  const priceWDiscount = unitPrice * amount;
  const discount = priceWDiscount * (percentage / 100);
  return priceWDiscount - discount;
}
//solo sea numero
function getValidNumberInput() {
  let input;
  do {
    input = prompt("¿Cuantas deseas comprar?");
    if (isNaN(input)) {
      alert("Asegúrate de ingresar un número válido.");
    }
  } while (isNaN(input));
  return parseInt(input);
}

//función para los precios de las faldas
function details(cost) {
  do {
    large = parseInt(
      prompt(
        "Tenemos en dos presentaciones: 1 corta y  2 larga , ¿cual te gustaría?"
      )
    );
    if (isNaN(large) || (large !== 1 && large !== 2)) {
      alert("Por favor, ingrese una opción válida para la presentación.");
    }
  } while (isNaN(large) || (large !== 1 && large !== 2));

  let pieces;
  do {
    pieces = parseInt(prompt("¿Cuantas piezas quiere comprar?"));
    debugger;
    if (isNaN(pieces) || pieces <= 0) {
      alert("Por favor, ingrese una cantidad válida para las piezas.");
    }
  } while (isNaN(pieces));
  let totalAmount = pieces * cost;

  let confirmation = confirm(
    `El precio total es de $${totalAmount}.00MXN. ¿Quieres proceder con la compra?`
  );

  if (confirmation) {
    alert("¡Muchas gracias por tu compra!😊");
  } else {
    alert("¡Gracias por visitarnos!");
  }
  return totalAmount;
}

//funtion para las tallas
function size(price, lookFor) {
  let stock;
  let paymentOfThings;

  switch (lookFor) {
    case 1:
      if (lookFor === 1) {
        stock = parseInt(prompt("¿Cuantas piezas quiere comprar?"));
        if (isNaN(stock) || stock <= 0) {
          alert("Por favor, ingrese una cantidad válida para las piezas.");
          return 0;
        }
        paymentOfThings = stock * price;

        let confirmation = confirm(
          `El precio total es de $${paymentOfThings}.00MXN. ¿Quieres proceder con la compra?`
        );

        if (confirmation) {
          alert("¡Muchas gracias por tu compra!😊");
        } else {
          alert("¡Gracias por visitarnos!");
        }
        return paymentOfThings;
      } else {
        alert("Por favor, ingrese una opción válida para su talla.");
      }
      break;
    case 2:
      if (lookFor === 2) {
        stock = parseInt(prompt("¿Cuantas piezas quiere comprar?"));
        if (isNaN(stock) || stock <= 0) {
          alert("Por favor, ingrese una cantidad válida para las piezas.");
          return 0;
        }
        paymentOfThings = stock * price;

        let confirmation = confirm(
          `El precio total es de $${paymentOfThings}.00MXN. ¿Quieres proceder con la compra?`
        );

        if (confirmation) {
          alert("¡Muchas gracias por tu compra!😊");
        } else {
          alert("¡Gracias por visitarnos!");
        }
        return paymentOfThings;
      } else {
        alert("Por favor, ingrese una opción válida para su talla.");
      }
      break;
    case 3:
      if (lookFor === 3) {
        stock = parseInt(prompt("¿Cuantas piezas quiere comprar?"));
        alert("¡Felicidades usted acaba de recibir un cupón por su compra🙂");
        if (isNaN(stock) || stock <= 0) {
          alert("Por favor, ingrese una cantidad válida para las piezas.");
          return 0;
        }
        paymentOfThings = stock * price;

        let confirmation = confirm(
          `El precio total es de $${paymentOfThings}.00MXN. ¿Quieres proceder con la compra?`
        );

        if (confirmation) {
          alert("¡Muchas gracias por tu compra!😊");
        } else {
          alert("¡Gracias por visitarnos!");
        }
        return paymentOfThings;
      } else {
        alert("Por favor, ingrese una opción válida para su talla.");
      }
      break;
    default:
      alert("Por favor, ingrese una opción válida para su talla.");
      break;
  }
}

let exit = false;
while (!exit) {
  toDo = prompt(
    "¿Que es lo que desea ver?: 1 Zapatillas/ 2 Faldas / 3 Leotardos"
  );
  switch (toDo) {
    //Zapatillas
    case "1":
      alert("Estas en la seccón de zapatillas🩰");
      alert(
        "❗❗HAY OFERTAS DISPONIBLES, POR LA COMPRA DE DOS O MAS ZAPATILLAS BLOCH EUROPEA TIENES EL 25% DE DESCUENTO❗❗"
      );
      //eleccion de zapatillas
      do {
        election = prompt(
          "¿Que zapatillas deseas llevarte? Bloch / Bloch Europea / Cameo / Capezio /  Capulet / Chacott"
        ).toLowerCase();
        if (election === "bloch europea") {
          alert("Se te aplicará un descuento del 25%😱");
          break;
        } else if (
          election === "bloch" ||
          election === "cameo" ||
          election === "capezio" ||
          election === "capulet" ||
          election === "chacott"
        ) {
          alert("Opción válida, pero esta zapatilla no tiene descuento.");
        } else {
          alert("Opción incorrecta. Por favor, ingrese una opción válida.");
        }
      } while (true);
      //cantidad
      //   let amount;
      const discountAmount = 2;
      //   let election = "bloch europea";

      do {
        amount = getValidNumberInput();
        if (amount >= 2 && election === "bloch europea") {
          alert("Estamos trabajando en el descuento...");
          total = offer(amount);
          alert(`El precio con descuento es $: ${total}`);
          break;
        } else if (amount !== discountAmount) {
          alert(
            "Esta cantidad no tiene descuento o asegurate de haber escrito un número, te redirigiremos a la cantidad con descuento."
          );
        } else {
          alert(
            "Esta cantidad o la opcion de la zapatilla no es valida para aplicar el descuento, lo siento"
          );
        }
      } while (true);

      //respuesta de compra
      let answer = prompt("¿Desea comprarlos? 1 SI  / 2 NO ").toLowerCase();
      if (answer === "1") {
        alert("Gracias por su compra,vuelva pronto😊");
      } else {
        alert("Gracias por visitarnos🙂");
      }
      break;
    //Faldas
    case "2":
      alert("Estas en la seccion de faldas✨");
      let color;
      //eleccion de color
      do {
        debugger;
        color = parseInt(
          prompt(
            "Tenemos colores disponibles como: 1 Negro / 2 Morado / 3 Rosado / 4 Floreado ,¿Cual te gustaría?"
          )
        );
        if (isNaN(color) || color < 1 || color > 4)
          alert("Por favor, ingrese una opción válida para el color.");
      } while (color !== 1 && color !== 2 && color !== 3 && color !== 4);
      //costos
      if (color === 1) {
        totalAmount = details(399);
      } else if (color === 2) {
        totalAmount = details(193);
      } else if (color === 3) {
        totalAmount = details(135);
      } else if (color === 4) {
        totalAmount = details(376);
      } else {
        alert("Por favor, ingrese una opción válida para el color.");
      }
      break;
    //Leotardos
    case "3":
      let lookFor;
      alert("Estas en la seccion de leotardos🩱");
      do {
        lookFor = parseInt(prompt("¿Que talla buscabas? 1 G / 2 M / 3 CH"));
        if (isNaN(lookFor) || lookFor < 1 || lookFor > 3)
          alert("Por favor, ingrese una opción válida para su talla.");
      } while (lookFor !== 1 && lookFor !== 2 && lookFor !== 3);

      if (lookFor === 1) {
        paymentOfThings = size(471, lookFor);
      } else if (lookFor === 2) {
        paymentOfThings = size(469, lookFor);
      } else if (lookFor === 3) {
        paymentOfThings = size(500, lookFor);
      } else {
        alert("Por favor, ingrese una opción válida para su talla.");
      }
      break;
    default:
      alert(
        "Respuesta incorrecta, por favor ingrese cualquier numero del menú"
      );
      continue;
  }
}
let again = prompt("¿Desea hacer otra compra?");
