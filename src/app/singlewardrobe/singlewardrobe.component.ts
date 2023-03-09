import { Component } from '@angular/core';
import { SinglebedService } from '../singlebed.service';

@Component({
  selector: 'app-singlewardrobe',
  templateUrl: './singlewardrobe.component.html',
  styleUrls: ['./singlewardrobe.component.css']
})
export class SinglewardrobeComponent {
  singlewardrobe:any;
  constructor(private singlebed:SinglebedService)
  {
  
  }
  ngOnInit():void{
    let pageid=localStorage.getItem('id');
  
    let singleDataArray=this.singlebed.getsinglewardrobe();
    this.singlewardrobe=singleDataArray.filter(d => d.id === pageid);
    console.log(this.singlewardrobe);
  
  }
}
