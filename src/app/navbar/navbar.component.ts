import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(public auth:AuthService){}
signout(){
  this.auth.logout()
}
}

