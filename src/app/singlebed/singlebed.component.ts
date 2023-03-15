import { Component } from '@angular/core';
import { SinglebedService } from '../singlebed.service';
import { Firestore,collection,addDoc,collectionData,doc,updateDoc,deleteDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-singlebed',
  templateUrl: './singlebed.component.html',
  styleUrls: ['./singlebed.component.css']
})
export class SinglebedComponent {

singlebed:any;
constructor(private Bed:SinglebedService,private router:Router, private auth:AuthService)
{
}
ngOnInit():void{
  let pageid=localStorage.getItem('id');

  let singleDataArray=this.Bed.getData();
  this.singlebed=singleDataArray.filter(d => d.id === pageid);
  console.log(this.singlebed);

 
 }

buynow(item:any){
const details={
  title:item.title,
  img:item.image
} 
alert('details added')
this.auth.buy(details)
}



}

