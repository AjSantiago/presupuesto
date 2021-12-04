import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { IngresoService } from './ingresos/ingreso.service';
import { EgresoService } from './egresos/egreso.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    FormularioComponent,
    IngresosComponent,
    EgresosComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [IngresoService, EgresoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
