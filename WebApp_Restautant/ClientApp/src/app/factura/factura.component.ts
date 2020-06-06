import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { IFactura } from './factura';
import { FacturasService } from './facturas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'factura-app',
  templateUrl: "./factura.component.html"
})

export class FacturaComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private facturasService: FacturasService,
    private router: Router) { }

  formGroup: FormGroup;
  public numeroFactura: number;

  ngOnInit() {
    this.formGroup = this.fb.group({
      idSupervisor: '',
      idCliente: '',
      nombres: '',
      apellidos: '',
      direccion: '',
      telefono: '',
      nroMesa: 1,
      idMesero: 1,
      detalles: this.fb.array([])
    });
  }

  agregarDetalle() {
    let detalleArr = this.formGroup.get('detalles') as FormArray;
    let detalleFG = this.construirDetalle();
    detalleArr.push(detalleFG);
  }

  construirDetalle() {
    return this.fb.group({
      plato: '',
      valor: '0'
    });
  }

  removerDetalle(index: number) {
    let detalles = this.formGroup.get('detalles') as FormArray;
    detalles.removeAt(index);
  }

  save() {
    let factura: IFactura = Object.assign({}, this.formGroup.value);

    this.facturasService.createFactura(factura)
      .subscribe(numeroFactura => this.numeroFactura = numeroFactura, error => console.error(error));

    this.router.navigate(["/registrar-factura"]);
  }
}
