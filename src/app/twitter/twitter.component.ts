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
  tweets$: Observable<{}>;

  constructor(public store: Store<IAppState>) {
    this.tweets$ = store.select('tweet');
  }
  
  submitSearch(searchForm: FormGroup): void {
    if (searchForm.valid) {
      this.store.dispatch({
        type: TWEETS_GET,
        payload: {
          hash: searchForm.value.text
        }
      });
      searchForm.reset();
    }
  }

  removeTweet(tweet: {}): void {
    this.store.dispatch({
      type: TWEET_REMOVE,
      payload: tweet
    });
  }
}
