const {Router} = require('express');

const putRouter = Router();

putRouter.put('/:id', (req, res)=>{
    res.status(200).send('Aca modifica toda la info')
});


module.exports = putRouter;