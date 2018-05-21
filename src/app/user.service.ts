import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private githubApiUrl = 'https://api.github.com/';

  constructor(
    private http: HttpClient) { }

  /* GET users whose username contains search term */
  getUsers(username: string): Observable<any> {
    return this.http.get(`${this.githubApiUrl}search/users?q=${username}+type:user`)
      .pipe(
        catchError(this.handleError<User>(`getUsers username=${username}`))
      );
  }

  // This function returns the users's repos
  getUser(username: string): Observable<any> {
    return this.http.get(`${this.githubApiUrl}users/${username}`)
      .pipe(
        catchError(this.handleError<User>(`getUser username=${username}`))
      );
  }

  // This function returns the users's repos
  getRepositories(username: string): Observable<any> {
    return this.http.get(`${this.githubApiUrl}users/${username}/repos`)
      .pipe(
        catchError(this.handleError<User>(`getRepos username=${username}`))
      );
  }

  // This function returns the users's followers
  getFollowers(username: string): Observable<any> {
    return this.http.get(`${this.githubApiUrl}users/${username}/followers`)
      .pipe(
        catchError(this.handleError<User>(`getFollowers username=${username}`))
      );
  }

  // This function returns the users folowed by a particular username
  getFollowings(username): Observable<any> {
    return this.http.get(`${this.githubApiUrl}users/${username}/following`)
      .pipe(
        catchError(this.handleError<User>(`getFollowings username=${username}`))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
