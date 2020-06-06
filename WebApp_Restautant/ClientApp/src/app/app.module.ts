import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FacturaComponent } from './factura/factura.component';
import { MeserosComponent } from './meseros/meseros.component';
import { MeserosFormComponent } from './meseros/meseros-form/meseros-form.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { MeserosDeleteComponent } from './meseros/meseros-delete/meseros-delete.component';

import { MeserosService } from './meseros/meseros.service';
import { FacturasService } from './factura/facturas.service';
import { EstadisticasService } from './estadisticas/estadisticas.service';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FacturaComponent,
    MeserosComponent,
    MeserosFormComponent,
    EstadisticasComponent,
    MeserosDeleteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'meseros', component: MeserosComponent },
      { path: 'registrar-factura', component: FacturaComponent },
      { path: 'estadisticas', component: EstadisticasComponent },
      { path: 'meseros-agregar', component: MeserosFormComponent },
      { path: 'meseros-editar/:idMesero', component: MeserosFormComponent },
      { path: 'meseros-eliminar/:idMesero', component: MeserosDeleteComponent },
    ])
  ],
  providers: [MeserosService, FacturasService, EstadisticasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
