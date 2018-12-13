import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiSpeedTestService } from '../../services/apiSpeedTestService'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private http:ApiSpeedTestService) {

  }

  callApi(){
    this.http.getISP()
    .then(data=>{
      console.log(data);
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
