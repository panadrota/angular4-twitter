import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TwitterService {

  private mashapeKey = 'O9p2cWOU18mshKOD0m6aBMMVXOrxp1PaIUYjsniijuS94Ib56u';

  constructor(public http: Http) {}

  /**
   * Get weather forecast
   *
   * @param longitude
   * @param latitude
   * @returns {Observable<Response>}
   */
  getTweets(hash: string): Observable<{}> {

    return this.http.get(`https://simple-weather.p.mashape.com/weatherdata?lat=${hash}`, {
      headers: new Headers({
        'X-Mashape-Key': this.mashapeKey,
        'Accept': 'application/json'
      })
    });
  }

}
