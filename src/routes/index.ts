import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import { AppSettings } from '../config/config';
import * as mailer from '../utils/email';

/**
 * / route
 *
 * @class User
 */
export class IndexRoute extends BaseRoute {

  /**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log("[IndexRoute::create] Creating index route.");

    //add home page route
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new IndexRoute().index(req, res, next);
    });

    console.log("[IndexRoute::create] Creating send route.");

    router.post("/send", (req: Request, res: Response, next: NextFunction) => {
      var message = "e";
      mailer.sendEmail('valentinbonnard0303@gmail.com', req.body.subject, message);
      console.log('Email sent');
    });
  }

  /**
   * Constructor
   *
   * @class IndexRoute
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * The home page route.
   *
   * @class IndexRoute
   * @method index
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public index(req: Request, res: Response, next: NextFunction) {
    //set custom title
    this.title = "Web Dev | Bonnard Valentin";
    this.key = AppSettings.API_KEY_GOOGLE_MAP;

    //render template
    this.render(req, res, "index");
  }
  
}