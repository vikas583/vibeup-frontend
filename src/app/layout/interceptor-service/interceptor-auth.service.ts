import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorAuthService implements HttpInterceptor{
  token = 'token';
	tokenValue = JSON.parse(localStorage.getItem('adminLoginData') || '{}')
	// actualToken = window.atob(this.tokenValue);

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
	  if (request.url.includes('login')){
		return next.handle(request);
	  }
		 request = request.clone({

		  headers: new HttpHeaders({
			'x-access-token': `${this.tokenValue.token}`,
				'Content-Type': 'application/json'
		  })
		});
		 return next.handle(request);
	  }

}
