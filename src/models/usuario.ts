import type { IUsuario } from "../interface/IUsuario.js";
import type { Material } from "./material.js";

export class Usuario implements IUsuario {
  readonly id: number;
  nombre: string;
  private prestados: Material[] = [];
  ultimaPrestacion!: Material;

  constructor(id: number, nombre: string) {
    this.nombre = nombre;
    this.id = id;
  }

  prestar(material: Material): void {
    if (material.disponibilidad) {
      this.prestados.push(material);
      material.disponibilidad = false;
      this.ultimaPrestacion = material;
      console.log(`${this.nombre} ha prestado: ${material.title}`);
    } else {
      console.log(`${material.title} no está disponible.`);
    }
  }

  mostrarPrestados(): void {
    console.log(`Materiales prestados por ${this.nombre}:`);
    this.prestados.forEach((m) => m.mostrarInfo());
  }

  mostrarUltimaPrestacion(): void {
    console.log(`Última prestación de ${this.nombre}:`);
    this.ultimaPrestacion.mostrarInfo();
  }
}
