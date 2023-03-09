import { Component } from '@angular/core';
import { BedService } from '../bed.service';
import { Router } from '@angular/router';
import { SinglebedComponent } from '../singlebed/singlebed.component';
@Component({
  selector: 'app-beds',
  templateUrl: './beds.component.html',
  styleUrls: ['./beds.component.css'],
})
export class BedsComponent {
  constructor(private obj:BedService, private router: Router){}
  bed = this.obj.getData();

  gotoHere(id: any){
    localStorage.setItem('id',id);
    this.router.navigate(['/bed/' + id]);
  }
}3


