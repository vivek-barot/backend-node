import { Router } from 'express';
import { Validator } from '../../validate';
import { UserController } from './user.controller';

const router: Router = Router();
const v: Validator = new Validator();
const userController = new UserController();

export const userRoute: Router = router;