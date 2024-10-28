const { Router } = require("express");
const userController = require('../controllers/userController');
const router = Router();
const { validateUser, validateUserId } = require('../middlewares/validateUser');

router.post('/', validateUser, userController.create); //função de criar

//função de editar
router.put('/:id', validateUser, validateUserId, userController.update); // parametro id

//função de deletar
router.delete('/:id', validateUserId, userController.delete); // parametro id

//função buscar único
router.get('/:id', validateUserId, userController.getOne); //parametro id

router.get('/', userController.getAll); //parametro id

// Clean Code -> MongoDB -> TypeScript -> Tests

module.exports = router;