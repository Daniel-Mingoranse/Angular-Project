import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const firebaseConfig = {
  apiKey: "AIzaSyBhN8CaCFElgAIE238E_LCeWtGyLyQxMSU",
  authDomain: "angular-project-3558c.firebaseapp.com",
  databaseURL: "https://angular-project-3558c-default-rtdb.firebaseio.com",
  projectId: "angular-project-3558c",
  storageBucket: "angular-project-3558c.appspot.com",
  messagingSenderId: "240526118246",
  appId: "1:240526118246:web:6c4b0e1547c5917b940ca7",
  measurementId: "G-6HS4Z489ME"
};

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  declarations: [],
})
export class AppModule {}