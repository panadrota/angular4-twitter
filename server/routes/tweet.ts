import { Request, Response, Router } from "express";
import * as uuid from "uuid";
const tweetRouter: Router = Router();
const Twit = require('twit');

tweetRouter.get("/:hash", (request: Request, resp: Response) => {
  let T = new Twit({
    consumer_key:         'UGq1qonrqel2mbSW46A0BrnTP',
    consumer_secret:      '49bRiwq8OEnIWHHUnr9J59k3kqJVFDZWOXYOBnqNCTke8KPMic',
    access_token:         '207711836-GXVq3PvXC14JjU5WLypiAoLAMIy03IPElO0eY4IJ',
    access_token_secret:  '5RSRbf9OjZWPgvdxXobFvDDzeorflf81eGZBcdVJl7gGx',
    timeout_ms:           60*1000,  
  });

  T.get('search/tweets', { q: `#${request.params.hash}`, count: 10 }, function(err, data, response) {
    resp.json(data.statuses);
  })
});

tweetRouter.delete("/:id", (request: Request, response: Response) => {

  response.json({
    id: request.params.id,
  });

});

export { tweetRouter };
