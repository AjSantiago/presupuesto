import { Component } from '@angular/core';
import { Egreso } from './egresos/egreso.model';
import { EgresoService } from './egresos/egreso.service';
import { Ingreso } from './ingresos/ingreso.model';
import { IngresoService } from './ingresos/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(
    private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService
  ) {
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }

  getIngresoTotal() {
    let ingresoTotal: number = 0;
    this.ingresos.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal() {
    let egresoTotal: number = 0;
    this.egresos.forEach((egreso) => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal() {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
