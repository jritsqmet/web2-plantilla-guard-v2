import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { loginGuard, registroGuard } from './guards/login.guard';
import { privadoGuard } from './guards/privado.guard';
import { Registro2Component } from './pages/registro2/registro2.component';

export const routes: Routes = [
   
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent, canActivate:[privadoGuard]},
    { path: 'registro', component: RegistroComponent, canMatch:[registroGuard]},
    { path: 'privado', component: PrivadoComponent, canActivate:[loginGuard]},
    { path: 'registro', component: Registro2Component},
   

];
