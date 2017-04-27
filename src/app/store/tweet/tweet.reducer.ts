import { Action, ActionReducer } from '@ngrx/store';
import { TWEET_REMOVE, TWEET_REMOVE_FAIL, TWEET_REMOVE_SUCCESS, TWEETS_GET, TWEETS_GET_SUCCESS, TWEETS_GET_FAIL } from './tweet.actions';

export interface ITweet {
  id: string;
  text: string;
  created_at: string;
  user: ITweetUser;
}

export interface ITweetUser {
  id: string;
  name: string;
}

export const tweetReducer: ActionReducer<ITweet[]> = (state: Array<ITweet> = [], action: Action): ITweet[] => {

  switch (action.type) {

    case TWEETS_GET:
      return Object.assign({}, state, {
        isFetching: true
      });

    case TWEET_REMOVE_SUCCESS:
      return state.filter((tweet: ITweet) => action.payload.id != tweet.id);
    
    case TWEETS_GET_SUCCESS:
      return action.payload;

    case TWEETS_GET_FAIL:
      return Object.assign({}, state, {
        dataError: true
      });

    default:
      return state;
  }
};
