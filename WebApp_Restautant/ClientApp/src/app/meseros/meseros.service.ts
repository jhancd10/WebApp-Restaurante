import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMesero } from './mesero';

@Injectable()
export class MeserosService {
  private apiUrl = this.baseUrl + 'api/meseros';

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getMeseros(): Observable<IMesero[]> {
    return this.http.get<IMesero[]>(this.apiUrl);
  }

  createMesero(mesero: IMesero): Observable<IMesero> {
    console.table(mesero);
    return this.http.post<IMesero>(this.apiUrl, mesero);
  }

  updateMesero(mesero: IMesero): Observable<IMesero> {
    console.table(mesero);
    return this.http.put<IMesero>(this.apiUrl, mesero);
  }

  deleteMesero(mesero: number): Observable<string> {
    console.table(mesero);
    return this.http.get<string>(this.apiUrl + "/" + mesero.toString());
  }

}
