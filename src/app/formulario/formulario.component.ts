import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egresos/egreso.model';
import { EgresoService } from '../egresos/egreso.service';
import { Ingreso } from '../ingresos/ingreso.model';
import { IngresoService } from '../ingresos/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [],
})
export class FormularioComponent implements OnInit {
  tipo: string = 'ingreso';
  descripcionInput: string = '';
  valorInput: number = 0;

  constructor(
    private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService
  ) {}

  ngOnInit(): void {}

  tipoOperacion(evento: any) {
    this.tipo = evento.target.value;
  }

  agregarValor() {
    if (this.tipo === 'ingreso')
      this.ingresoServicio.ingresos.push(
        new Ingreso(this.descripcionInput, this.valorInput)
      );
    else
      this.egresoServicio.egresos.push(
        new Egreso(this.descripcionInput, this.valorInput)
      );
  }
}
