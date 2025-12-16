import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrianguloEscaleno } from '../Modelos/triangulo-escaleno';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss']
})
export class TrianguloComponent {

  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  perimetro: number = 0;

  calcularPerimetro() {
    const figura = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    this.perimetro = figura.calcularPerimetro();
  }
}
