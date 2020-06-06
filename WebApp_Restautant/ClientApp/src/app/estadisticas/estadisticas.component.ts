import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IVentasMesero, IConsultaVentasMeseros, IConsumoClientes, IConsultaConsumoClientes, IConsultaProductoTop, IProductoTop } from './estadistica'
import { EstadisticasService } from './estadisticas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  public ventas: IVentasMesero[];
  public consumos: IConsumoClientes[];
  public productoTop: IProductoTop[];

  constructor(private fb: FormBuilder,
    private estadisticasService: EstadisticasService,
    private router: Router) { }

  formGroup: FormGroup;
  formGroup1: FormGroup;
  formGroup2: FormGroup;

  ngOnInit() {
    this.formGroup = this.fb.group({
      fechaVentasMeseros: ''
    });

    this.formGroup1 = this.fb.group({
      fecha: '',
      valor: ''
    });

    this.formGroup2 = this.fb.group({
      fechaInicio: ''
    });
  }

  consultarVentasMeseros() {
    let consulta: IConsultaVentasMeseros = Object.assign({}, this.formGroup.value);
    this.estadisticasService.getVentasMeseros(consulta.fechaVentasMeseros).
      subscribe(ventas => this.ventas = ventas, error => console.error(error));
  }

  consultarConsumoClientes() {
    let consulta: IConsultaConsumoClientes = Object.assign({}, this.formGroup1.value);
    var valorConsulta = consulta.fecha.trim() + "," +consulta.valor.trim();
    this.estadisticasService.getConsumosClientes(valorConsulta).
      subscribe(consumos => this.consumos = consumos, error => console.error(error));
  }

  consultarProductosTop() {
    let consulta: IConsultaProductoTop = Object.assign({}, this.formGroup2.value);
    this.estadisticasService.getProductoTop(consulta.fechaInicio).
      subscribe(productoTop => this.productoTop = productoTop, error => console.error(error));
  }

}
