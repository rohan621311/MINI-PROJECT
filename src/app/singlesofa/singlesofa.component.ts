import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SinglebedService } from '../singlebed.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-singlesofa',
  templateUrl: './singlesofa.component.html',
  styleUrls: ['./singlesofa.component.css']
})
export class SinglesofaComponent {
  singlesofa:any;
  constructor(private singlebed:SinglebedService,private router:Router ,private auth:AuthService)
  {
  
  }
  ngOnInit():void{
    let pageid=localStorage.getItem('id');
  
    let singleDataArray=this.singlebed.getsinglesofa();
    this.singlesofa=singleDataArray.filter(d => d.id === pageid);
    console.log(this.singlesofa);
  
  }
  
  buynow(item:any){
    const details={
      title:item.title,
      img:item.image,
      price:item.price
    } 
    
    this.auth.buy(details)
    }
}
