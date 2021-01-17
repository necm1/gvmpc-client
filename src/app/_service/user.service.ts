import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {ApiService} from './api.service';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root',
})
/**
 * @class UserService
 */
export class UserService {
  /**
   * @private
   * @property
   */
  private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    JSON.parse(JSON.parse(localStorage.getItem('ares-user')))
  );

  /**
   * UserService constructor
   *
   * @constructor
   * @param apiService
   * @param loggerService
   */
  constructor(
    private apiService: ApiService,
    private loggerService: LoggerService
  ) {}

  /**
   * Gets a user by the provided token
   *
   * @param token
   * @return Observable<User>
   */
  get(token: string = null): Observable<any> {
    return this.apiService
      .get('user', {headers: {Authorization: `Bearer ${token}`}})
      .pipe(
        map((response) => {
          if (token && !this.token) {
            this.token = token;
          }

          localStorage.setItem('ares-user', JSON.stringify(response.data));
          this.change(response.data);

          return response.data;
        })
      );
  }

  /**
   * Updates the value in the BehaviorSubject
   *
   * @param user
   */
  public change(user: any): void {
    this.userSubject.next(user);
  }

  /**
   * Returns token from local storage
   *
   * @returns string
   */
  get token(): string {
    return localStorage.getItem('ares-token');
  }

  /**
   * Set local storage token
   *
   * @param value
   */
  set token(value: string) {
    localStorage.setItem('ares-token', value);
  }

  /**
   * Returns the current user
   *
   * @return User
   */
  get user(): any {
    return this.userSubject.value;
  }
}
