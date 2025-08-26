import { Material } from "./material.js";

export class Revista extends Material {
  edicion: number;

  constructor(id: number, title: string, author: string, edicion: number) {
    super(id, title, author), (this.edicion = edicion);
  }

  mostrarInfo(): void {
    console.log(
      `Revista: ${this.title} - Autor: ${this.autor} - Edición: ${this.edicion}`
    );
  }
}
