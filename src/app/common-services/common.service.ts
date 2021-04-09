import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { environment1 } from '../../environments/environment.prod';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class CommonService {
	token = JSON.parse(localStorage.getItem('adminLoginData') || '{}')
	constructor(private httpClient: HttpClient) {
		// console.log(JSON.parse(localStorage.getItem('adminLoginData') || '{}'));
	}
	httpOptions = {
		headers: new HttpHeaders({
			// 'Content-Type': 'application/json'
			'x-access-token': this.token.token
		})
	}
	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong.
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		// Return an observable with a user-facing error message.
		return throwError(
			'Something bad happened; please try again later.');
	}

	//////////////// API start //////////////////////////

	// specialProducts(data: any): Observable<any> {
	// 	return this.httpClient.get<any>(environment1.endPoint + "specialproductlistquartz")
	// 		.pipe(catchError(this.handleError))
	// }
	login(data: any): Observable<any> {
		return this.httpClient.post<any>(environment1.endPoint + "auth/signin", data)
			.pipe(catchError(this.handleError))
	}
	signup(data: any): Observable<any> {
		return this.httpClient.post<any>(environment1.endPoint + "auth/signup", data)
			.pipe(catchError(this.handleError))
	}
	logout(data: any): Observable<any> {
		return this.httpClient.get<any>(environment1.endPoint + "auth/logout",  this.httpOptions)
			.pipe()
	}

}
