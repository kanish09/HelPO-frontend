import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  logo = 'assets/3214742 (1).png';
  msg = '';
  form = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required])
  })
  constructor(public activeModal: NgbActiveModal, private userService: UserService, private modalService: NgbModal) { }
  get fullName() {
    return this.form.get('fullName');
  }
  get email() {
    return this.form.get('email');
  }
  get userName() {
    return this.form.get('userName');
  }
  get password() {
    return this.form.get('password');
  }
  get confirmpassword() {
    return this.form.get('confirmpassword');
  }
  ngOnInit(): void {
  }
  signup(f: any) {
    let user = f.value
    if (user.password !== user.confirmpassword) {
      this.msg = "Password not matched";
      return this.form.setErrors({ invalid: true });
    }
  }
}
