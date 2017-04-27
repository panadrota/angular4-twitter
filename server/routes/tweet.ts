import { Request, Response, Router } from "express";
import * as uuid from "uuid";

const tweetRouter: Router = Router();

const tweets = [
  {
    id: 1,
    text: "test1",
    date: "date1"
  },{
    id: 2,
    text: "test2",
    date: "date2"
  },{
    id: 2,
    text: "test2",
    date: "date2"
  },{
    id: 3,
    text: "test3",
    date: "date3"
  },
];

tweetRouter.get("/:hash", (request: Request, response: Response) => {
  setTimeout(() => {response.json(tweets)}, 5000);  
  //return this.http.get(`http://search.twitter.com/search.json?q=%23test`);      
});

tweetRouter.delete("/:id", (request: Request, response: Response) => {

  response.json({
    id: request.params.id,
  });

});

export { tweetRouter };
