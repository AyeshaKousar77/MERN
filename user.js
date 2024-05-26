import express from 'express';
import registerController from '../controller/user/register.js'
import loginController from '../controller/user/login.js'
import {getAllLeagues} from '../controller/user/league.js';
import verifyToken from '../Middleware/jwt.js';
import { getAllGames } from '../controller/user/games.js'; 
import { getUpcomingEvents } from '../controller/user/upcomingEvents.js';
import { getPlayersWithSameGameValue } from '../controller/user/team.js';
import { getUser, updateUser, deleteUser } from '../controller/user/profile.js';
import {changePassword} from '../controller/user/updatePassword.js';


const User = express.Router();

User.put('/changePassword', verifyToken('changePassword'), changePassword);

User.get('/userProfile', verifyToken('userProfile'), getUser);
User.put('/userUpdate', verifyToken('userUpdate'), updateUser);
User.delete('/deleteAccount', verifyToken('deleteAccount'), deleteUser);

User.get('/team', verifyToken('getPlayersWithSameGameValue'), getPlayersWithSameGameValue);

// Route to get all upcoming events
User.get('/UpcomingEvent', getUpcomingEvents);

// Route to get all games
User.get('/games',  getAllGames);


// Route to register for a game
User.post('/register', registerController);


User.post('/login', loginController);



User.get('/leagues', verifyToken('leagues'), getAllLeagues);

export default User;
