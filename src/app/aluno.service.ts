import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  listas: string[] = [];

  salvar(nome  : string) {
      this.listas.push(nome);
  }
  constructor() { }
}
