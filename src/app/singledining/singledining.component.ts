import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { singlebed } from '../singlebed';
import { SinglebedService } from '../singlebed.service';

@Component({
  selector: 'app-singledining',
  templateUrl: './singledining.component.html',
  styleUrls: ['./singledining.component.css']
})
export class SinglediningComponent {
  singledining:any;
  constructor(private singlebed:SinglebedService,private router:Router)
  {
  
}
  ngOnInit():void{
    let pageid=localStorage.getItem('id');
  
    let singleDataArray=this.singlebed.getsingledin();
    this.singledining=singleDataArray.filter(d => d.id === pageid);
    console.log(this.singledining);
}

}
