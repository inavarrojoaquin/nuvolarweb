import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './models/user';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private githubApiUrl = 'https://api.github.com/';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /* GET heroes whose name contains search term */
  /*
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty user array.
      return of([]);
    }
    return this.http.get<User[]>(`${this.githubApiUrl}/?q=${term}`)
      .pipe(
        tap(_ => this.log(`found users matching "${term}"`)),
        catchError(this.handleError<User[]>('searchUsers', []))
      );
  }*/

  // This function returns all the users that match with username
  getUsers(username: string): Observable<any> {

        const endPoint = `${this.githubApiUrl}search/users?q=${username}+type:user`;

        return this.http.get(endPoint);
    }

  // This function returns the users's repos
  getUser(username: string): Observable<any> {
    const url = `${this.githubApiUrl}users/${username}`;
    return this.http.get(url)
      .pipe(
        catchError(this.handleError<User>(`getUser username=${username}`))
      );
  }

  // This function returns the users's repos
  getRepositories(username: string): Observable<any> {
    const url = `${this.githubApiUrl}users/${username}/repos`;
    return this.http.get(url)
      .pipe(
        catchError(this.handleError<User>(`getRepos username=${username}`))
      );
  }

  // This function returns the users's followers
  getFollowers(username: string): Observable<any> {

    const url = `${this.githubApiUrl}users/${username}/followers`;
    return this.http.get(url)
      .pipe(
        catchError(this.handleError<User>(`getFollowers username=${username}`))
      );
  }

  // This function returns the users folowed by a particular username
  getFollowings(username): Observable<any> {
    const url = `${this.githubApiUrl}users/${username}/following`;
    return this.http.get(url)
      .pipe(
        catchError(this.handleError<User>(`getFollowings username=${username}`))
      );
  }

  /** Log a UserService message with the MessageService */
  private log(message: string) {
   this.messageService.add('UserService: ' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
