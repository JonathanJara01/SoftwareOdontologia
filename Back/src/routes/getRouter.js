const {Router} = require('express');

const getRouter = Router();

getRouter.get('/', (req, res)=>{
    res.status(200).send('Aca toda la info')
});


module.exports = getRouter;