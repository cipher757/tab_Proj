import { Component } from '@angular/core';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent{
  valor1: number = 0;
  valor2: number = 0;
  resultadoConjuncao: string = ''; 
  resultadoDisjuncao: string = ''; 
  calcularConjuncao() {
    this.resultadoConjuncao = this.valor1 && this.valor2 ? 'Verdadeiro' : 'Falso'; 
  }

  calcularDisjuncao() {
    this.resultadoDisjuncao = this.valor1 || this.valor2 ? 'Verdadeiro' : 'Falso'; 
  }
}

