import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcular-media',
  imports: [FormsModule], 
  templateUrl: './calcular-media.component.html',
  styleUrl: './calcular-media.component.css'
})
export class CalcularMediaComponent { 

  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;
  media: number = 0;  
  situacao: string = '';

  calcularMedia() {
    this.media = ((this.nota1 *0.15 ) + (this.nota2 * 0.30) + (this.nota3 * 0.10) + (this.nota4 * 0.45));
    
    if (this.media >= 5) {
      this.situacao = 'Aprovado';
    } else {
      this.situacao = 'Reprovado';
    }
  } 
}
