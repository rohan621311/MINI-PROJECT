import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BedsComponent } from './beds/beds.component';
import { SofasloungesComponent } from './sofaslounges/sofaslounges.component';
import { DiningtableComponent } from './diningtable/diningtable.component';
import { WardrobesComponent } from './wardrobes/wardrobes.component';
import { StudytablesComponent } from './studytables/studytables.component';
import { TvunitComponent } from './tvunit/tvunit.component';
import { SinglebedComponent } from './singlebed/singlebed.component';
import { SinglesofaComponent } from './singlesofa/singlesofa.component';
import { SinglediningComponent } from './singledining/singledining.component';
import { SinglewardrobeComponent } from './singlewardrobe/singlewardrobe.component';
import { SinglestudyComponent } from './singlestudy/singlestudy.component';
import { SingletvunitComponent } from './singletvunit/singletvunit.component';
import { CartComponent } from './cart/cart.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    ContactusComponent,
    BedsComponent,
    SofasloungesComponent,
    DiningtableComponent,
    WardrobesComponent,
    StudytablesComponent,
    TvunitComponent,
    SinglebedComponent,
    SinglesofaComponent,
    SinglediningComponent,
    SinglewardrobeComponent,
    SinglestudyComponent,
    SingletvunitComponent,
    CartComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    FormsModule
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
