import { Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CalculadoraIMCComponent } from './calculadora-imc/calculadora-imc.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';


export const routes: Routes = [
    {path: '',redirectTo:'calcular-media',pathMatch:'full'},
    {path:'calcular-media',component:CalcularMediaComponent},
    {path:'calculadora', component:CalculadoraComponent},
    {path:'apolice-seguro', component:ApoliceSeguroComponent},
    {path:'calculadora-imc', component:CalculadoraIMCComponent},
    {path:'conversortemperatura', component:ConversorTemperaturaComponent},
    { path: '**', component: PaginaNaoEncontradaComponent }
];
