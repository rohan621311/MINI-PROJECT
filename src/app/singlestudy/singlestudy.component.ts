import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SinglebedService } from '../singlebed.service';

@Component({
  selector: 'app-singlestudy',
  templateUrl: './singlestudy.component.html',
  styleUrls: ['./singlestudy.component.css']
})
export class SinglestudyComponent {
  singlestudy:any;
  constructor(private singlebed:SinglebedService, private router:Router)
  {
  
  }
  ngOnInit():void{
    let pageid=localStorage.getItem('id');
  
    let singleDataArray=this.singlebed.getsinglestudy();
    this.singlestudy=singleDataArray.filter(d => d.id === pageid);
    console.log(this.singlestudy);
  
  }
  
}
