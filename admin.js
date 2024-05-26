import express from 'express';
import authController from '../controller/admin/authentication.js';
import {getAdmin} from '../controller/admin/adminProfile.js'
import verifyToken from '../Middleware/jwt.js';
import {addLeague, updateLeague, deleteLeague, getLeagues, searchLeagues  } from '../controller/admin/handleleagues.js';
const AdminRoute = express.Router();
import {getAllEvents, getEventById, addEvent, updateEvent, deleteEvent} from '../controller/admin/handleEvents.js';


AdminRoute.get('/adminProfile', verifyToken('adminProfile'), getAdmin);
AdminRoute.post('/login', authController);
AdminRoute.post('/addLeagues', verifyToken('addLeague'), addLeague);
AdminRoute.put('/update/:id', verifyToken('updateLeague'), updateLeague);
AdminRoute.delete('/deleteLeagues', verifyToken('deleteLeagues'), deleteLeague);
AdminRoute.get('/getLeagues', verifyToken('getLeagues'), getLeagues);
AdminRoute.get('/searchLeagues', verifyToken('searchLeagues'), searchLeagues);
AdminRoute.get('/events', getAllEvents);
AdminRoute.get('/events/:id', getEventById);
AdminRoute.post('/addevents', addEvent);
AdminRoute.put('/updateevents/:id', updateEvent);
AdminRoute.delete('/deleteevents/:id', deleteEvent);
export default AdminRoute;