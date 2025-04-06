import {RouterModule, Routes} from '@angular/router';
import {FormularioComponent} from './formulario/formulario.component';
import {HeaderComponent} from './header/header.component';
import {InfoProjetoComponent} from './info-projeto/info-projeto.component';


export const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'info', component: InfoProjetoComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: '', redirectTo: '/formulario', pathMatch: 'full'}
];


