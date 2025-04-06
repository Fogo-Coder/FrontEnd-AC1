import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  valor1: number = 0;
  valor2: number = 0;
  operacao: string = '';
  resultado: number = 0;

  calcular() {

    if (this.operacao === 'Soma') {
      this.resultado = this.valor1 + this.valor2;
    }
    else if (this.operacao === 'Subtracao') {
      this.resultado = this.valor1 - this.valor2;
    }
    else if (this.operacao === 'Multiplicacao') { 
      this.resultado = this.valor1 * this.valor2;
    }
    else if (this.operacao === 'Divisao') {
      if (this.valor2 !== 0) {
        this.resultado = this.valor1 / this.valor2;
      } 
      }
    }

}
