import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVentasMesero, IConsultaVentasMeseros } from './estadistica';
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

}
