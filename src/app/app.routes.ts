import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registro', component: RegistroComponent},
    { path: 'privado', component: PrivadoComponent, canActivate:[loginGuard]}

];
