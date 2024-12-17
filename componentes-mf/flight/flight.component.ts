import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent {
  search(): void {
    alert('Not implemented in this demo!');
  }
}
