import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-triangulo',
  templateUrl: './triangulo.page.html',
  styleUrls: ['./triangulo.page.scss'],
  imports: [IonicModule, FormsModule, CommonModule],
})
export class TrianguloPage {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  perimetro: number | null = null;
  error: string | null = null;

  calcularPerimetro() {
    // Validar desigualdad triangular
    const cumpleDesigualdad =
      this.ladoA + this.ladoB > this.ladoC &&
      this.ladoA + this.ladoC > this.ladoB &&
      this.ladoB + this.ladoC > this.ladoA;

    // Validar que los lados sean distintos
    const ladosDistintos = this.ladoA !== this.ladoB && this.ladoA !== this.ladoC && this.ladoB !== this.ladoC;

    if (cumpleDesigualdad && ladosDistintos) {
      this.perimetro = this.ladoA + this.ladoB + this.ladoC;
      this.error = null; // No hay error
    } else if (!cumpleDesigualdad) {
      this.perimetro = null;
      this.error = 'Los lados ingresados no forman un triángulo válido.';
    } else if (!ladosDistintos) {
      this.perimetro = null;
      this.error = 'Todos los lados deben ser diferentes.';
    }
  }
}
