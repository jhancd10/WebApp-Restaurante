import { Component, OnInit } from '@angular/core';
import { IMesero } from './mesero';
import { HttpClient } from '@angular/common/http';
import { MeserosService } from './meseros.service';

@Component({
  selector: 'app-meseros',
  templateUrl: './meseros.component.html',
  styleUrls: ['./meseros.component.css']
})
export class MeserosComponent {
  public meseros: IMesero[];

  constructor(private meserosService: MeserosService) { }

  ngOnInit() {
    this.meserosService.getMeseros()
    .subscribe(meseros => this.meseros = meseros, error => console.error(error))
  }
}
