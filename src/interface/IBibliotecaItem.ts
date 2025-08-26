export interface IBibliotecaItem {
  readonly id: number;
  title: string;
  autor: string;
  mostrarInfo(): void;
}
