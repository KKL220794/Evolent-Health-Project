import { HttpClient } from '@angular/common/http';
import { ContactsService } from 'src/app/contacts.service';
import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ContactModel } from './shared/contactModel.model';



@Injectable({
  providedIn: 'root'
})
export class ServerService {

  loader = new BehaviorSubject<boolean>(false);

  constructor(private contactservice: ContactsService, private http: HttpClient) {
}

  getData() {
    this.loader.next(true);
    this.http.get('https://contactapp-34a85.firebaseio.com/data.json').subscribe(
      (resp: any) => {
        this.loader.next(false);
        const data: ContactModel[] = resp ;
        this.contactservice.updateFromServer(data);
        // return data;
        // response.json();

      }
    );
  }

  saveData(): Observable<any> {
    // fs.writeFileSync(filename, JSON.stringify(content));
    return this.http.put('https://contactapp-34a85.firebaseio.com/data.json',
    this.contactservice.getContacts());
  }
}
