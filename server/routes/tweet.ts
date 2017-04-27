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

tweetRouter.post("/", (request: Request, response: Response) => {

  response.json(tweets);
});

tweetRouter.delete("/:id", (request: Request, response: Response) => {

  response.json({
    id: request.params.id,
  });

});

export { tweetRouter };
