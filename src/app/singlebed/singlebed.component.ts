import { Component } from '@angular/core';
import { SinglebedService } from '../singlebed.service';
import { Firestore,collection,addDoc,collectionData,doc,updateDoc,deleteDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-singlebed',
  templateUrl: './singlebed.component.html',
  styleUrls: ['./singlebed.component.css']
})
export class SinglebedComponent {

singlebed:any;
constructor(private Bed:SinglebedService,)
{
}
ngOnInit():void{
  let pageid=localStorage.getItem('id');

  let singleDataArray=this.Bed.getData();
  this.singlebed=singleDataArray.filter(d => d.id === pageid);
  console.log(this.singlebed);

 
 }
}

