import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      idCliente: '',
      nombres: '',
      apellidos: '',
      direccion: '',
      telefono: '',
      nroMesa: 1,
      idMesero: 1
    })
  }

  save() {
    let factura: IFactura = Object.assign({}, this.formGroup.value);
    console.table(factura);

    this.facturasService.createFactura(factura)
      .subscribe(numeroFactura => this.numeroFactura = numeroFactura, error => console.error(error));

    this.router.navigate(["/detalle-factura"]);
  }
}
