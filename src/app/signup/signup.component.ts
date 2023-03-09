import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private auth:AuthService){}
  signup(formData:any){
    if(formData.password === formData.confirmPassword){
      this.auth.signup(formData)
    }
    else{
      alert("Passwords do not match")
    }
    
  }
}
