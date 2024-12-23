import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-circulo',
  templateUrl: './circulo.page.html',
  styleUrls: ['./circulo.page.scss'],
  imports: [IonicModule, FormsModule, CommonModule], // CommonModule es crítico
})
export class CirculoPage {
  radio: number = 0;
  perimetro: number | null = null;

  calcularPerimetro() {
    this.perimetro = 2 * Math.PI * this.radio;
  }
}
