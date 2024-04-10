import { Component, OnInit } from '@angular/core';
import { tabelaVerdadeService } from './tabela.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent implements OnInit {
  truthTable: boolean[][] = [];

  constructor(private truthTableService: tabelaVerdadeService) { }

  ngOnInit(): void {
    this.truthTable = this.truthTableService.generateTruthTable();
  }
}
