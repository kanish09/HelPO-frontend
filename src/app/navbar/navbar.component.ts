import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import * as $ from 'jquery'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    $(document).ready(function () {
      var trigger = $('.hamburger'),
          overlay = $('.overlay'),
         isClosed = false;
    
        trigger.click(function () {
          hamburger_cross();      
        });
    
        function hamburger_cross() {
    
          if (isClosed == true) {          
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
          } else {   
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
          }
      }
      
      $('[data-toggle="offcanvas"]').click(function () {
            $('#wrapper').toggleClass('toggled');
      });  
    });
  }
  login() {
    this.modalService.open(LoginComponent);
  }
  signup() {
    this.modalService.open(SignupComponent);
  }
}
