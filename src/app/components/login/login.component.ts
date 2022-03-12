import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = 'assets/3214742 (1).png';
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  constructor(public activeModal: NgbActiveModal) { }
  ngOnInit(): void {
  }
  login(f: any) {
    console.log(f.value)
    this.form.setErrors({invalid:true})
  }
}
