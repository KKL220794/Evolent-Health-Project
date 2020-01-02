import { NewContactComponent } from './contact/new-contact/new-contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { StartComponent } from './contact/start/start.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';


const routes: Routes = [
  {path: '' , redirectTo: '/contact' , pathMatch: 'full' },
  {path: 'contact' , component: ContactComponent, children: [
    { path: '', component: StartComponent},
    { path: 'new', component: NewContactComponent},
    { path: ':id', component: ContactDetailComponent},
    { path: ':id/edit', component: ContactEditComponent},
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
