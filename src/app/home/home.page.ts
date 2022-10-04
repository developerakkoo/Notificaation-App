import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private plt : Platform, 
     private alertCtrl : AlertController) {

     
    }



    


  


 

    getAll(){

    }

    showAlert(header, sub, msg){
      this.alertCtrl.create({
        header: header,
        subHeader: sub,
        message: msg,
        buttons: ['Okay']
      }).then(alert => alert.present());
        }

}
