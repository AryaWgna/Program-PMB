import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any ="";
  password: any ="";
  passwordInputType: string = 'password'; // Default to password type

  constructor(private router:Router,public toastCtrl:ToastController,) { }

  ngOnInit() {}

  async login() {
    if (this.username == ""|| this.password == "") {
      const toast= await this.toastCtrl.create({
        message :'Isi Username dan Password',
        duration : 2000,
        color : 'danger'
      });
      toast.present();
      
    } else {
      this.router.navigate(['/tabs/tab1'])
    }
  }

  togglePasswordVisibility() {
    this.passwordInputType = this.passwordInputType === 'password' ? 'text' : 'password';
  }
}