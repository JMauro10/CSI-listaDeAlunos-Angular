import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    RouterLink, FormsModule, CommonModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nome: string = '';
  listas: string[] = [];

  salvar() {
    if (this.nome.trim()) {
      this.listas.push(this.nome.trim());
      this.nome = '';
    }
  }
}
