import { Component } from '@angular/core';
import { SinglebedService } from '../singlebed.service';

@Component({
  selector: 'app-singlesofa',
  templateUrl: './singlesofa.component.html',
  styleUrls: ['./singlesofa.component.css']
})
export class SinglesofaComponent {
  singlesofa:any;
  constructor(private singlebed:SinglebedService)
  {
  
  }
  ngOnInit():void{
    let pageid=localStorage.getItem('id');
  
    let singleDataArray=this.singlebed.getsinglesofa();
    this.singlesofa=singleDataArray.filter(d => d.id === pageid);
    console.log(this.singlesofa);
  
  }
}
