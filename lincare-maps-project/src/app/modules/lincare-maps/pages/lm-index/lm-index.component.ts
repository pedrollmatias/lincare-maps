import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Location } from '@angular/common';
import { LincareMapsService } from '../../services/lincare-maps.service';
import { WarningDialogComponent } from '../../../../shared/components/dialogs/warning-dialog/warning-dialog.component';


@Component({
  selector: 'app-lm-index',
  templateUrl: './lm-index.component.html',
  styleUrls: ['./lm-index.component.scss']
})
export class LmIndexComponent {

	// Cep input
	cep = new FormControl('', Validators.minLength(9));
	// Google Maps coordinates handle
	lat: number = -19.9534829;
	lng: number = -43.9311727;
	// Address
  address: string;
  // Show/Hide loading spinner
  loadingIcon: boolean = false;
  // Handle cep validation
  isValidCep: boolean = false;
  // Disable Search button
  showSearchButton: boolean = false;
  // Show/Hide Searchbar and Address Box
  showSearchBar: boolean = true;
  // Cep input mask (xxxxx-xx)
  public cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  constructor(
  	private lincareMapsService: LincareMapsService, 
  	public warningDialog: MatDialog,
  	private location: Location
  ) {}

  // When any key is pressed inside Cep Input, onCepChange is fired
  onCepChange(): void{
  	// Subscribe on the event emmited when value of cep changes
  	this.cep.valueChanges.subscribe(data => {
  		// Reset cep validation
  		this.isValidCep = false;
  		// If cep length is equal to 9 (9 with "-"), allow search button. Otherwise, disable
      if(data.toString().length == 9){
        this.showSearchButton = true;
      }else{
      	this.showSearchButton = false;
      }
    });
  }

  // Clear cep input properties (valid/invalid, touched/untoucher, dirty/pristine)
  resetInput(){
  	this.cep.reset(this.cep.value);
  }

  // Get address by Cep
  getAddress(cep: FormControl): void {
  	// Reset field properties for a possible future search
  	this.resetInput();
  	// Fires loading spinner
  	this.loadingIcon = true;
  	// Make a get in some API, and subscribe in its callback. See lincare-maps.service
  	// Find address by cep. Save response in "data"
  	this.lincareMapsService.getAddress(cep)
  		.subscribe(
  			(data) => {
  				// Save address JSON
  				this.address = data;
  				// format address to pass it correctly to Google Maps API
  				let addressParams = 
	  				data.logradouro + ', ' 
			  		+ data.bairro + ', '
			  		+ data.localidade + ', '
			  		+ data.uf + ', BR'
	  			addressParams = addressParams.split(' ').join('+');
	  			// Find latitude and longitude by address
	  			this.lincareMapsService.getCoordinates(addressParams)
	  				.subscribe((data) => {
	  					// Error
	  					if(data.status == 'ZERO_RESULTS'){
	  						this.isValidCep = false;
	  						// Call function to open a failed response dialog/modal
	  						this.openInvalidCepDialog();
	  					//Success
	  					}else{
	  						// Validation Cep
		  					this.isValidCep = true;
		  					// Store values in "lat" and "lng" for two way data binding
		  					this.lat = data.results[0].geometry.location.lat;
		  					this.lng = data.results[0].geometry.location.lng;
	  					}
	  					// Hide loading spinner
		  				this.loadingIcon = false;
	  				});
		  	}
	  	);
  }

  // Show dialog when cep don't match.
  openInvalidCepDialog(): void {
    const dialogRef = this.warningDialog.open(WarningDialogComponent, {
      // width of modal
      width: '330px',
      // Data passed to dialog component
      data: {
      	icon: 'warning',
      	title: 'Ops!',
      	content: 'O CEP fornecido não foi encontrado.',
      	cep: this.cep}
    });
  }

  // Reload page when click in Lincare logo
  refreshPage() {
	  location.reload()
	}

}
