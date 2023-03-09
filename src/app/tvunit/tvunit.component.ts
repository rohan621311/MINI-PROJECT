import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BedService } from '../bed.service';

@Component({
  selector: 'app-tvunit',
  templateUrl: './tvunit.component.html',
  styleUrls: ['./tvunit.component.css']
})
export class TvunitComponent {
  constructor(private obj:BedService,private router:Router){}
  tvunit= this.obj.gettvunit();

  
  gotoHere(id: any){
    localStorage.setItem('id',id);
    this.router.navigate(['/singletvunit/' + id]);
}
}
