/*
 * Ares (https://ares.to)
 *
 * @license https://gitlab.com/arescms/ares-frontend/LICENSE (MIT License)
 *
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API, APIPagination} from '../_model/api';
import {environment} from '../../environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * Sends a POST request
   *
   * @param url
   * @param body
   * @param options
   * @param loader
   * @return Observable<API>
   */
  post(url: string, body: any = {}, options = {}): Observable<API> {
    return this.http.post<API>(
      `${environment.app.endpoint}/de/${url}`,
      body,
      options
    );
  }

  /**
   * Sends a GET request
   * @param url
   * @param options
   * @param loader
   * @return Observable<API>
   */
  get(url: string, options: {} = {}): Observable<API | APIPagination> {
    return this.http.get<API>(`${environment.app.endpoint}/de/${url}`, options);
  }

  /**
   * Sends a PUT request
   *
   * @param url
   * @param body
   * @param options
   * @param loader
   * @return Observable<API>
   */
  put(url: string, body: any = {}, options: {} = {}): Observable<API> {
    return this.http.put<API>(
      `${environment.app.endpoint}/de/${url}`,
      body,
      options
    );
  }

  /**
   * Sends a DELETE request
   *
   * @param url
   * @param options
   * @param loader
   * @return Observable<API>
   */
  delete(url: string, options: {} = {}): Observable<API> {
    return this.http.delete<API>(
      `${environment.app.endpoint}/de/${url}`,
      options
    );
  }

  /**
   * Appends the parameter to the pre-configured API URL
   *
   * @param value
   * @return string
   */
  url(value: string): string {
    return `${environment.app.endpoint}/de/${value}`;
  }
}
