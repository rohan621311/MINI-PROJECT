import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nextbed',
  templateUrl: './nextbed.component.html',
  styleUrls: ['./nextbed.component.css'],
})
export class NextbedComponent {
  constructor(private auth: AuthService) {}
  data: any;
  ngOnInit() {
    this.data = this.auth.view();
  }

  delete(id:any){
    this.auth.delete(id)
  }
}
