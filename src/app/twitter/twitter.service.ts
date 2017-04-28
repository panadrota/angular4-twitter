import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TwitterService {

  constructor(public http: Http) {}

  /**
   * Get tweets by hash
   *
   * @param hash
   * @returns {Observable<Response>}
   */
  getTweets(hash: string): Observable<{}> {
    return this.http.get(`/api/tweet/${hash}`);    
  }

}
