import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public nama_lengkap:any = "";
  public jenis_kelamin:any = "";
  public no_handphone:any = "";
  public email:any = "";
  public asal_sekolah:any = "";
  public program_studi:any = "";
  public jenjang:any = "";
  public kelas:any = "";
  public info_kampus:any = "";
  
  constructor(
public toastCtrl: ToastController, ) {}


async addData() {
    // Check if all fields are filled
    if (
      !this.nama_lengkap ||
      !this.jenis_kelamin ||
      !this.no_handphone ||
      !this.email ||
      !this.asal_sekolah ||
      !this.program_studi ||
      !this.jenjang ||
      !this.kelas ||
      !this.info_kampus
    ) {
      const toast = await this.toastCtrl.create({
        message: 'Please fill in all fields.',
        duration: 2000
      });
      toast.present();
      return;
    }
  
    const formData = new FormData();
    formData.append('nama_lengkap', this.nama_lengkap);
    formData.append('jenis_kelamin', this.jenis_kelamin);
    formData.append('no_handphone', this.no_handphone);
    formData.append('email', this.email);
    formData.append('asal_sekolah', this.asal_sekolah);
    formData.append('program_studi', this.program_studi);
    formData.append('jenjang', this.jenjang);
    formData.append('kelas', this.kelas);
    formData.append('info_kampus', this.info_kampus);
  
    console.log(formData);
  
    try {
  
      const res = await axios.post('https://praktikum-cpanel-unbin.com/Api_AryaW/uas/api_uas/tambah.php', formData);
      console.log(res.data);
  
      if (res.data.error == false) {
        const toast = await this.toastCtrl.create({
          message: 'Data berhasil ditambahkan',
          duration: 2000
        });
        toast.present();
      } else {
        const toast = await this.toastCtrl.create({
          message: 'Data gagal ditambahkan',
          duration: 2000
        });
        toast.present();
      }
    } catch (err) {
      console.log(err);
    }
  }
}
