import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Circulo } from '../Modelos/circulo';

@Component({
  selector: 'app-circulo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss']
})
export class CirculoComponent {

  radio: number = 0;
  perimetro: number = 0;

  calcularPerimetro() {
    const figura = new Circulo(this.radio);
    this.perimetro = figura.calcularPerimetro();
  }
}
