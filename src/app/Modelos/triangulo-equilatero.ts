import { FiguraGeometrica } from './figura-geometrica';

export class TrianguloEquilatero extends FiguraGeometrica {

  constructor(public lado: number) {
    super();
  }

  calcularPerimetro(): number {
    return 3 * this.lado;
  }
}
