import type { IBibliotecaItem } from "../interface/IBibliotecaItem.js";

export abstract class Material implements IBibliotecaItem {
  readonly id: number;
  title: string;
  autor: string;

  protected disponible: boolean = true;

  constructor(id: number, title: string, autor: string) {
    (this.id = id), (this.autor = autor), (this.title = title);
  }

  abstract mostrarInfo(): void;

  get disponibilidad(): boolean {
    return this.disponibilidad;
  }

  set disponibilidad(valor: boolean) {
    this.disponible = valor;
  }
}
