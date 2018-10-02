import { Component, OnInit } from '@angular/core';

import{ Mahasiswa } from '../shared/mahasiswa';
@Component({
  selector: 'app-kuis1',
  templateUrl: './kuis1.component.html',
  styleUrls: ['./kuis1.component.css']
})
export class Kuis1Component implements OnInit {
  daftarMahasiswa: Mahasiswa[] =[];
  nim='';
  nama='';
  kelas='';
  mahasiswa;
  constructor() { }

  ngOnInit() {
  }

  tambahAnggota(){
    this.mahasiswa = new Mahasiswa(this.nim,this.nama,this.kelas);
    this.daftarMahasiswa.push(this.mahasiswa);
    this.nim='';
    this.nama='';
    this.kelas='';
}
}
