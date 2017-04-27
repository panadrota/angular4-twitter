import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { TWEET_REMOVE, TWEETS_GET } from '../store/tweet/tweet.actions';
import { IAppState } from '../store';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent {
  form: FormGroup;

  tweets$: Observable<{}>;

  constructor(public fb: FormBuilder, public store: Store<IAppState>) {
    this.tweets$ = store.select('tweet');
  }
  
  getTweets(): void {

    this.store.dispatch({
      type: TWEETS_GET,
      payload: {
        hash: this.form.get('hash').value
      }
    });
  }

  removeTweet(tweet: {}): void {

    this.store.dispatch({
      type: TWEET_REMOVE,
      payload: tweet
    });

  }
}
