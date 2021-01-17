import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {API} from 'src/app/_model/api';
import {ApiService} from 'src/app/_service/api.service';
import {UserService} from 'src/app/_service/user.service';

@Injectable({
  providedIn: 'root',
})
/**
 * @class AuthService
 */
export class AuthService {
  constructor(
    private apiService: ApiService,
    private userService: UserService
  ) {}

  /**
   * Authenticates a user provided by his
   * username and password
   *
   * @public
   * @param username
   * @param password
   * @returns Observable<string>
   */
  public auth(username: string, password: string): Observable<string> {
    return this.apiService
      .post('login', {username, password})
      .pipe(map((e) => (this.userService.token = e.data.token)));
  }

  /**
   * Terminates the current session
   *
   * @returns Promise<void | API>
   */
  public logout(): Promise<void | API> {
    localStorage.removeItem('ares-user');
    this.userService.change(null);

    return this.apiService
      .post(
        'logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${this.userService.token}`,
          },
        }
      )
      .toPromise()
      .finally(() => localStorage.removeItem('ares-token'));
  }

  /**
   * Determinate if user is authenticated
   *
   * public
   * @returns boolean
   */
  public get isAuthenticated(): boolean {
    return !!(this.userService.user && this.userService.token);
  }
}
