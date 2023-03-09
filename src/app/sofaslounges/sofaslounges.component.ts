import { Component } from '@angular/core';
import { BedService } from '../bed.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sofaslounges',
  templateUrl: './sofaslounges.component.html',
  styleUrls: ['./sofaslounges.component.css']
})
export class SofasloungesComponent {
  constructor(private obj:BedService , private router: Router){}
  sofas = this.obj.getSofa();

  gotoHere(id: any){
    localStorage.setItem('id',id);
    this.router.navigate(['/sofa/'+ id]);
  }
}
