import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class tabelaVerdadeService {
  generateTruthTable(): boolean[][] {
    const rows = [];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        rows.push([Boolean(i), Boolean(j), Boolean(i && j)]);
      }
    }
    return rows;
  }
}
