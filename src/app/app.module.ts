import { NewContactComponent } from './contact/new-contact/new-contact.component';
import { AppRoutingModule } from './app-routing.module';
import { ServerService } from './server.service';
import { ContactsService } from './contacts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './contact/start/start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule} from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactEditComponent,
    StartComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [ContactsService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
