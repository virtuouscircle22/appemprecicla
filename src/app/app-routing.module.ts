import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { TasksComponent } from './components/inicio/tasks.component';
import { SigninComponent } from './components/signin/signin.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { MapComponent } from './components/map/map.component';
import { MapagrupoComponent } from './components/mapagrupo/mapagrupo.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: TasksComponent
  },
  {
    path: 'consultas',
    component: ConsultasComponent
  },
  {
    path: 'empresa',
    component: EmpresaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mapa',
    component: MapComponent
  },
  {
    path: 'mapagrupo',
    component: MapagrupoComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
