import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor-temperatura',
  imports: [FormsModule],
  templateUrl: './conversor-temperatura.component.html',
  styleUrl: './conversor-temperatura.component.css'
})
export class ConversorTemperaturaComponent {

  celcius: number = 0;
  fahrenheit: number = 0;
  kelvin: number = 0;


  converter(){
    this.fahrenheit = (this.celcius * 9/5) + 32;
    this.kelvin = this.celcius + 273.15;
  }

}
