const {Router} = require('express');

const deleteRouter = Router();

deleteRouter.delete('/:id', (req, res)=>{
    res.status(200).send('Aca borra toda la info')
});


module.exports = deleteRouter;