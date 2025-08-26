import { Material } from "./material.js";
export class libro extends Material {
  pagina: number;
  genero?: string;

  constructor(
    id: number,
    title: string,
    autor: string,
    pagina: number,
    genero?: string
  ) {
    super(id, title, autor);
    (this.pagina = pagina), (this.genero = genero ?? "");
  }

  mostrarInfo(): void {
    console.log(
      `Libro: ${this.title} - Autor: ${this.autor} - Páginas: ${this.pagina} ${
        this.genero ? "- Género: " + this.genero : ""
      }`
    );
  }
}
