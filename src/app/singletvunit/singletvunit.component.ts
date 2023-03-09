import { Component } from '@angular/core';
import { SinglebedService } from '../singlebed.service';

@Component({
  selector: 'app-singletvunit',
  templateUrl: './singletvunit.component.html',
  styleUrls: ['./singletvunit.component.css']
})
export class SingletvunitComponent {
  singletvunit:any;
  constructor(private singlebed:SinglebedService)
  {
  
  }
  ngOnInit():void{
    let pageid=localStorage.getItem('id');
  
    let singleDataArray=this.singlebed.getsingletvunit();
    this.singletvunit=singleDataArray.filter(d => d.id === pageid);
    console.log(this.singletvunit);
  
  }
}
