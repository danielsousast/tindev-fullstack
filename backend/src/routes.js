const { Router } = require('express');
const { route } = require('./app');
const DevController = require('./core/controllers/DevController');
const LikeController = require('./core/controllers/LikeController');
const DislikeController = require('./core/controllers/DislikeController');

const routes = new Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;