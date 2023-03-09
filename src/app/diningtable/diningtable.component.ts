import { Component } from '@angular/core';
import { BedService } from '../bed.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-diningtable',
  templateUrl: './diningtable.component.html',
  styleUrls: ['./diningtable.component.css']
})
export class DiningtableComponent {
  constructor(private obj:BedService,private router: Router){}
   diningtable= this.obj.getDining();

   gotoHere(id: any){
    localStorage.setItem('id',id);
    this.router.navigate(['/diningtable/' + id]);
}
}
