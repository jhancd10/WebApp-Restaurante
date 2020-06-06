import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVentasMesero, IConsumoClientes, IProductoTop } from './estadistica';
import { Observable } from 'rxjs';

@Injectable()
export class EstadisticasService {
  private apiUrl = this.baseUrl + 'api/estadisticas';

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getVentasMeseros(fecha: string): Observable<IVentasMesero[]> {
    console.log(fecha);
    this.apiUrl = this.baseUrl + 'api/estadisticas/' + fecha;
    console.log(this.apiUrl);
    return this.http.get<IVentasMesero[]>(this.apiUrl);
  }

  getConsumosClientes(valorConsulta: string): Observable<IConsumoClientes[]> {
    console.log(valorConsulta);
    this.apiUrl = this.baseUrl + 'api/estadisticasconsumos/' + valorConsulta;
    console.log(this.apiUrl);
    return this.http.get<IConsumoClientes[]>(this.apiUrl);
  }

  getProductoTop(fecha: string): Observable<IProductoTop[]> {
    console.log(fecha);
    this.apiUrl = this.baseUrl + 'api/estadisticasproducto/' + fecha;
    console.log(this.apiUrl);
    return this.http.get<IProductoTop[]>(this.apiUrl);
  }

}
