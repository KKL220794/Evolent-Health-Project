import { ServerService } from 'src/app/server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isLoading = false;

  constructor(private serverService: ServerService) { }

  ngOnInit() {

    this.serverService.loader.subscribe(data => {
      this.isLoading = data;
    });
  }

}
