import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(private router:Router){}
pay:any;
gotoHere(id: any){
  localStorage.setItem('id',id);
  this.router.navigate(['/singletvunit/' + id]);
}
}
