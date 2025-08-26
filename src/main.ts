import { libro } from "./models/libros.js";
import { Revista } from "./models/revista.js";
import { Usuario } from "./models/usuario.js";

const libro1 = new libro(
  1,
  "Como será el barranco si el sapo lo cruza al trote",
  "Gastón Espínola",
  200,
  "Comedia"
);
const libro2 = new libro(2, "Harry Pother", "Otro Autor", 150);
const revista1 = new Revista(3, "Revista de motos", "Editorial motos", 5);

const usuario1 = new Usuario(1, "Juan");

usuario1.prestar(libro1);
usuario1.prestar(revista1);
usuario1.prestar(libro2);

libro1.mostrarInfo();
libro2.mostrarInfo();
revista1.mostrarInfo();

usuario1.mostrarPrestados();
usuario1.mostrarUltimaPrestacion();
