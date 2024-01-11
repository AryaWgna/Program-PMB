import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  timelineView: 'list' | 'timeline' = 'list'; // Initial view

  events = [
    { title: 'Kegiatan Pendaftaran', description: 'Kegiatan pendaftaran dapat dilakukan mulai tanggal 2 Januari s/d 31 Agustus 2024. Biaya Pendaftaran sebesar Rp.300.000,00.', date: '2000', icon: 'assets/icon.png' },
    { title: 'Mengikuti Tes Potensi Akademik dan Wawancara', description: 'Kegiatan daftar ulang bisa dilakukan secara Online atau Offline. Setelah ada pengumuman mengenai lolos atau tidaknya terhadap nilai TPA, maka calon mahasiswa daftar ulang.', date: '2001', icon: 'assets/icon.png' },
    { title: 'Melakukan Kegiatan Pra-Studi', description: 'Pelaksanan kegiatan Pra-studi Dilaksanakan di 1 lokasi. Fakultas Informatika Komputer dan Fakultas Ekonomi dan Bisnis di Gedung Kampus Pajajaran.', date: '2002', icon: 'assets/icon.png' },
  ];
  
  constructor() {}

}
