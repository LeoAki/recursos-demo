import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '@lib/auth';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  auth = inject(AuthService);

  ngOnInit() {
    console.log('username::',this.auth.userName);
  }

}
