import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BedService } from '../bed.service';

@Component({
  selector: 'app-wardrobes',
  templateUrl: './wardrobes.component.html',
  styleUrls: ['./wardrobes.component.css']
})
export class WardrobesComponent {
  constructor(private obj:BedService,private router:Router){}
  wardrobe= this.obj.getWardrobe();

  gotoHere(id: any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singlewardrobe/'+ id]);
  }
}
