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
import { FacturasFormComponent } from './factura/facturas-form/facturas-form.component';

import { MeserosService } from './meseros/meseros.service';
import { FacturasService } from './factura/facturas.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FacturaComponent,
    MeserosComponent,
    MeserosFormComponent,
    FacturasFormComponent
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
      { path: 'meseros-agregar', component: MeserosFormComponent },
      { path: 'detalle-factura', component: FacturasFormComponent },
    ])
  ],
  providers: [MeserosService, FacturasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
