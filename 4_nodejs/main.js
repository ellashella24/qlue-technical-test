import http from 'http';
import express from 'express';
import UserController from './app/controller/user.js';

const router = express();

/** Express Json */
router.use(express.json());

/** Routes */
router.get('/users', UserController.getList);

/** Server */
const httpServer = http.createServer(router);
const PORT = 3100;
httpServer.listen(PORT, () => console.log(`API Gateway is running on port: ${PORT}`));