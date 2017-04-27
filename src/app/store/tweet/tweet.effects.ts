import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import {
  TWEET_REMOVE, TWEET_REMOVE_FAIL, TWEET_REMOVE_SUCCESS, TWEETS_GET, TWEETS_GET_SUCCESS, TWEETS_GET_FAIL
} from './tweet.actions';

import { TwitterService } from '../../twitter/twitter.service';

@Injectable()
export class TweetEffects {
    
  @Effect()
  removeTweet$ = this.actions$
    .ofType(TWEET_REMOVE)
    .switchMap((action: Action) => {

      return this.http.delete('/api/tweet/' + action.payload)
        .map((response: Response) => response.json())
        .catch(() => Observable.of(({ type: TWEET_REMOVE_FAIL })))
        .map((response) => ({type: TWEET_REMOVE_SUCCESS, payload: response}));

    });

  @Effect()
  tweetsGet$ = this.actions$
    .ofType(TWEETS_GET)
    .switchMap((action: Action) => {

      return this.twitterService.getTweets(action.payload.hash)
        .map((response: Response) => response.json())
        .map((response) => ({type: TWEETS_GET_SUCCESS, payload: response}))
        .catch(() => Observable.of(({ type: TWEETS_GET_FAIL })));
      
    });

  constructor(private actions$: Actions, private twitterService: TwitterService, private http: Http) {}
}
