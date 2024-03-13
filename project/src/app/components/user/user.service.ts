import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userName!:string
  
  constructor(private _http: HttpClient) { }

  getUsersList(): Observable<User[]> {
    return this._http.get<User[]>('https://localhost:7020/api/User')
  }

  getUserById(id: number): Observable<User> {
    return this._http.get<User>(`https://localhost:7020/api/User/${id}`)
  }
 
  addUser(user: User) {
    return this._http.post('https://localhost:7020/api/User', user)
    // this.productsList.push(product)
  }

  updateUser(user: User)
  {
    return this._http.put('https://localhost:7020/api/User', user)
  }
}
