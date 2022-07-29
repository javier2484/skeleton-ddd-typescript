import {Request, Response, Router } from 'express';
import container from '../dependency-injection';
import {StatusGetController} from '../controllers/StatusGetController';

export const register = (router: Router) => {
 const controller: StatusGetController = container.get('Apps.mooc.controllers.StatusGetController');
 router.get('/status', (req: Request, res: Response) => controller.run(req, res));
};
