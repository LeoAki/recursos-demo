import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-holiday-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './holiday-packages.component.html',
  styleUrl: './holiday-packages.component.css'
})
export class HolidayPackagesComponent {
  search(): void {
    alert('Not implemented in this demo!');
  }
}
