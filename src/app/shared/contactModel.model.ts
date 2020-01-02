export class ContactModel {
  fname: string;
  lname: string;
  gender: string;
  phno: string;
  email: string;
  image: string;
  address: string;
  city: string;
  province: string;
  postal: string;
  status: string;

  constructor(contact) {
    this.fname = contact.fname;
    this.lname = contact.lname;
    this.gender = contact.gender;
    this.phno = contact.phno;
    this.email = contact.email;
    this.image = contact.image;
    this.address = contact.address;
    this.city = contact.city;
    this.province = contact.province;
    this.postal = contact.postal;
    this.status = contact.status;
  }


}
