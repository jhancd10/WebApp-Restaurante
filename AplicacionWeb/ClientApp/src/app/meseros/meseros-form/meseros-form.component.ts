import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IMesero } from '../mesero';
import { MeserosService } from '../meseros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meseros-form',
  templateUrl: './meseros-form.component.html',
  styleUrls: ['./meseros-form.component.css']
})
export class MeserosFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private meserosService: MeserosService,
    private router: Router) { }

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.fb.group({
      idMesero: '',
      nombres: '',
      apellidos: '',
      edad: 1,
      antiguedad: 0
    })
  }

  save() {
    let mesero: IMesero = Object.assign({}, this.formGroup.value);
    console.table(mesero);

    this.meserosService.createMesero(mesero).subscribe((mesero => this.onSaveSuccess()), error => console.error(error));
  }

  onSaveSuccess() {
    this.router.navigate(["/meseros"]);
  }
}
