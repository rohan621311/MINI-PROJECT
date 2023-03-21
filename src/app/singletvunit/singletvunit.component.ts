import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SinglebedService } from '../singlebed.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-singletvunit',
  templateUrl: './singletvunit.component.html',
  styleUrls: ['./singletvunit.component.css']
})
export class SingletvunitComponent {
  singletvunit:any;
  constructor(private singlebed:SinglebedService, private router:Router,private auth:AuthService)
  {
  
  }
  ngOnInit():void{
    let pageid=localStorage.getItem('id');
  
    let singleDataArray=this.singlebed.getsingletvunit();
    this.singletvunit=singleDataArray.filter(d => d.id === pageid);
    console.log(this.singletvunit);
  
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
