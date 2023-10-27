const {Router} = require('express');

// IMPORTAR TODAS LAS RUTAS
const getRouter = require('./getRouter');
const postRouter = require('./postRouter');
const deleteRouter = require('./deleteRouter');
const putRouter = require('./putRouter'); 



const mainRouter = Router();

//GET
mainRouter.use('/info', getRouter);
//POST
mainRouter.use('/info', postRouter);
//DELETE
mainRouter.use('/info', deleteRouter);
//PUT
mainRouter.use('/info', putRouter);


module.exports = mainRouter;