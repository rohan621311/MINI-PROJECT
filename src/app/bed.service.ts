import { Injectable } from '@angular/core';
import { bed,diningtable,sofas,studytable,tvunit,wardrobe} from './bed';
@Injectable({
  providedIn: 'root'
})
export class BedService {

  constructor() { }
  getData(){
    return bed
  }
  getDining(){
    return diningtable
}
getSofa(){
  return sofas
}
getstudytable(){
  return studytable
}
gettvunit(){
  return tvunit
}
getWardrobe(){
  return wardrobe
}
}

