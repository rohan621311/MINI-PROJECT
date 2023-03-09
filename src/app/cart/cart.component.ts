import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
data:any
  ngOnInit(){
    this.data=localStorage.getItem('cartid')
  }
}
