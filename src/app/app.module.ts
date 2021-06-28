import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { MapComponent } from './components/map/map.component';
import { MapagrupoComponent } from './components/mapagrupo/mapagrupo.component';
import { TasksComponent } from './components/inicio/tasks.component';
import { SigninComponent } from './components/signin/signin.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { APP_BASE_HREF } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FiltroPipe } from './pipes/filtro.pipe';
import { FiltroLocalidadPipe } from './pipes/filtro-localidad.pipe';
import { FiltroNamePipe } from './pipes/filtro-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ConsultasComponent,
    EmpresaComponent,
    MapComponent,
    MapagrupoComponent,
    TasksComponent,
    SigninComponent,
    UsuarioComponent,
    FiltroPipe,
    FiltroLocalidadPipe,
    FiltroNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: APP_BASE_HREF,
      useValue: '/empresas'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
