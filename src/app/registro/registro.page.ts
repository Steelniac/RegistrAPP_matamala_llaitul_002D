import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  persona={
    nombre:'',
    email:'',
    password:'',
    telefono:''
  }

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }


  mostrarMenu(){
    this.menuController.open('first');
  }

  async Enviar() {
    const alert = await this.alertController.create({
      header: 'Gracias!',
      message: 'Sus datos han sido almacenados!',
      buttons: ['Continuar'],
    });

    await alert.present();

    this.persona.nombre='';
    this.persona.email='';
    this.persona.password='';
    this.persona.telefono='';


  }
}
