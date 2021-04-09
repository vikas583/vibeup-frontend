import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common-services/common.service";
import { Router } from "@angular/router"
import { FormGroup, FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	form: FormGroup | any
	signup: FormGroup | any
	submitted = false
	signupSubmitted = false
	constructor(private CommonService: CommonService, private router: Router, readonly fb: FormBuilder,
		private toastr: ToastrService) { }

	ngOnInit(): void {
		
		this.form = this.fb.group({
			username: ['', [Validators.required]],
			password: ['', Validators.required]
		})
		this.signup = this.fb.group({
			
			first_name: ['', ],
			last_name: ['', ],
			mobile_no: ['', ],
			email: ['', ],
			username: ['', Validators.required],
			password: ['', Validators.required],
			confirm_password: ['', Validators.required],
			term:['', Validators.required],
		}, {
            validator: MustMatch('password', 'confirm_password')
        })
	}
	get f() { return this.form.controls; }
	get s() { return this.signup.controls; }
	login() {
		this.submitted = true
		if(this.form.status === "INVALID" ){
			this.toastr.warning('All fields are required', 'Warning')
			return
		}
		this.CommonService.login(this.form.value).subscribe(data => {
			console.log(data);
			if (data.status) {
						localStorage.setItem('adminIsLoggedIn', 'true')
						localStorage.setItem('adminLoginData', JSON.stringify(data))
						this.router.navigate(['/home'])
					this.toastr.success('Login Successfully', 'Success')
			}
			else {
				this.toastr.error(data.message, 'Error')
			}
		})
	}
	signupSubmit(){
		this.signupSubmitted = true
		console.log(this.signup);
		
		if(this.signup.status=== "INVALID"){
			return
		}
		delete this.signup.value.confirm_password
		delete this.signup.value.term
		this.CommonService.signup(this.signup.value).subscribe(data => {
			console.log(data);
			if (data.status) {
					this.signup.reset()	
					this.signupSubmitted = false
					this.ngOnInit()
					this.toastr.success('Signup Successfully', 'Success')
			}
			else {
				this.toastr.error(data.message, 'Error')
			}
		})
	}

}
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}