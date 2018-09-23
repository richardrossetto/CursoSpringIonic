import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaSevice } from '../../services/domain/categoria.service';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categotiaService  : CategoriaSevice) {
  }

  ionViewDidLoad() {
    this.categotiaService.findAll()
    .subscribe(response => {
      console.log(response);
    }, 
    error => {
      console.log(error);
    });
  
  }
}
