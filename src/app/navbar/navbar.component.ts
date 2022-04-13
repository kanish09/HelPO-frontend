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
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    $(document).ready(function () {
      // Requires jQuery

      $(document).on('click', '.js-menu_toggle.closed', function (e) {
        e.preventDefault(); $('.list_load, .list_item').stop();
        $(this).removeClass('closed').addClass('opened');

        $('.side_menu').css({ 'left': '0px' });

        var count = $('.list_item').length;
        $('.list_load').slideDown((count * .6) * 100);
        $('.list_item').each(function (i) {
          var thisLI = $(this);
          let timeOut = 100 * i;
          setTimeout(function () {
            thisLI.css({
              'opacity': '1',
              'margin-left': '0'
            });
          }, 100 * i);
        });
      });

      $(document).on('click', '.js-menu_toggle.opened', function (e) {
        e.preventDefault(); $('.list_load, .list_item').stop();
        $(this).removeClass('opened').addClass('closed');

        $('.side_menu').css({ 'left': '-250px' });

        var count = $('.list_item').length;
        $('.list_item').css({
          'opacity': '0',
          'margin-left': '-20px'
        });
        $('.list_load').slideUp(300);
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
