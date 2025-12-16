import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';

import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';

@Component({
  selector: 'app-perimetros',
  templateUrl: './perimetros.page.html',
  styleUrls: ['./perimetros.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    CirculoComponent,
    TrianguloComponent,
  ],
})
export class PerimetrosPage {
  figuraSeleccionada: string = 'circulo'; // por defecto

  constructor() {}
}
