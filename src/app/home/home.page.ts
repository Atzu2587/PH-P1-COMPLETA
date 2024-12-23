import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule],
})
export class HomePage {
  constructor(private router: Router) {}

  navigateToFigure(event: any) {
    const figure = event.detail.value;
    if (figure) {
      this.router.navigate([`/${figure}`]);
    }
  }
}
