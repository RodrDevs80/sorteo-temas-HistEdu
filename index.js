let numeros = localStorage.getItem("numeros") ? localStorage.getItem("numeros").split(",").map(n => Number(n)) : [];
let numero;
const generarNumero = document.getElementById("generar-numero");
const resultado = document.getElementById("resultado");

const generarNumeroRandom = (limite) => {
  do {
    numero = Math.floor(Math.random() * (limite - 1)) + 1; // Ajustamos el rango a 1...limite-1
    if (numeros.length === 9) {
      localStorage.removeItem("numeros");
      numeros = [];
      return "Sin Temas";
    }
  } while (numeros.includes(numero));
  numeros.push(numero);
  console.log(numeros);
  localStorage.setItem("numeros", numeros);
  return numero;
};

const mostrarResultado = (elemento, texto, tema) => {
  elemento.innerHTML = `<h2 class="paragraph">El tema que te toco es:</h2>
<h3 class="paragraph">${texto}</h3>`;
};

generarNumero.addEventListener("click", () => {
  const tema = generarNumeroRandom(10);
  switch (tema) {
    case 1:
      mostrarResultado(resultado, "Cultura y educación en la colonia");
      break;
    case 2:
      mostrarResultado(
        resultado,
        "La formación del sujeto independiente"
      );
      break;
    case 3:
      mostrarResultado(resultado, "Civilización o barbarie");
      break;
    case 4:
      mostrarResultado(
        resultado,
        "La organización del sistema educativo nacional"
      );
      break;
    case 5:
      mostrarResultado(resultado, "La fundación del debate pedagógico");
      break;
    case 6:
      mostrarResultado(resultado, "Del yrigoyenismo a la década infame");
      break;
    case 7:
      mostrarResultado(resultado, "El peronismo");
      break;
    case 8:
      mostrarResultado(resultado, "Del golpe de 1955 al golpe de 1976");

      break;
    case 9:
      mostrarResultado(resultado, "De la dictadura al presente");
      break;
    default:
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ya no hay temas!!!",
      });
      resultado.innerHTML = "<p class='paragraph'>El éxito no es el final, el fracaso no es fatal: lo que cuenta es el coraje para continuar.- Winston Churchill</p>";
      break;
  }
});
