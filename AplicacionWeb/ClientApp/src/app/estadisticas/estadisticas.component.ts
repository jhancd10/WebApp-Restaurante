import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IVentasMesero, IConsultaVentasMeseros } from './estadistica'
import { EstadisticasService } from './estadisticas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  public ventas: IVentasMesero[];

  constructor(private fb: FormBuilder,
    private estadisticasService: EstadisticasService,
    private router: Router) { }

  formGroup: FormGroup;
  formGroup1: FormGroup;
  formGroup2: FormGroup;

  ngOnInit() {
    this.formGroup = this.fb.group({
      fechaVentasMeseros: ''
    })
  }

  consultarVentasMeseros() {
    let consulta: IConsultaVentasMeseros = Object.assign({}, this.formGroup.value);
    console.table(consulta);
    console.log(consulta.fechaVentasMeseros);
    this.estadisticasService.getVentasMeseros(consulta.fechaVentasMeseros).
      subscribe(ventas => this.ventas = ventas, error => console.error(error));
  }
}
