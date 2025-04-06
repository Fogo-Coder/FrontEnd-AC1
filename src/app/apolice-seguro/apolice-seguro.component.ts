import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apolice-seguro',
  imports: [FormsModule],
  templateUrl: './apolice-seguro.component.html',
  styleUrl: './apolice-seguro.component.css'
})
export class ApoliceSeguroComponent {

  nome: string = '';
  sexo: string = '';
  idade: number = 0;
  valor: number = 0;
  apolice: number = 0;


  calcularApolice(){
    if (this.sexo === 'masculino' && this.idade < 25) {
      this.apolice = this.valor * 0.15;
    } else if (this.sexo === 'masculino' && this.idade >= 25) {
      this.apolice = this.valor * 0.10;
    } else if (this.sexo === 'feminino'){
      this.apolice = this.valor * 0.08;
    }
  }
}
