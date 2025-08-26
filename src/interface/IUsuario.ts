import { Material } from "../models/material.js";

export interface IUsuario {
  readonly id: number;
  nombre: string;
  prestar(material: Material): void;
}
