import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from "../../services/user.service";
declare var $: any;
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	admin: any
	checkToggle: boolean = true
	constructor(private UserService: UserService, private router: Router, private toastr: ToastrService) { }

	ngOnInit(): void {
		this.admin = JSON.parse(localStorage.getItem('adminLoginData') || '{}')
	}
	toggle(evt: any) {
		console.log(evt);

		if (evt == 'true') {
			$(".wrapper").addClass("open");
			$(".fixed-sidebar").addClass("lg-menu-open");
		} else {
			$(".wrapper").removeClass("open");
			$(".fixed-sidebar").removeClass("lg-menu-open");

		}
	}
	chatToggle(){
		console.log('acd', this.checkToggle);
		
		if(this.checkToggle==true){
			$(".chat-toggle").addClass("chat-head-hide");
			this.checkToggle=false
		}else{
			$(".chat-toggle").removeClass("chat-head-hide");
			this.checkToggle=true
		}
	}
	logout() {
		this.UserService.logout().subscribe(data => {
			localStorage.removeItem('adminLoginData')
			localStorage.removeItem('adminIsLoggedIn')
			this.toastr.success('Logout Successfully', 'Success')
			this.router.navigate(['/login'])
		})
	}

}
