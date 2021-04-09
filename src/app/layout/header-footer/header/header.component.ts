import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from "../../services/user.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	admin:any
  constructor(private UserService:UserService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
	  this.admin = JSON.parse(localStorage.getItem('adminLoginData') || '{}')
  }
  logout(){
	this.UserService.logout().subscribe(data=>{
		localStorage.removeItem('adminLoginData')
		localStorage.removeItem('adminIsLoggedIn')
		this.toastr.success('Logout Successfully', 'Success')
		this.router.navigate(['/login'])
	})
  }

}
