import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  email: any;
  password: any;
  token: any;
  servicio = inject(LoginService)

  registro(datos: any){
    this.servicio.postUsers2(datos.value).subscribe()
  }

}
