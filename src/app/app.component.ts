import { Component } from '@angular/core';

interface Componente{
  name:string;
  icon:string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[]=[
    {
      name:'Inicio',
      icon: 'home',
      redirecTo:'/inicio'   
    },
    {
      name:'Registro',
      icon: 'person-add',
      redirecTo:'/registro'   
    },
    {
      name:'About',
      icon: 'help-circle',
      redirecTo:'/about'   
    },
   
     

  ]

  constructor() {}
}
