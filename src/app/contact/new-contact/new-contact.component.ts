import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { ContactModel } from 'src/app/shared/contactModel.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  index: number;
  contactForm: FormGroup;
  datePickerConfig: Partial<BsDatepickerConfig>;
  state: Boolean = true;
  emp: ContactModel;

  constructor(private route: ActivatedRoute , private contactservice: ContactsService,
              private router: Router, private sservice: ServerService) {

      this.forminit();

   }

  ngOnInit() {
  }

  private forminit() {

    this.emp = new ContactModel({});
    this.contactForm = new FormGroup({
      fname : new FormControl(this.emp.fname, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]),
      lname : new FormControl(this.emp.lname, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]),
      gender : new FormControl(this.emp.gender, Validators.required),
      status : new FormControl(this.emp.status, Validators.required),
      phno : new FormControl(this.emp.phno, [Validators.required, Validators.
        pattern(/^[1-9][0-9]{2}-[0-9]{3}-[0-9]{4}$/)]),
      email : new FormControl(this.emp.email, Validators.required),
    });

  }

  onSubmit() {
    this.emp.fname = this.contactForm.value.fname;
    this.emp.lname = this.contactForm.value.lname;
    this.emp.gender = this.contactForm.value.gender;
    this.emp.status = this.contactForm.value.status;
    this.emp.phno = this.contactForm.value.phno;
    this.emp.email = this.contactForm.value.email;
    // console.log(this.emp);
    this.contactservice.createNewContact( this.emp);
    this.state = false;
    this.sservice.saveData();
    alert('Hoorah!!! Update Successful');
    this.onCancel();
    // this.sservice.getData();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo : this.route});
  }

  onMain() {
    this.router.navigate(['/']);
    // this.sservice.getData();
  }

}
