import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styles: [],
})
export class EgresosComponent implements OnInit {
  egresos: Egreso[] = [];
  @Input() ingresoTotal: number = 0;

  constructor(private egresoServicio: EgresoService) {}

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;
  }

  eliminarRegistro(egreso: Egreso) {
    this.egresoServicio.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.ingresoTotal;
  }
}
