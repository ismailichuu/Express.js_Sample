import express from 'express';
import { fetchData } from '../middleware/cardMiddle.js';
import { logger } from '../middleware/login.js';
import { getHomepage } from '../controllers/homePage.js';
import { getLogin, handleLogin, handleLogout } from '../controllers/logCon.js';
import { getUsers } from '../controllers/usersPage.js';
import { addTodo, deleteTodo, getTodo } from '../controllers/todo.js';
const router = express.Router();

//get gome page
router.get('/', logger, fetchData, getHomepage);

//get login page
router.get('/login', getLogin);

//post loginpage
router.post('/login', handleLogin);

// logout
router.get('/logout', handleLogout);

//basic dynamic table
router.get('/users', getUsers);

//todo list
router.get('/todo', getTodo);

//todo add
router.post('/add',addTodo);

//todo delete
router.post('/delete', deleteTodo);

export default router;