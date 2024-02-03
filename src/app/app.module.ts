import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    provideFirebaseApp(() => initializeApp({"projectId":"angularmaterial-5fd77","appId":"1:739373932057:web:55cd8200954438a5c31488","storageBucket":"angularmaterial-5fd77.appspot.com","apiKey":"AIzaSyD6aAIZNhTVcztqjSetCodZBXejLspDeZs","authDomain":"angularmaterial-5fd77.firebaseapp.com","messagingSenderId":"739373932057"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
