import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  persona={
    nombre:'',
    password:''
    
  }

  constructor(private menuController: MenuController ,
              private alertController: AlertController ) { }

  ngOnInit() {
  }


  mostrarMenu(){
    this.menuController.open('first');
  }

  async Enviar() {
    const alert = await this.alertController.create({
      header: 'Buenos Dias!',
      message: 'Ingreso Exitoso!',
      buttons: ['Continuar'],
    });

    await alert.present();

    this.persona.nombre='';
    this.persona.password='';
    


  }
}
