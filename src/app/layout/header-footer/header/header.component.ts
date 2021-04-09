import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from "../../../common-services/common.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	admin:any
  constructor(private CommonService:CommonService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
	  this.admin = JSON.parse(localStorage.getItem('adminLoginData') || '{}')
  }
  logout(){
	  console.log(this.admin.token)
	  let obj = {
		token:this.admin.token
	  }
	this.CommonService.logout(obj).subscribe(data=>{
		localStorage.removeItem('adminLoginData')
		localStorage.removeItem('adminIsLoggedIn')
		this.toastr.success('Logout Successfully', 'Success')
		this.router.navigate(['/login'])
	})
  }

}
