import { Component } from '@angular/core';
import { FormsModule,NgModel, NumberValueAccessor  } from '@angular/forms';
import e from 'express';

@Component({
  selector: 'app-calculadora-imc',
  imports: [FormsModule],
  templateUrl: './calculadora-imc.component.html',
  styleUrl: './calculadora-imc.component.css'
})
export class CalculadoraIMCComponent {
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  classificacao: string = '';

  calcular() {
    this.imc = this.peso / (this.altura ** 2); 

    if (this.imc < 18.5) {
      this.classificacao = 'Abaixo do peso';  
    } else if (this.imc >= 18.5 && this.imc < 24.9) {
      this.classificacao = 'Peso normal';
    } else if (this.imc >= 25 && this.imc < 29.9) {
      this.classificacao = 'Sobrepeso'; 
    } else if (this.imc >= 30 && this.imc < 34.9) {
      this.classificacao = 'Obesidade grau 1'; 
    } else if (this.imc >= 35 && this.imc < 39.9) {    
      this.classificacao = 'Obesidade grau 2';
    } else if (this.imc >= 40) {    
      this.classificacao = 'Obesidade grau 3';
    }
  }
}