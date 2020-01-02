import { HttpClient } from '@angular/common/http';
import { ContactsService } from 'src/app/contacts.service';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactModel } from './shared/contactModel.model';



@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private contactservice: ContactsService, private http: HttpClient) {
}

  getData() {
    this.http.get('https://contactapp-34a85.firebaseio.com/data.json').subscribe(
      (resp: any) => {
        const data: ContactModel[] = resp ;
        this.contactservice.updateFromServer(data);
        // return data;
        // response.json();

      }
    );
  }

  saveData() {
    // fs.writeFileSync(filename, JSON.stringify(content));
    this.http.put('https://contactapp-34a85.firebaseio.com/data.json',
    this.contactservice.getContacts()).subscribe(
    (response => console.log(response)));
  }
}
