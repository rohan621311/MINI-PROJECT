import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BedService } from '../bed.service';

@Component({
  selector: 'app-studytables',
  templateUrl: './studytables.component.html',
  styleUrls: ['./studytables.component.css']
})
export class StudytablesComponent {
  constructor(private obj:BedService,private router: Router){}
  studytable= this.obj.getstudytable();

  gotoHere(id: any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singlestudy/' + id]);
}
}