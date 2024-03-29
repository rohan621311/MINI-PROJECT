import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import{AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { collection,Firestore,addDoc, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth : Auth,private router:Router ,private firestore: Firestore) { }


signin(creds: any) {
  signInWithEmailAndPassword(this.auth, creds.email, creds.password)
    .then(() => {
      alert('Login Success')
      this.router.navigate(['home'])
    })
    .catch((err) => {
      alert(err.message)
    })
}


signup(data: any) {
  

  createUserWithEmailAndPassword(this.auth, data.email, data.password)
    .then(() => {
  alert('success')
  this.router.navigate(['home'])
    })
    .catch((err) => {
      alert(err.message)
    })
}

logout() {
    signOut(this.auth)
      .then(() => {
        this.router.navigate([''])
      })
      .catch((err) => {
        console.log(err.message)
      })
  }


  buy(details:any){
const docRef=collection(this.firestore,"furnitures")
addDoc(docRef, details)
  }

  view(): Observable<any> {
    const collectionInstance = collection(this.firestore, "furnitures")
    return collectionData(collectionInstance, { idField: 'id' })
    

  }
  

  delete(id: any) {
    const docRef = doc(this.firestore, "furnitures", id)
    deleteDoc(docRef)
  }
}

