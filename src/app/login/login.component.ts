import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common-services/common.service";
import { Router } from "@angular/router"
import { FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	form: FormGroup | any
	submitted = false
	constructor(private CommonService: CommonService, private router: Router, readonly fb: FormBuilder) { }

	ngOnInit(): void {
		this.form = this.fb.group({
			username: ['', [Validators.required]],
			password: ['', Validators.required]
		})
	}
	get f() { return this.form.controls; }
	login() {
		this.submitted = true
		this.CommonService.login(this.form.value).subscribe(data => {
			console.log(data);
			if (data.status) {
				alert(data.message)
			}
			else {
				alert(data.message)
			}


		})
	}

}
