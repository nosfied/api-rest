import { Router } from 'express';
import usercontroller from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não precisa existir no sistema
// router.get('/', usercontroller.index);
// router.get('/:id', usercontroller.show);

router.post('/', loginRequired, usercontroller.store);
router.put('/', loginRequired, usercontroller.update);
router.delete('/', loginRequired, usercontroller.delete);

export default router;
