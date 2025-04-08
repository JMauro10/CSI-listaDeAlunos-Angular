import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AlunoService} from '../aluno.service';
import {Router} from '@angular/router';
import {routes} from '../app.routes';

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

  constructor(private service : AlunoService, private router : Router) {
  }
  salvar() {
    this.service.salvar(this.nome);
    this.router.navigateByUrl('/lista')
  }
}
