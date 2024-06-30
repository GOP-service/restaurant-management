import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemConstant } from '../constants/system.constant';
import { URLConstant } from '../constants/url.constant';
import { ILoginDTO } from '../models/auth/account.model';
import { IToken } from '../models/common/response-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = 'http://localhost:8080';
  constructor(
    private http: HttpClient
  ) { }

  doLogin(accCred: ILoginDTO): Observable<IToken> {
    return this.http.post<IToken>(this.baseURL + URLConstant.API.AUTH.SIGNIN, accCred);
  }

  doLogout(): void {
    console.log('log out');
  }

  isLogged(): boolean {
    return this.getToken() != null;
  }

  setToken(token: IToken): void {
    localStorage.setItem(
      SystemConstant.CURRENT_MERCHANT,
      JSON.stringify(token),
    );
  }

  getToken(): IToken | null {
    const tmp = localStorage.getItem(SystemConstant.CURRENT_MERCHANT);
    return tmp ? JSON.parse(tmp) : null;
  }

  generateRefreshToken(): Observable<IToken> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()?.refreshToken}`,
    });
    return this.http.post<IToken>(this.baseURL + '/auth/refresh', '', { headers: header });
  }
}
