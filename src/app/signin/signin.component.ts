import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
constructor(private auth:AuthService){}
signin(formData:any){
  this.auth.signin(formData)
}
}
