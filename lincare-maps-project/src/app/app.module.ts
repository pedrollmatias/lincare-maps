import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule	} from '@angular/router';
import { routes } from './app.routing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { 
					MatButtonModule,
					MatInputModule,
					MatFormFieldModule,
					MatIconModule,
					MatCardModule,
					MatProgressSpinnerModule,
					MatChipsModule,
					MatDialogModule,
				} from '@angular/material';

import { AppComponent } from './app.component';
import { LmIndexComponent } from './modules/lincare-maps/pages/lm-index/lm-index.component';
import { WarningDialogComponent } from './shared/components/dialogs/warning-dialog/warning-dialog.component';
import { AgmCoreModule } from '@agm/core';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    LmIndexComponent,
    WarningDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDimpTu9QuSSBJWu5zuSBmEI4UpsldMzhg'
    }),
    TextMaskModule,
  ],
  entryComponents: [
    WarningDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
