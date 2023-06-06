import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user: any;
  error: any;

  constructor(public auth: AngularFireAuth, private router: Router) {}

  async emailSignin(email: string, password: string) {
    try {
      const credential = await this.auth.signInWithEmailAndPassword(email, password);
      this.user = credential.user;
      this.router.navigateByUrl('/funcionario');
    } catch (error) {
      this.error = error;
    }
  }

  async googleSignin() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.auth.signInWithPopup(provider);
      this.user = credential.user;
      this.router.navigateByUrl('/funcionario');
    } catch (error) {
      this.error = error;
    }
  }

  async signOut() {
    await this.auth.signOut();
    this.user = null;
  }
}
