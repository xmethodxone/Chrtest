import { Component } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { storage } from 'firebase';
import { Camera, CameraOptions } from "@ionic-native/camera";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  	private camera: Camera,
	private afAuth: AngularFireAuth,
	private toast: ToastController,
  	public navCtrl: NavController) {

  }


  async takePhoto() {
  	try {
  	//Defining Camra options
  	const options: CameraOptions = {
  		quality: 50,
  		targetHeight: 600,
  		targetWidth: 600,
  		destinationType: this.camera.DestinationType.DATA_URL,
  		encodingType: this.camera.EncodingType.JPEG,
  		mediaType: this.camera.MediaType.PICTURE,
  		correctOrientation: true
  	}
  	const result = await this.camera.getPicture(options);
  	const image = `data:image/jpeg;base64.${result}`;

  	const pictures = storage().ref('pictures');
  	pictures.putString(image, 'data_url')
  }
  catch (e) {
  	console.error(e);
  }
}

  ionViewWillLoad() {
  	this.afAuth.authState.subscribe(data => {
  		if (data && data.email && data.uid) {
	  		this.toast.create({
	  			message: `Welcome to APP_NAME, ${data.email}`,
	  			duration: 3000
	  		}).present();
  		}
  		else {
			this.toast.create({
	  			message: `Could not find authentication details`,
	  			duration: 3000
	  		}).present();
  		}

  	});
  }

}
