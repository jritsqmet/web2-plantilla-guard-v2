import { Component } from '@angular/core';

@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css'
})
export class PrivadoComponent {


  cerrar(){
    //localStorage.setItem("token", 'false')
    localStorage.removeItem('token')
    window.location.href='login'
  }

}
