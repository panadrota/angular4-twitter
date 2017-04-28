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
  form: FormGroup;

  constructor(public fb: FormBuilder, public store: Store<IAppState>) {
    this.tweets$ = store.select('tweet');
    this.form = fb.group({
      text: ['', Validators.required]
    });
  }
  
  submitSearch(): void {
    if (this.form.valid) {
      this.store.dispatch({
        type: TWEETS_GET,
        payload: {
          hash: this.form.value.text
        }
      });
      this.form.reset();
    }
  }

  removeTweet(tweet: {}): void {
    this.store.dispatch({
      type: TWEET_REMOVE,
      payload: tweet
    });
  }
}
