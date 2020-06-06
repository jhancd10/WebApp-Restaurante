import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFactura } from './factura';

@Injectable()
export class FacturasService {
  private apiUrl = this.baseUrl + 'api/facturas';

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  createFactura(factura: IFactura): Observable<number> {
    console.table(factura);
    console.table(factura.detalles)
    return this.http.post<number>(this.apiUrl, factura);
  }
}
