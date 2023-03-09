import { Injectable } from '@angular/core';
import { singlebed,singledining,singlesofa ,singlestudy,singletvunit,singlewardrobe} from './singlebed';

@Injectable({
  providedIn: 'root'
})
export class SinglebedService {

  constructor() { }
  getData(){
    return singlebed;
  }
  getsingledin(){
    return singledining;
  }
  getsinglesofa(){
    return singlesofa;
  }
  getsinglestudy(){
    return singlestudy;
  }
  getsingletvunit(){
    return singletvunit;
  }
  getsinglewardrobe(){
    return singlewardrobe;
  }
}
