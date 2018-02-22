import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { ContactFormComponent } from './contact-form/contact-form.component'
import { FormatCurrentPipe } from './pipes/format-current.pipe'
import { FormatDatePipe } from './pipes/format-date.pipe'
import { ContactDirective } from './directives/contact.directive'
import { ContactListComponent } from './contact-list/contact-list.component'
import { ContactService } from './services/contact.service'
import { AddressService } from './services/address.service'
import { AddressComponent } from './address/address.component'

const routes:Routes = [
	{path: 'contacts', component: ContactListComponent},
	{path: 'contacts/create', component: ContactFormComponent},
	{path: 'search-for-area-code', component: AddressComponent},
]

@NgModule({
	declarations: [
    	AppComponent,
    	ContactFormComponent,
    	FormatCurrentPipe,
    	FormatDatePipe,
    	ContactDirective,
    	ContactListComponent,
    	AddressComponent
  	],
  	
  	imports: [
	    BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot(routes)
  	],
  	
  	providers: [
		ContactService,
		AddressService
	],

  	bootstrap: [AppComponent]
})

export class AppModule { }